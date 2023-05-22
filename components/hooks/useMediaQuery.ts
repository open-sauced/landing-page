import { useState, useCallback, useEffect } from 'react'

const useMediaQuery = (): boolean => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e: any) => {
    setTargetReached(e.matches)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(`(min-width:840px)`)
      media.addListener(updateTarget)
      setTargetReached(media.matches)
      return () => media.removeListener(updateTarget)
    }
  }, [updateTarget])

  return targetReached
}

export default useMediaQuery
