"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useResponsiveImageMap } from "@/hooks/use-responsive-image-map"

interface Link {
  name: string
  coords: string
  href: string
  alt: string
}

// Define the clickable areas and their corresponding URLs
const links = [
  {
    name: "stream",
    coords: "90,489,460,579", // Added buffer zone
    href: "https://open.spotify.com/artist/6dr34VkpdPJY7Do3PYeKoT",
    alt: "Stream Music",
  },
  {
    name: "soundcloud",
    coords: "90,569,460,659",
    href: "https://soundcloud.com/heavymetaldg",
    alt: "SoundCloud",
  },
  {
    name: "social",
    coords: "90,649,460,739",
    href: "https://www.instagram.com/heavymetalisloading/",
    alt: "Social Media",
  },
  {
    name: "contact",
    coords: "90,729,460,819",
    href: "mailto:heavymetalisloading@gmail.com",
    alt: "Contact",
  },
]

export default function LinkInBio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const originalWidth = 600
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const { scale, getScaledCoords } = useResponsiveImageMap({
    containerRef,
    originalWidth,
  })

  return (
    <div ref={containerRef} className="relative w-full max-w-[600px] mx-auto px-4 h-full flex items-center">
      <div className="relative w-full">
        <Image
          src="/images/menu.png"
          alt="Heavymetal Navigation Menu"
          width={600}
          height={900}
          priority
          className="w-full h-auto"
          useMap="#menu-map"
        />

        <map name="menu-map">
          {links.map((link) => (
            <area
              key={link.name}
              shape="rect"
              coords={scale !== 1 ? getScaledCoords(link.coords) : link.coords}
              href={link.href}
              alt={link.alt}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="transition-opacity duration-200"
              style={{
                cursor: 'pointer',
                opacity: hoveredLink === link.name ? 0.8 : 1
              }}
            />
          ))}
        </map>
      </div>
    </div>
  )
}
