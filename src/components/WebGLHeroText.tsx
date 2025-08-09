'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
// @ts-ignore - troika-three-text doesn't have types
import { Text } from 'troika-three-text'
import { EffectComposer, RenderPass, ChromaticAberrationEffect, EffectPass } from 'postprocessing'

export const heroConfig = {
  warpIntensity: 0.4,
  noiseFreq: 1.2,
  damping: 0.08,
  distortionRadius: 0.15,
  chromAberrationPx: {
    desktop: 0.8,
    mobile: 0.5
  },
  idleMotionSpeed: 0.2,
  performanceMode: false
}

interface WebGLHeroTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const vertexShader = `
  uniform float uTime;
  uniform float uWarpIntensity;
  uniform float uNoiseFreq;
  uniform vec2 uPointer;
  uniform float uPointerInfluence;
  uniform float uDistortionRadius;
  
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
  }
  
  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vec3 pos = position;
    
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vec2 screenPos = worldPos.xy;
    
    float distanceFromPointer = length(screenPos - uPointer);
    float normalizedDistance = distanceFromPointer / uDistortionRadius;
    
    float influence = smoothstep(1.0, 0.0, normalizedDistance) * uPointerInfluence;
    influence = influence * influence; // Quadratic falloff for sharper edges
    
    float idleNoise = snoise(vec3(pos.xy * 1.2, uTime * 0.3)) * 0.008;
    
    if (influence > 0.01) {
      float noise = snoise(vec3(pos.xy * uNoiseFreq + uTime * 0.2, uTime * 0.4));
      vec2 distortion = vec2(
        noise,
        snoise(vec3(pos.xy * uNoiseFreq + 100.0, uTime * 0.4))
      ) * influence * uWarpIntensity;
      
      pos.xy += distortion;
    }
    
    pos.xy += vec2(idleNoise * 0.5);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform vec3 color;
  uniform float uTime;
  
  void main() {
    vec3 finalColor = color;
    
    float shift = sin(uTime * 2.0) * 0.02;
    finalColor.r += shift;
    finalColor.b -= shift;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`



