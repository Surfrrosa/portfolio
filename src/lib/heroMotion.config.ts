export const heroMotion = {
  lensRadiusVW: 14,
  lensMagnify: 1.04,
  rgbOffsetPx: 0.6,
  
  tiltXDeg: 2.0,
  tiltYDeg: 3.0,
  
  scaleMid: 1.04,
  scrollDepthVH: 140,
  
  damping: 0.16,
  stiffness: 120,
  lensDamping: 0.14,
  
  maxDPR: 1.5,
  
  respectReducedMotion: true
}

export const isR3FDisabled = process.env.NEXT_PUBLIC_DISABLE_HERO_R3F === 'true'
