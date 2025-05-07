'use client'

import { useCallback, useState } from 'react'

export function useClipboard() {
  const [copied, setCopied] = useState(false)

  const copy = useCallback((text: string, labelForAnalytics?: string) => {
    const triggerCopied = () => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    const logShare = () => {
      console.log(`[share] copied: ${labelForAnalytics || text}`)
    }

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          logShare()
          triggerCopied()
        })
        .catch((err) => {
          console.error('Clipboard API failed, falling back', err)
          fallbackCopy(text, triggerCopied)
        })
    } else {
      fallbackCopy(text, triggerCopied)
    }
  }, [])

  return { copied, copy }
}

function fallbackCopy(text: string, onSuccess: () => void) {
  try {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    onSuccess()
  } catch (err) {
    console.error('Fallback copy failed', err)
  }
}