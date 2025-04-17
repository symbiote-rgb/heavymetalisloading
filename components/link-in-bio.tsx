"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface LinkItem {
  name: string
  top: number
  height: number
  href: string
  alt: string
}

const links: LinkItem[] = [
  {
    name: "stream",
    top: 460,
    height: 70,
    href: "https://open.spotify.com/artist/6dr34VkpdPJY7Do3PYeKoT",
    alt: "Stream Music",
  },
  {
    name: "soundcloud",
    top: 540,
    height: 70,
    href: "https://soundcloud.com/heavymetaldg",
    alt: "SoundCloud",
  },
  {
    name: "social",
    top: 620,
    height: 70,
    href: "https://www.instagram.com/heavymetalisloading/",
    alt: "Social Media",
  },
  {
    name: "contact",
    top: 700,
    height: 70,
    href: "mailto:heavymetalisloading@gmail.com",
    alt: "Contact",
  },
]

export default function LinkInBio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [scale, setScale] = useState(1)

  const updateScale = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth
      setScale(containerWidth / 600)
    }
  }

  useEffect(() => {
    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full max-w-[600px] mx-auto px-4 h-full flex items-center">
      <div className="relative w-full">
        <Image
          src="/images/menu.png"
          alt="Heavymetal Navigation Menu"
          width={600}
          height={800}
          priority
          className="w-full h-auto"
        />
        
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[100px] w-[350px] block transition-opacity duration-200 hover:opacity-80"
            style={{
              top: `${link.top * scale}px`,
              height: `${link.height * scale}px`,
            }}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          />
        ))}
      </div>
    </div>
  )
}


