"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Send, Quote as QuoteIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function Quote() {
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("sending");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const project = formData.get("project") as string;
        const detail = formData.get("detail") as string;

        const leadData = {
            name,
            email,
            phone_number: phone,
            brief_description: `Type: ${project}. Detail: ${detail}`,
        };

        const { error } = await supabase
            .from("leads")
            .insert([leadData]);

        if (error) {
            console.error("Error submitting lead:", error);
            setFormStatus("idle");
            return;
        }

        try {
            await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-lead-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({ record: leadData })
            });
        } catch (emailError) {
            console.error("Failed to send email notification:", emailError);
        }

        setFormStatus("success");
    };

    return (
        <section id="quote" className="relative section-padding overflow-hidden">
            {/* Background with subtle texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 via-brand-black to-brand-maroon/20" />

            <div className="relative z-10 container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Glassmorphic Card */}
                    <div className="relative backdrop-blur-2xl bg-brand-black/50 border border-brand-gold/30 shadow-2xl overflow-hidden">
                        {/* Glass gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-green/5 pointer-events-none" />

                        <div className="relative p-12 md:p-16">
                            {/* Section Header */}
                            <div className="text-center mb-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="w-16 h-16 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mx-auto mb-6 rounded-sm"
                                >
                                    <QuoteIcon className="text-brand-gold" size={32} />
                                </motion.div>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
                                >
                                    Get Started
                                </motion.span>
                                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                                    Request a <span className="italic text-brand-gold">Free Quote</span>
                                </h2>
                                <p className="text-brand-white/60 text-lg max-w-2xl mx-auto">
                                    Professional irrigation solutions tailored to your property. Fair pricing, expert service.
                                </p>
                            </div>

                            {/* Quote Form */}
                            {formStatus === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-24 h-24 bg-brand-gold/20 border border-brand-gold/40 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold">
                                        <ShieldCheck size={48} />
                                    </div>
                                    <h3 className="text-4xl font-heading font-bold mb-4 text-brand-white">Estimate Requested.</h3>
                                    <p className="text-brand-white/60 text-lg">Travis will review your project details and reach out within 24 hours.</p>
                                    <button
                                        onClick={() => setFormStatus("idle")}
                                        className="mt-8 text-brand-gold uppercase tracking-widest text-sm font-bold border-b border-brand-gold/30 pb-1 hover:border-brand-gold transition-all"
                                    >
                                        Send Another Request
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-brand-white/80 text-sm uppercase tracking-widest font-bold mb-3">
                                                Full Name
                                            </label>
                                            <input
                                                name="name"
                                                required
                                                type="text"
                                                className="w-full bg-brand-black/60 border border-brand-gold/20 px-6 py-4 text-brand-white focus:border-brand-gold focus:outline-none transition-colors backdrop-blur-sm placeholder:text-brand-white/20"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-brand-white/80 text-sm uppercase tracking-widest font-bold mb-3">
                                                Phone Number
                                            </label>
                                            <input
                                                name="phone"
                                                required
                                                type="tel"
                                                className="w-full bg-brand-black/60 border border-brand-gold/20 px-6 py-4 text-brand-white focus:border-brand-gold focus:outline-none transition-colors backdrop-blur-sm placeholder:text-brand-white/20"
                                                placeholder="(912) 266-9697"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-brand-white/80 text-sm uppercase tracking-widest font-bold mb-3">
                                            Email Address
                                        </label>
                                        <input
                                            name="email"
                                            required
                                            type="email"
                                            className="w-full bg-brand-black/60 border border-brand-gold/20 px-6 py-4 text-brand-white focus:border-brand-gold focus:outline-none transition-colors backdrop-blur-sm placeholder:text-brand-white/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-brand-white/80 text-sm uppercase tracking-widest font-bold mb-3">
                                            Property Type
                                        </label>
                                        <select
                                            name="project"
                                            className="w-full bg-brand-black/60 border border-brand-gold/20 px-6 py-4 text-brand-white focus:border-brand-gold focus:outline-none transition-colors backdrop-blur-sm"
                                        >
                                            <option>Botanical Garden</option>
                                            <option>Residential Estate</option>
                                            <option>Commercial Property</option>
                                            <option>Athletic Field</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-brand-white/80 text-sm uppercase tracking-widest font-bold mb-3">
                                            Project Details
                                        </label>
                                        <textarea
                                            name="detail"
                                            required
                                            rows={5}
                                            className="w-full bg-brand-black/60 border border-brand-gold/20 px-6 py-4 text-brand-white focus:border-brand-gold focus:outline-none transition-colors backdrop-blur-sm resize-none placeholder:text-brand-white/20"
                                            placeholder="Tell us about your irrigation needs..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={formStatus === "sending"}
                                        className="w-full btn btn-secondary text-base py-6 flex items-center justify-center gap-3"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {formStatus === "sending" ? "Sending Request..." : <>Submit Quote Request <Send size={20} /></>}
                                    </motion.button>
                                </form>
                            )}

                            {/* Trust Badge */}
                            <div className="mt-8 pt-8 border-t border-brand-gold/10 text-center">
                                <p className="text-brand-white/40 text-sm flex flex-wrap justify-center gap-x-6 gap-y-2">
                                    <span className="flex items-center gap-2"><span className="text-brand-gold">✓</span> 40+ Years of Excellence</span>
                                    <span className="flex items-center gap-2"><span className="text-brand-gold">✓</span> Licensed & Insured</span>
                                    <span className="flex items-center gap-2"><span className="text-brand-gold">✓</span> Aiken & Augusta Area</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
