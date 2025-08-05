import { useState, useEffect, useCallback } from 'react'

const DEFAULT_MOBILE_BREAKPOINT = 768
const DEBOUNCE_DELAY = 100

const debounce = (func: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(func, delay)
  }
}

export const useIsMobile = (breakpoint: number = DEFAULT_MOBILE_BREAKPOINT): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= breakpoint)
  }, [breakpoint])

  useEffect(() => {
    checkIsMobile()
    const debouncedCheck = debounce(checkIsMobile, DEBOUNCE_DELAY)
    
    window.addEventListener('resize', debouncedCheck)
    return () => window.removeEventListener('resize', debouncedCheck)
  }, [checkIsMobile])

  return isMobile
}