'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

export default function RedirectLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "200% 200%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        {children}
        <div className="mt-4">
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}
