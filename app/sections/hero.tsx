"use client"

import { motion } from 'framer-motion'
import { Major_Mono_Display } from "next/font/google";
import { useInView } from 'react-intersection-observer';

const major_mono_display = Major_Mono_Display({ subsets: ['latin'], weight: ['400'] })

function Hero() {
    const [ref, inView] = useInView();
    const transition = { duration: 0.5 };

    return <div className="h-[90vh] hero-bg-image">
        <div className="h-full w-full bg-gradient-to-b from-transparent to-cinder-950 flex flex-col justify-center items-center">
            <div className="text-white text-center">
                <h1 ref={ref} className={"text-6xl font-bold flex " + major_mono_display.className}><motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={transition}
                >OBSEK{"\u00A0"}</motion.div><motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ ...transition, delay: 0.5 }}
                >Gallery</motion.div></h1>
            </div></div></div>;
}

export default Hero