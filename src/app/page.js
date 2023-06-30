"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend Web Developer."],
            backSpeed: 80,
            typeSpeed: 80,
            startDelay: 500,
            loop: true,
        });
        console.log(typed);
    });

    return (
        <section className="mx-auto w-full h-screen md:container flex md:justify-between justify-center items-center">
            <div className="items-center md:items-start flex flex-col gap-2 md:gap-3">
                <div className="text-5xl md:text-6xl text-red-400 font-bold">
                    Yudhistia
                </div>
                <div className="text-4xl md:text-5xl text-white font-bold text-center md:text-start">
                    <span ref={el} />
                </div>
            </div>
            <motion.div
                className="avatar hidden md:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Image
                    className="inline-block border border-slate-500 rounded-md cursor-pointer"
                    src="/foto.jpg"
                    width={280}
                    height={280}
                    alt="foto profile"
                />
            </motion.div>
        </section>
    );
}
