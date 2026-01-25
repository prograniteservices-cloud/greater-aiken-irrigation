"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Award, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function Contact() {
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

        const { error } = await supabase
            .from("leads")
            .insert([
                {
                    name,
                    email,
                    phone_number: phone,
                    brief_description: `Type: ${project}. Detail: ${detail}`,
                },
            ]);

        if (error) {
            console.error("Error submitting lead:", error);
            // Checklist: Error handling (premium UI instead of alert)
            setFormStatus("idle");
            return;
        }

        setFormStatus("success");
    };

    return (
        <section id="quote" className="section-padding bg-brand-green text-brand-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 opacity-10 select-none">
                <Droplets size={400} />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8">
                            Secure Your <br /> Season.
                        </h2>
                        <div className="space-y-8">
                            <p className="text-xl text-brand-white/70">
                                Direct line to Travis R. Sowell. No middle-men, just 40 years of irrigation mastery at your disposal.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center text-brand-black">
                                    <Award />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl uppercase tracking-tighter italic">4 Decades of Expertise</h4>
                                    <p className="text-sm text-brand-white/40 uppercase tracking-widest">Licensed & Insured Professional</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-white p-10 md:p-16 text-brand-black shadow-2xl">
                        {formStatus === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Lead Received.</h3>
                                <p className="text-black/60">Travis will review your request and contact you shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold tracking-widest text-black/40">Full Name</label>
                                        <input
                                            name="name"
                                            required
                                            type="text"
                                            className="w-full border-b border-black/10 py-3 bg-transparent focus:outline-none focus:border-brand-gold transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold tracking-widest text-black/40">Email Address</label>
                                        <input
                                            name="email"
                                            required
                                            type="email"
                                            className="w-full border-b border-black/10 py-3 bg-transparent focus:outline-none focus:border-brand-gold transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold tracking-widest text-black/40">Phone Number</label>
                                        <input
                                            name="phone"
                                            required
                                            type="tel"
                                            className="w-full border-b border-black/10 py-3 bg-transparent focus:outline-none focus:border-brand-gold transition-colors"
                                            placeholder="(912) 266-9697"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold tracking-widest text-black/40">Property Type</label>
                                        <select
                                            name="project"
                                            className="w-full border-b border-black/10 py-3 bg-transparent focus:outline-none focus:border-brand-gold transition-colors"
                                        >
                                            <option>Elite Golf Course</option>
                                            <option>Botanical Garden</option>
                                            <option>Residential Estate</option>
                                            <option>Commercial Property</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-black/40">Requirement Detail</label>
                                    <textarea
                                        name="detail"
                                        rows={4}
                                        className="w-full border-b border-black/10 py-3 bg-transparent focus:outline-none focus:border-brand-gold transition-colors resize-none"
                                        placeholder="Describe your project..."
                                    ></textarea>
                                </div>
                                <button
                                    disabled={formStatus === "sending"}
                                    className="w-full bg-brand-black text-white py-6 font-bold uppercase tracking-widest hover:bg-brand-gold transition-all flex items-center justify-center gap-3"
                                >
                                    {formStatus === "sending" ? "Processing..." : <>Send Request <Send size={16} /></>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
