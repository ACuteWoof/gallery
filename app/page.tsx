import Hero from "./sections/hero";
import Gallery from "./sections/gallery"
import Link from "next/link";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbD8Jx476YEbceQTUq3CK5-VceaTTnmuw",
  authDomain: "obsek-gallery.firebaseapp.com",
  projectId: "obsek-gallery",
  storageBucket: "obsek-gallery.appspot.com",
  messagingSenderId: "384822949140",
  appId: "1:384822949140:web:ae4c0d1bcf244aa4ccfe01",
  measurementId: "G-B1V8D3CWHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

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
          <Link href='https://acutewoof.is-a.dev' target="_blank" className="hover:text-white">
            ACuteWoof
          </Link>
          <Link href='https://instagram.com/obsek.astrophoto' target="_blank" className="hover:text-white">
            Instagram
          </Link>
        </span>
      </footer>
    </div>
  )
}
