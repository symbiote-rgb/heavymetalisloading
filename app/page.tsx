import LinkInBio from "@/components/link-in-bio"
import CRTOverlay from "@/components/crt-overlay"

export default function Home() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden scrolling-background"
      style={{
        backgroundImage: "url(/images/0005.png)",
        backgroundSize: "200% 200%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LinkInBio />
      <CRTOverlay />
    </main>
  )
}
