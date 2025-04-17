import LinkInBio from "@/components/link-in-bio"
import CRTOverlay from "@/components/crt-overlay"

export default function Home() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        animation: "diagonalScroll 90s linear infinite",
      }}
    >
      <LinkInBio />
      <CRTOverlay />
    </main>
  )
}
