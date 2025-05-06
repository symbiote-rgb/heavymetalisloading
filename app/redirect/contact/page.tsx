'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    window.location.href = 'mailto:heavymetalisloading@gmail.com'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to email...</p>
    </div>
  )
} 