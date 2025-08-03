import React from 'react'

export interface ApiResponse<T = any> {
  data: T
  message?: string
  status: number
}

export interface BaseComponentProps {
  children?: React.ReactNode
}