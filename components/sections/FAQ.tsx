"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Why does irrigation pressure drop in Aiken/Augusta neighborhoods?",
        answer: "Pressure drops in our region are often caused by significant elevation changes near the Savannah River basin or sandy soil clogs that obstruct sensitive sprinkler heads. We specialize in diagnosing these local hydraulic challenges and restoring optimal flow."
    },
    {
        question: "When is the best time to winterize an irrigation system in SC/GA?",
        answer: "For the Aiken and Augusta area, we recommend winterizing between late October and early November. This proactive window ensures your system is protected before the first deep freeze hits the CSRA."
    },
    {
        question: "Can Greater Aiken Irrigation handle large-scale botanical gardens?",
        answer: "Absolutely. With 40 years of precision experience, we have a deep understanding of the delicate requirements for botanical collections, athletic fields, and large-scale residential estates that demand surgical maintenance."
    }
];

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="section-padding bg-brand-black relative overflow-hidden">
            {/* Schema Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-brand-gold/5 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-green/5 blur-[100px]" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                        Common Questions
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-brand-white">
                        Expert <span className="italic text-brand-gold">Insights.</span>
                    </h2>
                    <p className="text-brand-white/60 text-lg max-w-2xl mx-auto font-light">
                        Direct answers to the most common irrigation challenges in the Aiken and Augusta area.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-brand-gold/20 bg-brand-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-brand-gold/50"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                            >
                                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${activeIndex === index ? "text-brand-gold" : "text-brand-white group-hover:text-brand-gold/80"}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`text-brand-gold transition-transform duration-500 flex-shrink-0 ${
                                        activeIndex === index ? "rotate-180" : ""
                                    }`}
                                    size={24}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-6 pb-8 text-brand-white/70 leading-relaxed border-t border-brand-gold/10 pt-6 font-light text-lg">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
