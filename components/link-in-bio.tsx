"use client"

import { useRef } from "react"
import Image from "next/image"
import { useResponsiveImageMap } from "@/hooks/use-responsive-image-map"

// Define the clickable areas and their corresponding URLs
const links = [
  {
    name: "stream",
    coords: "100,499,450,569", // x1,y1,x2,y2
    href: "https://open.spotify.com/artist/6dr34VkpdPJY7Do3PYeKoT",
    alt: "Stream Music",
  },
  {
    name: "soundcloud",
    coords: "100,579,450,649",
    href: "https://soundcloud.com/heavymetaldg",
    alt: "SoundCloud",
  },
  {
    name: "social",
    coords: "100,659,450,729",
    href: "https://www.instagram.com/heavymetalisloading/",
    alt: "Social Media",
  },
  {
    name: "contact",
    coords: "100,739,450,809",
    href: "mailto:heavymetalisloading@gmail.com",
    alt: "Contact",
  },
]

export default function LinkInBio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const originalWidth = 600 // Original width of the menu image

  const { scale, getScaledCoords } = useResponsiveImageMap({
    containerRef,
    originalWidth,
  })

  return (
    <div ref={containerRef} className="relative w-full max-w-[600px] mx-auto px-4">
      <div className="relative">
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
            />
          ))}
        </map>
      </div>
    </div>
  )
}
