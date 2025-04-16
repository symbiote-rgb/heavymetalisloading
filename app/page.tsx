import LinkInBio from "@/components/link-in-bio"

export default function Home() {
  return (
    <main
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "200% 200%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        animation: "diagonalScroll 60s linear infinite",
      }}
    >
      <LinkInBio />
    </main>
  )
}
