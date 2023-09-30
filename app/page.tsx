import Hero from "./sections/hero";
import Gallery from "./sections/gallery"
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cinder-950 overflow-x-hidden">
      <Hero />
      <Gallery />
      <footer className='p-4 md:flex md:items-center md:justify-between text-gray-400 md:p-6 text-sm '>
        <span className='sm:text-center'>
          © 2023 ACuteWoof. All Rights Reserved.
        </span>
        <span className="flex gap-6">
          <Link href='https://acutewoof.is-a.dev' className="hover:text-white">
            ACuteWoof
          </Link>
          <Link href='https://instagram.com/obsek.astrophoto' className="hover:text-white">
            Instagram
          </Link>
        </span>
      </footer>
    </div>
  )
}
