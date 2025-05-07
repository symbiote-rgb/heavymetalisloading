'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const redirectMap: Record<string, { url: string; label: string }> = {
  spotify: {
    url: 'https://open.spotify.com/artist/6dr34VkpdPJY7Do3PYeKoT',
    label: 'Spotify',
  },
  soundcloud: {
    url: 'https://soundcloud.com/heavymetaldg',
    label: 'SoundCloud',
  },
  social: {
    url: 'https://www.instagram.com/heavymetalisloading/',
    label: 'Instagram',
  },
  contact: {
    url: 'mailto:heavymetalisloading@gmail.com',
    label: 'Email',
  },
}

export default function RedirectPage() {
  const { slug } = useParams<{ slug: string }>()
  const redirect = redirectMap[slug]

  useEffect(() => {
    if (redirect?.url) {
      const timer = setTimeout(() => {
        window.location.href = redirect.url
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [redirect])

  if (!redirect) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-lg">Invalid redirect path.</p>
      </main>
    )
  }

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden scrolling-background"
      style={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "200% 200%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <p className="text-white mb-4">Redirecting to {redirect.label}...</p>
        <a
          href={redirect.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all"
        >
          Open {redirect.label}
        </a>
        <div className="mt-4">
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all"
          >
            Return to Menu
          </Link>
        </div>
      </div>
    </main>
  )
}