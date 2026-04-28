"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Services", href: "/#services" },
        { label: "Gallery", href: "/#gallery" },
        { label: "About", href: "/#about" },
        { label: "Quote", href: "/#quote" },
    ];

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
                            href="/"
                            className="flex items-center gap-4 group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/assets/logo-gold.png"
                                    alt="GAI Logo"
                                    fill
                                    className="object-contain filter brightness-110"
                                />
                            </div>
                            <div className="hidden md:block">
                                <span className="text-brand-gold font-heading text-xl font-bold tracking-tight leading-none block">
                                    Greater Aiken
                                </span>
                                <p className="text-brand-white/60 text-xs uppercase tracking-widest font-body">
                                    Irrigation LLC
                                </p>
                            </div>
                        </motion.a>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center gap-12">
                            {navLinks.map((link) => (
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
                            href="/#contact"
                            className="hidden md:block btn btn-secondary text-xs px-6 py-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.a>

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden text-brand-gold p-2 transition-colors hover:text-brand-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Overlay */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden border-t border-brand-gold/20 overflow-hidden"
                            >
                                <div className="flex flex-col gap-6 p-8 bg-brand-black/95 relative">
                                    {/* Mobile background accent */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none" />
                                    
                                    {navLinks.map((link) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-brand-white/80 hover:text-brand-gold text-lg uppercase tracking-widest font-bold transition-colors"
                                            whileHover={{ x: 10 }}
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))}
                                    <motion.a
                                        href="/#contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="btn btn-secondary text-center mt-4 py-4"
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Contact Us
                                    </motion.a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </motion.header>
    );
}
