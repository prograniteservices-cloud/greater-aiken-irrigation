"use client";

import { motion } from "framer-motion";
import { Phone, Mail, User, Shield, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="relative section-padding overflow-hidden bg-brand-black">
            {/* Ambient gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-black via-brand-green/5 to-brand-black pointer-events-none" />

            <div className="relative z-10 container-custom">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
                            Direct Access
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
                            The Personal <br />
                            <span className="italic text-brand-gold">Expert Touch.</span>
                        </h2>
                        <p className="text-brand-white/70 text-xl leading-relaxed mb-12 max-w-xl">
                            When you call, you speak directly to the expert with 40 years of precision irrigation experience.
                            No dispatchers, no middlemen—just direct professional consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 glass-card flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-brand-white/40 text-xs uppercase tracking-widest mb-1 font-bold">Call Travis Directly</p>
                                    <a href="tel:912-266-9697" className="text-2xl font-bold text-brand-white hover:text-brand-gold transition-colors">
                                        912.266.9697
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 glass-card flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-brand-white/40 text-xs uppercase tracking-widest mb-1 font-bold">Direct Email</p>
                                    <a href="mailto:GreaterAikenIrrigation@gmail.com" className="text-xl font-bold text-brand-white hover:text-brand-gold transition-colors whitespace-nowrap">
                                        GreaterAikenIrrigation@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative glass-card-hover p-12 md:p-16 overflow-hidden">
                            <div className="glass-overlay" />

                            <div className="relative">
                                <div className="flex flex-col gap-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-brand-gold/20 flex items-center justify-center rounded-sm text-brand-gold">
                                            <User size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-brand-white font-heading text-2xl font-bold">Travis R. Sowell</h4>
                                            <p className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold">Master Irrigation Specialist</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 text-brand-white/70">
                                            <Shield className="text-brand-gold" size={20} />
                                            <span className="text-sm font-bold uppercase tracking-wider">Licensed & Insured Professional</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-brand-white/70">
                                            <MapPin className="text-brand-gold" size={20} />
                                            <span className="text-sm font-bold uppercase tracking-wider">Serving Aiken, SC & Augusta, GA</span>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-brand-gold/20">
                                        <p className="text-brand-white/60 text-sm leading-relaxed mb-8 italic">
                                            "Precision isn't just a goal; it's the standard I've lived by for 40 years. Whether it's a botanical garden or private estate, the soil deserves excellence."
                                        </p>
                                        <motion.a
                                            href="tel:912-266-9697"
                                            className="btn btn-primary w-full"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Get Direct Consultation
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