function WebGLTextCanvas({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    composer: EffectComposer | null
    textMesh: THREE.Mesh | null
    material: THREE.ShaderMaterial | null
    chromaEffect: ChromaticAberrationEffect | null
    animationId: number | null
  }>()
  
  useEffect(() => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    })
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio))
    
    const textMesh = new Text()
    textMesh.text = text
    textMesh.fontSize = 0.8
    textMesh.color = 0xffffff
    textMesh.anchorX = 'center'
    textMesh.anchorY = 'middle'
    textMesh.maxWidth = 8
    
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uWarpIntensity: { value: heroConfig.warpIntensity },
        uNoiseFreq: { value: heroConfig.noiseFreq },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uPointerInfluence: { value: 0 },
        uDistortionRadius: { value: heroConfig.distortionRadius },
        color: { value: new THREE.Color(0xffffff) }
      },
      transparent: true
    })
    
    textMesh.sync(() => {
      textMesh.material = material
    })
    
    scene.add(textMesh)
    camera.position.z = 5
    
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    
    const isMobile = window.innerWidth < 768
    const chromaStrength = isMobile ? heroConfig.chromAberrationPx.mobile : heroConfig.chromAberrationPx.desktop
    
    const chromaEffect = new ChromaticAberrationEffect({
      offset: new THREE.Vector2(chromaStrength * 0.001, chromaStrength * 0.001),
      radialModulation: false,
      modulationOffset: 0
    })
    
    const effectPass = new EffectPass(camera, chromaEffect)
    
    composer.addPass(renderPass)
    composer.addPass(effectPass)
    
    sceneRef.current = {
      scene,
      camera,
      renderer,
      composer,
      textMesh,
      material,
      chromaEffect,
      animationId: null
    }
    
    let pointer = { x: 0, y: 0 }
    let pointerInfluence = 0
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      pointerInfluence = 1.0
    }
    
    const handleMouseLeave = () => {
      pointerInfluence = 0
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    
    const animate = () => {
      if (!sceneRef.current) return
      
      const { material: mat, composer: comp, chromaEffect } = sceneRef.current
      
      if (mat) {
        mat.uniforms.uTime.value = performance.now() * 0.001 * heroConfig.idleMotionSpeed
        
        const current = mat.uniforms.uPointerInfluence.value
        mat.uniforms.uPointerInfluence.value = THREE.MathUtils.lerp(
          current,
          pointerInfluence,
          heroConfig.damping
        )
        
        mat.uniforms.uPointer.value.set(pointer.x, pointer.y)
        
        if (chromaEffect) {
          const warpInfluence = mat.uniforms.uPointerInfluence.value
          const baseStrength = window.innerWidth < 768 ? 
            heroConfig.chromAberrationPx.mobile : 
            heroConfig.chromAberrationPx.desktop
          const dynamicStrength = baseStrength * (1 + warpInfluence * 0.5)
          chromaEffect.offset.set(dynamicStrength * 0.001, dynamicStrength * 0.001)
        }
      }
      
      if (comp) {
        comp.render()
      }
      
      sceneRef.current.animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      if (!sceneRef.current) return
      
      const { camera: cam, renderer: rend, composer: comp } = sceneRef.current
      cam.aspect = canvas.clientWidth / canvas.clientHeight
      cam.updateProjectionMatrix()
      rend.setSize(canvas.clientWidth, canvas.clientHeight)
      if (comp) {
        comp.setSize(canvas.clientWidth, canvas.clientHeight)
      }
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      
      if (sceneRef.current?.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId)
      }
      
      if (sceneRef.current) {
        sceneRef.current.composer?.dispose()
        sceneRef.current.renderer.dispose()
        sceneRef.current.material?.dispose()
        sceneRef.current.textMesh?.geometry.dispose()
      }
    }
  }, [text])
  
  return (
    <div className="relative" style={style}>
      <h1 className={`${className} sr-only`} aria-label={text}>
        {text}
      </h1>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  )
}

export default function WebGLHeroText({ text, className, style }: WebGLHeroTextProps) {
  const [supportsWebGL2, setSupportsWebGL2] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
    
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2')
    setSupportsWebGL2(!!gl)
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  const shouldUseFallback = heroConfig.performanceMode || !supportsWebGL2 || prefersReducedMotion
  
  if (!isClient) {
    return (
      <h1 className={className} aria-label={text}>
        {text}
      </h1>
    )
  }
  
  if (shouldUseFallback) {
    return (
      <motion.h1
        className={`${className} flex items-center justify-center h-full`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        aria-label={text}
        style={{
          ...style,
          filter: prefersReducedMotion ? 'none' : 'url(#advanced-warp-filter)',
          fontSize: style?.fontSize || 'clamp(3rem, 12vw, 8rem)',
          lineHeight: 1.1
        }}
      >
        {text}
        <svg width="0" height="0">
          <defs>
            <filter id="advanced-warp-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence 
                baseFrequency="0.02 0.01" 
                numOctaves="4" 
                result="noise"
              />
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise" 
                scale="4"
                result="displacement"
              />
              <feColorMatrix 
                in="displacement"
                type="matrix"
                values="1.02 0 0 0 0
                        0 0.98 0 0 0
                        0 0 1.04 0 0
                        0 0 0 1 0"
                result="chromatic"
              />
              <feGaussianBlur 
                in="chromatic" 
                stdDeviation="0.5"
                result="glow"
              />
              <feComposite 
                in="chromatic" 
                in2="glow" 
                operator="screen"
              />
            </filter>
          </defs>
        </svg>
      </motion.h1>
    )
  }
  
  return <WebGLTextCanvas text={text} className={className} style={style} />
}
