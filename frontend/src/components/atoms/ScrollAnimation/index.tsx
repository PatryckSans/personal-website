import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  threshold?: number
}

export const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  threshold = 0.1 
}: ScrollAnimationProps) => {
  const { ref, isInView } = useScrollAnimation(threshold)

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}