'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SocialRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    window.location.href = 'https://www.instagram.com/heavymetalisloading/'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Instagram...</p>
    </div>
  )
} 