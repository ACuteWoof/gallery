import Hero from "./sections/hero";
import Gallery from "./sections/gallery"

export default function Home() {
  return (
    <div className="min-h-screen bg-cinder-950">
      <Hero />
      <Gallery />
    </div>
  )
}
