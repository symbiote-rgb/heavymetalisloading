'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StreamRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    window.location.href = 'https://open.spotify.com/artist/6dr34VkpdPJY7Do3PYeKoT'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Spotify...</p>
    </div>
  )
} 