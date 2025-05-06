'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SoundCloudRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    window.location.href = 'https://soundcloud.com/heavymetaldg'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to SoundCloud...</p>
    </div>
  )
} 