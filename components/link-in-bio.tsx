'use client'

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import EmbedModal from "@/components/EmbedModal"

interface LinkItem {
  name: string
  top: number
  height: number
  href: string
  alt: string
  redirectPath: string
  modalType?: 'spotify' | 'soundcloud'
}

const links: LinkItem[] = [
  {
    name: "spotify",
    top: 460,
    height: 60,
    href: "https://open.spotify.com/artist/6dr34VkpdPJY7Do3PYeKoT",
    alt: "Stream on Spotify",
    redirectPath: "/redirect/spotify",
    modalType: "spotify"
  },
  {
    name: "soundcloud",
    top: 540,
    height: 60,
    href: "https://soundcloud.com/heavymetaldg",
    alt: "SoundCloud",
    redirectPath: "/redirect/soundcloud",
    modalType: "soundcloud"
  },
  {
    name: "social",
    top: 600,
    height: 60,
    href: "https://www.instagram.com/heavymetalisloading/",
    alt: "Instagram",
    redirectPath: "/redirect/social"
  },
  {
    name: "contact",
    top: 660,
    height: 60,
    href: "mailto:heavymetalisloading@gmail.com",
    alt: "Contact",
    redirectPath: "/redirect/contact"
  },
]

export default function LinkInBio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [activeModal, setActiveModal] = useState<{ type: 'spotify' | 'soundcloud'; url: string } | null>(null)

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

  const handleClick = (link: LinkItem) => {
    if (link.modalType) {
      setActiveModal({ type: link.modalType, url: link.href })
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-[600px] mx-auto px-4 h-full flex items-center">
      <div className="relative w-full">
        <Image
          src="/images/landingpagemenu1.png"
          alt="Heavymetal Navigation Menu"
          width={3840}
          height={3840}
          priority
          className="w-full h-auto"
        />

        {links.map((link) => (
          link.modalType ? (
            <button
              key={link.name}
              onClick={() => handleClick(link)}
              className="absolute left-[100px] w-[350px] block transition-opacity duration-200 hover:opacity-80"
              style={{
                top: `${link.top * scale}px`,
                height: `${link.height * scale}px`,
              }}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            />
          ) : (
            <a
              key={link.name}
              href={link.redirectPath}
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
          )
        ))}
      </div>

      {activeModal && (
        <EmbedModal
          isOpen={!!activeModal}
          type={activeModal.type}
          url={activeModal.url}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  )
}
