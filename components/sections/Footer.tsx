"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="relative py-24 overflow-hidden">
            {/* Glassmorphic background */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-green/10 to-brand-black" />
            <div className="absolute inset-0 backdrop-blur-sm" />

            {/* Top border with glass effect */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

            <div className="relative z-10 container-custom">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-16 h-16">
                                <Image
                                    src="/assets/greataikencard.png"
                                    alt="Greater Aiken Irrigation"
                                    fill
                                    className="object-contain filter brightness-110"
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-3 text-brand-gold">
                            Greater Aiken<br />Irrigation LLC
                        </h3>
                        <p className="text-brand-white/60 text-sm leading-relaxed mb-4">
                            40 years of precision irrigation expertise serving Aiken's most prestigious properties.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <span className="text-brand-gold text-lg">f</span>
                            </motion.a>
                            <motion.a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <span className="text-brand-gold text-lg">in</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-brand-white/40 text-xs uppercase tracking-wider mb-1">
                                    Phone
                                </p>
                                <a
                                    href="tel:912-266-9697"
                                    className="text-brand-white hover:text-brand-gold transition-colors text-lg font-bold"
                                >
                                    912.266.9697
                                </a>
                            </div>
                            <div>
                                <p className="text-brand-white/40 text-xs uppercase tracking-wider mb-1">
                                    Email
                                </p>
                                <a
                                    href="mailto:GreaterAikenIrrigation@gmail.com"
                                    className="text-brand-white hover:text-brand-gold transition-colors break-all"
                                >
                                    GreaterAikenIrrigation@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-brand-white/40 text-xs uppercase tracking-wider mb-1">
                                    Owner
                                </p>
                                <p className="text-brand-white font-heading text-lg">
                                    Travis R. Sowell
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">
                            Quick Links
                        </h4>
                        <nav className="space-y-3">
                            {[
                                { label: "Services", href: "#services" },
                                { label: "Gallery", href: "#gallery" },
                                { label: "About Us", href: "#about" },
                                { label: "Request Quote", href: "#quote" },
                                { label: "Contact", href: "#contact" },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block text-brand-white/60 hover:text-brand-gold hover:translate-x-2 transition-all text-sm"
                                >
                                    → {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">
                            Service Areas
                        </h4>
                        <ul className="space-y-2 text-brand-white/60 text-sm">
                            <li>• Aiken, SC</li>
                            <li>• Augusta, GA</li>
                            <li>• North Augusta, SC</li>
                            <li>• Surrounding Areas</li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-brand-gold/10">
                            <p className="text-brand-white/40 text-xs uppercase tracking-wider mb-2">
                                Specializing In
                            </p>
                            <ul className="space-y-1 text-brand-white/60 text-sm">
                                <li>Golf Courses</li>
                                <li>Botanical Gardens</li>
                                <li>Residential Estates</li>
                                <li>Commercial Properties</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="relative backdrop-blur-xl bg-brand-black/40 border border-brand-gold/20 p-8 mb-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-green/5 pointer-events-none" />
                    <div className="relative flex flex-wrap justify-center items-center gap-8 text-center">
                        <div>
                            <p className="text-3xl font-heading font-bold text-brand-gold mb-1">40+</p>
                            <p className="text-brand-white/60 text-xs uppercase tracking-widest">Years Experience</p>
                        </div>
                        <div className="hidden md:block w-[1px] h-12 bg-brand-gold/20" />
                        <div>
                            <p className="text-3xl font-heading font-bold text-brand-gold mb-1">100%</p>
                            <p className="text-brand-white/60 text-xs uppercase tracking-widest">Licensed & Insured</p>
                        </div>
                        <div className="hidden md:block w-[1px] h-12 bg-brand-gold/20" />
                        <div>
                            <p className="text-3xl font-heading font-bold text-brand-gold mb-1">24/7</p>
                            <p className="text-brand-white/60 text-xs uppercase tracking-widest">Emergency Service</p>
                        </div>
                        <div className="hidden md:block w-[1px] h-12 bg-brand-gold/20" />
                        <div>
                            <p className="text-3xl font-heading font-bold text-brand-gold mb-1">★★★★★</p>
                            <p className="text-brand-white/60 text-xs uppercase tracking-widest">Client Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-brand-white/5">
                    <p className="text-brand-white/30 text-sm">
                        © 2026 Greater Aiken Irrigation LLC. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs uppercase font-bold tracking-widest text-brand-white/40">
                        <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Safety</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
