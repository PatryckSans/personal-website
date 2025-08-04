import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { StarFieldContainer, WarpButton } from './StarField.styles'

interface StarFieldProps {
  numStars?: number
  showWarpButton?: boolean
  className?: string
}

interface Star {
  x: number
  y: number
  z: number
  o: string
}

export const StarField = forwardRef<{ triggerWarp: () => void }, StarFieldProps>((
  { numStars = 1900, showWarpButton = true, className },
  ref
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const starsRef = useRef<Star[]>([])
  const [warp, setWarp] = useState(0)

  const initializeStars = (canvas: HTMLCanvasElement) => {
    
    starsRef.current = []
    for (let i = 0; i < numStars; i++) {
      const star: Star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        o: '0.' + Math.floor(Math.random() * 99) + 1
      }
      starsRef.current.push(star)
    }
  }

  const moveStars = (canvas: HTMLCanvasElement) => {
    for (let i = 0; i < numStars; i++) {
      const star = starsRef.current[i]
      star.z -= warp === 1 ? 10 : 1
      
      if (star.z <= 0) {
        star.z = canvas.width
      }
    }
  }

  const drawStars = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const focalLength = canvas.width * 2

    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initializeStars(canvas)
    }

    if (warp === 0) {
      ctx.fillStyle = "rgba(0,10,20,1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    for (let i = 0; i < numStars; i++) {
      const star = starsRef.current[i]
      
      const pixelX = (star.x - centerX) * (focalLength / star.z) + centerX
      const pixelY = (star.y - centerY) * (focalLength / star.z) + centerY
      const pixelRadius = 1 * (focalLength / star.z)
      
      if (warp === 1) {
        ctx.strokeStyle = `rgba(209, 255, 255, ${star.o})`
        ctx.lineWidth = pixelRadius
        ctx.beginPath()
        ctx.moveTo(pixelX, pixelY)
        ctx.lineTo(pixelX + (pixelX - centerX) * 0.1, pixelY + (pixelY - centerY) * 0.1)
        ctx.stroke()
      } else {
        ctx.fillStyle = `rgba(209, 255, 255, ${star.o})`
        ctx.fillRect(pixelX, pixelY, pixelRadius, pixelRadius)
      }
    }
  }

  const executeFrame = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    
    if (!canvas || !ctx) return

    moveStars(canvas)
    drawStars(canvas, ctx)
    animationRef.current = requestAnimationFrame(executeFrame)
  }

  const handleWarp = () => {
    setWarp(1)
  }

  useImperativeHandle(ref, () => ({
    triggerWarp: handleWarp
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    initializeStars(canvas)
    executeFrame()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    executeFrame()
  }, [warp])

  return (
    <StarFieldContainer className={className}>
      <canvas ref={canvasRef} />
      {showWarpButton && (
        <WarpButton onClick={handleWarp}>
          WARP SPEED
        </WarpButton>
      )}
    </StarFieldContainer>
  )
})

StarField.displayName = 'StarField'