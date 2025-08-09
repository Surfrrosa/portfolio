'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
// @ts-ignore - troika-three-text doesn't have types
import { Text } from 'troika-three-text'
import { EffectComposer, RenderPass, ChromaticAberrationEffect, EffectPass, Effect } from 'postprocessing'
import { heroLens } from '../lib/heroLens.config'

export const heroConfig = {
  warpIntensity: 0.4,
  noiseFreq: 1.2,
  damping: heroLens.damping,
  distortionRadius: heroLens.lensRadius,
  chromAberrationPx: {
    desktop: heroLens.rgbOffsetPx,
    mobile: heroLens.rgbOffsetPx * 0.6
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
  uniform vec2 uPointer;
  uniform float uPointerInfluence;
  uniform float uDistortionRadius;
  uniform float uMagnify;
  varying vec2 vUv;
  varying float vLensInfluence;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vec2 screenPos = worldPos.xy;
    
    float distanceFromPointer = length(screenPos - uPointer);
    float normalizedDistance = distanceFromPointer / uDistortionRadius;
    
    float influence = smoothstep(1.0, 0.0, normalizedDistance) * uPointerInfluence;
    influence = influence * influence;
    vLensInfluence = influence;
    
    if (influence > 0.01) {
      vec2 direction = normalize(screenPos - uPointer);
      float magnification = mix(1.0, uMagnify, influence);
      vec2 offset = direction * (magnification - 1.0) * influence * 0.1;
      pos.xy += offset;
    }
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const pixelLensFragmentShader = `
  uniform vec2 uPointer;
  uniform float uLensRadius;
  uniform float uMagnify;
  uniform float uPixelSize;
  uniform float uRgbOffset;
  uniform vec2 uResolution;
  
  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 screenPos = uv;
    vec2 pointerUv = (uPointer + 1.0) * 0.5;
    
    float distanceFromPointer = length(screenPos - pointerUv);
    float normalizedDistance = distanceFromPointer / uLensRadius;
    
    if (normalizedDistance < 1.0) {
      vec2 magnifiedUv = pointerUv + (screenPos - pointerUv) / uMagnify;
      
      vec2 pixelSize = vec2(uPixelSize) / uResolution;
      vec2 pixelatedUv = floor(magnifiedUv / pixelSize) * pixelSize + pixelSize * 0.5;
      
      pixelatedUv = clamp(pixelatedUv, vec2(0.0), vec2(1.0));
      
      float rgbShift = uRgbOffset * 0.002;
      vec2 offsetR = clamp(pixelatedUv + vec2(rgbShift, 0.0), vec2(0.0), vec2(1.0));
      vec2 offsetB = clamp(pixelatedUv - vec2(rgbShift, 0.0), vec2(0.0), vec2(1.0));
      
      float r = texture2D(inputBuffer, offsetR).r;
      float g = texture2D(inputBuffer, pixelatedUv).g;
      float b = texture2D(inputBuffer, offsetB).b;
      
      outputColor = vec4(r, g, b, inputColor.a);
    } else {
      outputColor = inputColor;
    }
  }
`

class PixelLensEffect extends Effect {
  constructor() {
    super('PixelLensEffect', pixelLensFragmentShader)
    
    this.uniforms.set('uPointer', new THREE.Uniform(new THREE.Vector2(0, 0)))
    this.uniforms.set('uLensRadius', new THREE.Uniform(heroLens.lensRadius))
    this.uniforms.set('uMagnify', new THREE.Uniform(heroLens.magnify))
    this.uniforms.set('uPixelSize', new THREE.Uniform(heroLens.pixelSize))
    this.uniforms.set('uRgbOffset', new THREE.Uniform(heroLens.rgbOffsetPx))
    this.uniforms.set('uResolution', new THREE.Uniform(new THREE.Vector2(window.innerWidth, window.innerHeight)))
  }
}



function WebGLTextCanvas({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    composer: EffectComposer | null
    textMesh: THREE.Mesh | null
    pixelLensEffect: PixelLensEffect | null
    animationId: number | null
  }>()
  
  useEffect(() => {
    if (!canvasRef.current) {
      console.log('Canvas ref not available')
      return
    }
    
    console.log('Starting WebGL canvas setup')
    
    try {
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
      
      console.log('Creating text mesh...')
      const textMesh = new Text()
      textMesh.text = text
      textMesh.fontSize = 2.0
      textMesh.color = 0xffffff
      textMesh.anchorX = 'center'
      textMesh.anchorY = 'middle'
      textMesh.maxWidth = 8
      console.log('Text mesh created successfully')
      
      console.log('Syncing text mesh...')
      textMesh.sync(() => {
        console.log('Text mesh sync callback executing - using default material')
        console.log('Text mesh material:', textMesh.material)
        console.log('Text mesh geometry:', textMesh.geometry)
        console.log('Text mesh geometry vertices:', textMesh.geometry?.attributes?.position?.count)
      })
      
      scene.add(textMesh)
      camera.position.z = 10
      console.log('Text mesh added to scene, camera positioned at z=5')
      console.log('Text mesh position:', textMesh.position)
      console.log('Text mesh visible:', textMesh.visible)
      console.log('Scene children count:', scene.children.length)
      
      const composer = new EffectComposer(renderer)
      const renderPass = new RenderPass(scene, camera)
      
      const isMobile = window.innerWidth < 768
      const chromaStrength = isMobile ? heroConfig.chromAberrationPx.mobile : heroConfig.chromAberrationPx.desktop
      
      const pixelLensEffect = new PixelLensEffect()
      const effectPass = new EffectPass(camera, pixelLensEffect)
      
      composer.addPass(renderPass)
      composer.addPass(effectPass)
      
      sceneRef.current = {
        scene,
        camera,
        renderer,
        composer,
        textMesh,
        pixelLensEffect,
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
        
        const { composer: comp, pixelLensEffect } = sceneRef.current
        
        const pointerUniform = pixelLensEffect?.uniforms.get('uPointer')
        if (pointerUniform && pixelLensEffect) {
          const currentPointer = pointerUniform.value
          currentPointer.x = THREE.MathUtils.lerp(currentPointer.x, pointer.x, heroLens.damping)
          currentPointer.y = THREE.MathUtils.lerp(currentPointer.y, pointer.y, heroLens.damping)
        }
        
        if (comp) {
          comp.render()
        } else {
          console.log('No composer available, using direct renderer')
          renderer.render(scene, camera)
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
          sceneRef.current.textMesh?.geometry.dispose()
        }
      }
    } catch (error) {
      console.error('Error in WebGL canvas setup:', error)
    }
  }, [text])
  
  return (
    <div className="relative" style={style}>
      <h1 className={`${className} sr-only`} aria-label={text} style={{ display: 'none' }}>
        {text}
      </h1>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          display: 'block',
          minHeight: '400px'
        }}
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
  
  const shouldUseFallback = false // Temporarily force WebGL rendering
  
  if (!isClient) {
    return (
      <h1 className={className} aria-label={text}>
        {text}
      </h1>
    )
  }
  
  console.log('WebGL component state:', { isClient, shouldUseFallback, supportsWebGL2, prefersReducedMotion })
  console.log('About to render WebGL canvas component')
  
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
          fontSize: style?.fontSize || 'clamp(3rem, 14vw, 20rem)',
          letterSpacing: `${heroLens.letterSpacing}em`,
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
  
  try {
    console.log('Rendering WebGLTextCanvas component')
    return <WebGLTextCanvas text={text} className={className} style={style} />
  } catch (error) {
    console.error('Error rendering WebGL canvas:', error)
    return (
      <h1 className={className} aria-label={text}>
        {text} (WebGL Error)
      </h1>
    )
  }
}
