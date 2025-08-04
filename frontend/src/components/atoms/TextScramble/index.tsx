import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-weight: 100;
  font-size: 28px;
  color: #FAFAFA;
  
  .dud {
    color: #757575;
  }
`;

interface TextScrambleProps {
  phrases: string[]
  delay?: number
  className?: string
  random?: boolean
}

class TextScrambleEffect {
  private el: HTMLElement;
  private chars = '!<>-_\\/[]{}—=+*^?#________'
  private queue: Array<{from: string, to: string, start: number, end: number, char?: string}> = []
  private frame = 0
  private frameRequest?: number
  private resolve?: () => void

  constructor(el: HTMLElement) {
    this.el = el
    this.update = this.update.bind(this)
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => this.resolve = resolve)
    this.queue = []
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    
    if (this.frameRequest) cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  private update() {
    let output = ''
    let complete = 0
    
    for (let i = 0; i < this.queue.length; i++) {
      let { from, to, start, end, char } = this.queue[i]
      
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    
    this.el.innerHTML = output
    
    if (complete === this.queue.length) {
      this.resolve?.()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

export const TextScramble: React.FC<TextScrambleProps> = ({ 
  phrases, 
  delay = 800, 
  className,
  random = false
}) => {
  const textRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<TextScrambleEffect>()
  const counterRef = useRef(0)

  useEffect(() => {
    if (!textRef.current) return

    effectRef.current = new TextScrambleEffect(textRef.current)
    
    const next = () => {
      if (!effectRef.current) return
      
      const currentIndex = random 
        ? Math.floor(Math.random() * phrases.length)
        : counterRef.current
      
      effectRef.current.setText(phrases[currentIndex]).then(() => {
        setTimeout(next, delay)
      })
      
      if (!random) {
        counterRef.current = (counterRef.current + 1) % phrases.length
      }
    }

    next()
  }, [phrases, delay, random])

  return (
    <Container ref={textRef} className={className} />
  )
}