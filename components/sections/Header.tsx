"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            style={{ opacity: headerOpacity }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? "py-3" : "py-6"
            }`}
        >
            <div className="container-custom">
                <nav className="relative backdrop-blur-xl bg-brand-black/40 border border-brand-gold/20 shadow-2xl">
                    {/* Glassmorphic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-green/10 via-transparent to-brand-gold/10 pointer-events-none" />
                    
                    <div className="relative flex items-center justify-between px-8 py-4">
                        {/* Logo Section */}
                        <motion.a
                            href="#"
                            className="flex items-center gap-4 group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/assets/greataikencard.png"
                                    alt="GAI Logo"
                                    fill
                                    className="object-contain filter brightness-110"
                                />
                            </div>
                            <div className="hidden md:block">
                                <h2 className="text-brand-gold font-heading text-xl font-bold tracking-tight leading-none">
                                    Greater Aiken
                                </h2>
                                <p className="text-brand-white/60 text-xs uppercase tracking-widest font-body">
                                    Irrigation LLC
                                </p>
                            </div>
                        </motion.a>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center gap-12">
                            {[
                                { label: "Services", href: "#services" },
                                { label: "Gallery", href: "#gallery" },
                                { label: "About", href: "#about" },
                                { label: "Quote", href: "#quote" },
                            ].map((link, idx) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    className="text-brand-white/70 hover:text-brand-gold text-sm uppercase tracking-widest font-bold transition-colors relative group"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all duration-300" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <motion.a
                            href="#contact"
                            className="hidden md:block btn btn-secondary text-xs px-6 py-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.a>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden text-brand-gold">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}
