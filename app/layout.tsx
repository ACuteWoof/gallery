import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "Obsek Astrophotography Gallery",
  description: 'Gallery of astrophotography images by two high school dudes messing around with their phone cameras.',
  keywords: ['web developer', 'programmer', 'linux', 'mac os', 'hackintosh', 'woof os', 'woof', 'vithushan', 'sutharsan', 'vithu', 'acutewoof', 'a cute woof', 'obsek', 'astrophotography', 'smartphone', 'phone astrophotography'],
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>{children}</body>
    </html>
  )
}
