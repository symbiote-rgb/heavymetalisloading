"use client"

import { useState, useEffect, type RefObject } from "react"

interface UseResponsiveImageMapProps {
  containerRef: RefObject<HTMLElement>
  originalWidth: number
}

export function useResponsiveImageMap({ containerRef, originalWidth }: UseResponsiveImageMapProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth
        setScale(containerWidth / originalWidth)
      }
    }

    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [containerRef, originalWidth])

  const getScaledCoords = (coords: string) => {
    return coords
      .split(",")
      .map((coord) => Math.round(Number.parseInt(coord) * scale))
      .join(",")
  }

  return { scale, getScaledCoords }
}
