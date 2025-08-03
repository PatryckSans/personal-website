import { ReactNode } from 'react'

export interface InteractivePopupProps {
  children: ReactNode
  moveForce?: number
  rotateForce?: number
  width?: number
  height?: number
}