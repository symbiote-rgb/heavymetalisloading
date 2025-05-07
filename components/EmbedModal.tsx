'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { Copy, X } from 'lucide-react'
import { useClipboard } from '@/hooks/useClipboard'

interface EmbedModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'spotify' | 'soundcloud'
  url: string
}

export default function EmbedModal({ isOpen, onClose, type, url }: EmbedModalProps) {
  const [showEmbed, setShowEmbed] = useState(false)
  const { copied, copy } = useClipboard()

  const appLabel = type.charAt(0).toUpperCase() + type.slice(1)

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin
      const shareUrl = `${origin}/redirect/${type}`
      copy(shareUrl, appLabel)
    }
  }

  const embedUrl =
    type === 'spotify'
      ? url.replace('/artist/', '/embed/artist/')
      : `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&visual=true`

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowEmbed(true), 150)
      return () => clearTimeout(timer)
    } else {
      setShowEmbed(false)
    }
  }, [isOpen])

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" />
        {copied && (
          <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg backdrop-blur-md text-sm shadow-lg animate-fadeIn">
            Link copied to clipboard!
          </div>
        )}
        <Dialog.Content
          className="fixed inset-x-4 bottom-0 z-50 max-w-md mx-auto
                    bg-white/10 backdrop-blur-lg text-white px-6 py-5 pt-4
                    rounded-t-2xl border border-white/10 shadow-2xl
                    animate-slideUp space-y-5 sm:space-y-6"
        >
          <div className="w-10 h-1.5 bg-white/30 rounded-full mx-auto" />

          <Dialog.Title className="text-center text-base sm:text-lg font-semibold tracking-tight">
            Heavymetal. on {appLabel}
          </Dialog.Title>

          <div className="w-full aspect-video overflow-hidden rounded">
            {showEmbed ? (
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full h-full border-none rounded"
              />
            ) : (
              <div className="w-full h-full bg-white/10 rounded animate-pulse" />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`/redirect/${type}`}
              className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 text-white text-center hover:bg-neutral-800 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in {appLabel}
            </a>

            <button
              onClick={handleCopy}
              className="flex-1 px-4 py-3 rounded-xl
                        bg-neutral-900 text-white
                        hover:bg-neutral-800 active:bg-neutral-700
                        flex items-center justify-center gap-2
                        text-sm sm:text-base font-medium
                        transition duration-200"
            >
              <Copy size={16} />
              {copied ? 'Copied!' : 'Share'}
            </button>
          </div>

          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 text-white hover:text-gray-300">
              <X size={18} />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}