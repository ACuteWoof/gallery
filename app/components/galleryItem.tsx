"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function GalleryItem({ thumbnail, raw }: { thumbnail: string; raw?: string }) {

    const [ref, inView] = useInView();

    return (
        <motion.div className="relative w-full"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            ref={ref}
        >
            <Image src={'https://firebasestorage.googleapis.com/v0/b/obsek-gallery.appspot.com/o/' + thumbnail} width={300} height={300} alt={thumbnail} className="object-contain w-full" />
            {raw &&
                <span className="absolute top-0 right-0 flex items-center gap-2">
                    <Link
                        className="text-lg inline-flex items-center leading-sm uppercase px-3 py-1 bg-opacity-50 bg-cinder-950
                        text-white border-cinder-500 
                        "
                        href={'https://firebasestorage.googleapis.com/v0/b/obsek-gallery.appspot.com/o/' + raw}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15 1H9v2h6V1zm4.03 6.39l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0012 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 007.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.32-5H6.35a5.992 5.992 0 003.41 3.56l-.11-.06 2.03-3.5zm5.97-4a6.012 6.012 0 00-3.34-3.54L12.26 11h5.39zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92zM7.55 8.99A5.965 5.965 0 006 13c0 .34.04.67.09 1h4.72L7.55 8.99zm8.79 8.14A5.94 5.94 0 0018 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7z"></path></svg>
                    </Link>
                </span>
            }
        </motion.div>
    );
}