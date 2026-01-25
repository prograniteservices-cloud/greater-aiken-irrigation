"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/assets/golf1.webp"
                    alt="Cinematic Golf Course Irrigation"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-transparent to-brand-black" />
            </motion.div>

            <div className="relative z-10 container-custom text-center">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                >
                    <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold mb-6 block drop-shadow-md">
                        Aiken's Premier Irrigation Specialist
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 tracking-tight">
                        Precision <br />
                        <span className="italic font-normal text-brand-gold/90">Irrigation.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        40 years of solo expertise protecting the greens of Augusta and botanical gardens across Aiken.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="#quote" className="btn btn-primary min-w-[200px]">
                            Request Estimate
                        </a>
                        <a
                            href="#services"
                            className="text-brand-white/60 hover:text-brand-gold transition-colors font-bold uppercase tracking-widest text-sm border-b border-brand-white/20 pb-1"
                        >
                            Explore Expertise
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] uppercase tracking-[0.5em] text-brand-white/40">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
            </motion.div>
        </section>
    );
}
