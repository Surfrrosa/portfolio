'use client'

import React, { useRef, useEffect } from 'react'
import { useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import * as THREE from 'three'
import { EffectComposer, RenderPass, EffectPass, Effect } from 'postprocessing'
import { heroMotion } from '../lib/heroMotion.config'

const glassLensFragmentShader = `
  uniform vec2 uLensCenter;
  uniform float uLensRadius;
  uniform float uMagnify;
  uniform float uRgbOffset;
  uniform vec2 uResolution;
  
  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 screenPos = uv;
    float distanceFromLens = length(screenPos - uLensCenter);
    float normalizedDistance = distanceFromLens / uLensRadius;
    
    float lensStrength = 1.0 - smoothstep(0.0, 1.0, normalizedDistance);
    
    if (lensStrength > 0.001) {
      vec2 magnifiedUv = mix(screenPos, uLensCenter + (screenPos - uLensCenter) / uMagnify, lensStrength);
      magnifiedUv = clamp(magnifiedUv, vec2(0.0), vec2(1.0));
      
      float rgbShift = uRgbOffset * 0.001 * lensStrength;
      vec2 offsetR = clamp(magnifiedUv + vec2(rgbShift, 0.0), vec2(0.0), vec2(1.0));
      vec2 offsetB = clamp(magnifiedUv - vec2(rgbShift, 0.0), vec2(0.0), vec2(1.0));
      
      float r = texture2D(inputBuffer, offsetR).r;
      float g = texture2D(inputBuffer, magnifiedUv).g;
      float b = texture2D(inputBuffer, offsetB).b;
      
      outputColor = vec4(r, g, b, inputColor.a);
    } else {
      outputColor = inputColor;
    }
  }
`

class GlassLensEffect extends Effect {
  constructor() {
    super('GlassLensEffect', glassLensFragmentShader)
    
    this.uniforms.set('uLensCenter', new THREE.Uniform(new THREE.Vector2(0.5, 0.3)))
    this.uniforms.set('uLensRadius', new THREE.Uniform(heroMotion.lensRadiusVW * 0.01))
    this.uniforms.set('uMagnify', new THREE.Uniform(heroMotion.lensMagnify))
    this.uniforms.set('uRgbOffset', new THREE.Uniform(heroMotion.rgbOffsetPx))
    this.uniforms.set('uResolution', new THREE.Uniform(new THREE.Vector2(window.innerWidth, window.innerHeight)))
  }
}

function GlassLensCanvas({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    composer: EffectComposer | null
    glassLensEffect: GlassLensEffect | null
    animationId: number | null
  }>(null)
  
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const lensY = useTransform(scrollYProgress, [0, 1], [0.2, 0.8])
  const smoothLensX = useSpring(mouseX, { damping: heroMotion.lensDamping * 100 })
  const smoothLensY = useSpring(lensY, { damping: heroMotion.lensDamping * 100 })

  useEffect(() => {
    if (!canvasRef.current) return
    
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
      renderer.setPixelRatio(Math.min(heroMotion.maxDPR, window.devicePixelRatio))
      
      const composer = new EffectComposer(renderer)
      const renderPass = new RenderPass(scene, camera)
      
      const glassLensEffect = new GlassLensEffect()
      const effectPass = new EffectPass(camera, glassLensEffect)
      
      composer.addPass(renderPass)
      composer.addPass(effectPass)
      
      sceneRef.current = {
        scene,
        camera,
        renderer,
        composer,
        glassLensEffect,
        animationId: null
      }
      
      const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width
        const y = (event.clientY - rect.top) / rect.height
        mouseX.set(x)
        mouseY.set(y)
      }
      
      canvas.addEventListener('mousemove', handleMouseMove)
      
      const animate = () => {
        if (!sceneRef.current) return
        
        const { composer: comp, glassLensEffect } = sceneRef.current
        
        const lensCenterUniform = glassLensEffect?.uniforms.get('uLensCenter')
        if (lensCenterUniform && glassLensEffect) {
          const currentMouseX = mouseX.get()
          const currentLensY = smoothLensY.get()
          const influencedX = typeof currentMouseX === 'number' ? currentMouseX : 0.5
          const influencedY = typeof currentLensY === 'number' ? currentLensY + (mouseY.get() as number - 0.5) * 0.12 : 0.5
          lensCenterUniform.value.x = influencedX
          lensCenterUniform.value.y = influencedY
        }
        
        if (comp) {
          comp.render()
        }
        
        sceneRef.current.animationId = requestAnimationFrame(animate)
      }
      
      animate()
      
      const handleResize = () => {
        if (!sceneRef.current) return
        
        const { camera: cam, renderer: rend, composer: comp, glassLensEffect } = sceneRef.current
        cam.aspect = canvas.clientWidth / canvas.clientHeight
        cam.updateProjectionMatrix()
        rend.setSize(canvas.clientWidth, canvas.clientHeight)
        if (comp) {
          comp.setSize(canvas.clientWidth, canvas.clientHeight)
        }
        if (glassLensEffect) {
          const resolutionUniform = glassLensEffect.uniforms.get('uResolution')
          if (resolutionUniform) {
            resolutionUniform.value.set(canvas.clientWidth, canvas.clientHeight)
          }
        }
      }
      
      window.addEventListener('resize', handleResize)
      
      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
        
        if (sceneRef.current?.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId)
        }
        
        if (sceneRef.current) {
          sceneRef.current.composer?.dispose()
          sceneRef.current.renderer.dispose()
        }
      }
    } catch (error) {
      console.error('Error in glass lens canvas setup:', error)
    }
  }, [smoothLensX, smoothLensY, mouseX, mouseY])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ 
        display: 'block',
        background: 'transparent'
      }}
    />
  )
}

export default function GlassLensOverlay({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) {
  const [supportsWebGL2, setSupportsWebGL2] = React.useState(true)
  const [isClient, setIsClient] = React.useState(false)
  
  React.useEffect(() => {
    setIsClient(true)
    
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2')
    setSupportsWebGL2(!!gl)
  }, [])
  
  if (!isClient || !supportsWebGL2) {
    return null
  }
  
  try {
    return <GlassLensCanvas heroRef={heroRef} />
  } catch (error) {
    console.error('Error rendering glass lens overlay:', error)
    return null
  }
}
