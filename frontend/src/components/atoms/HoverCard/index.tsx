import React, { useRef, useState, useEffect } from 'react'
import { CardContainer, Card, CardBg, CardInfo } from './HoverCard.styles'

interface HoverCardProps {
  image: string
  title: string
  content: string
  width?: number
  height?: number
}

export const HoverCard: React.FC<HoverCardProps> = ({
  image,
  title,
  content,
  width = 130,
  height = 200,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (cardRef.current) {
      setCardSize({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      })
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left - cardSize.width / 2,
      y: e.clientY - rect.top - cardSize.height / 2,
    })
  }

  const handleMouseLeave = () => {
    setTimeout(() => setMousePos({ x: 0, y: 0 }), 1000)
  }

  const mousePX = mousePos.x / cardSize.width
  const mousePY = mousePos.y / cardSize.height

  const cardTransform = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  }

  const bgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  }

  return (
    <CardContainer
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      width={width}
      height={height}
    >
      <Card style={cardTransform}>
        <CardBg image={image} style={bgTransform} />
        <CardInfo>
          <h1>{title}</h1>
          <p>{content}</p>
        </CardInfo>
      </Card>
    </CardContainer>
  )
}
