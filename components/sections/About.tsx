"use client";

import { motion } from "framer-motion";

export function About() {
    const skills = [
        {
            title: "Complex Design Mastery",
            description: "Engineered irrigation systems for Augusta's most prestigious botanical gardens and athletic fields.",
            icon: "🎯"
        },
        {
            title: "Troubleshooting Expert",
            description: "40 years of diagnosing and resolving the most challenging irrigation failures—fast and permanently.",
            icon: "🔧"
        },
        {
            title: "Precision Installation",
            description: "Every system designed with surgical precision. No guesswork, no shortcuts, just flawless execution.",
            icon: "⚡"
        },
        {
            title: "Solo Craftsmanship",
            description: "One expert, complete accountability. No subcontractors, no miscommunication—just results.",
            icon: "🏆"
        },
        {
            title: "Repair Specialist",
            description: "From vintage systems to modern tech—if it's broken, we'll fix it. Guaranteed.",
            icon: "🛠️"
        },
        {
            title: "Fair Pricing Philosophy",
            description: "Premium service without corporate markup. You pay for expertise, not overhead.",
            icon: "💎"
        }
    ];

    return (
        <section id="about" className="relative section-padding overflow-hidden bg-brand-black">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-gold/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-green/5 blur-[120px]" />

            <div className="relative z-10 container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                        About Us
                    </span>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        Why <span className="italic text-brand-gold">Choose Us?</span>
                    </h2>
                    <p className="text-brand-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
                        Four decades of unmatched expertise protecting the greens of Aiken's most prestigious properties.
                        When excellence matters, there's only one choice.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group"
                        >
                            {/* Glassmorphic Card */}
                            <div className="relative h-full backdrop-blur-xl bg-brand-black/40 border border-brand-gold/20 p-8 transition-all duration-300 group-hover:border-brand-gold/60 group-hover:shadow-2xl group-hover:shadow-brand-gold/10">
                                {/* Glass gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-heading font-bold mb-4 text-brand-gold group-hover:text-brand-gold-light transition-colors">
                                        {skill.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-brand-white/70 leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Value Proposition Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative backdrop-blur-2xl bg-gradient-to-r from-brand-green/30 via-brand-black/50 to-brand-maroon/30 border border-brand-gold/30 p-12 md:p-16 text-center overflow-hidden"
                >
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-brand-gold/50" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-brand-gold/50" />

                    <div className="relative">
                        <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                            Fair Pricing. <span className="italic text-brand-gold">Not Corporate Greed.</span>
                        </h3>
                        <p className="text-brand-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                            Big companies charge for layers of management, marketing budgets, and shareholder profits.
                            We charge for <span className="text-brand-gold font-bold">expertise, materials, and honest labor</span>.
                            That's the difference.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest font-bold">
                            <div className="flex items-center gap-2">
                                <span className="text-brand-gold text-2xl">✓</span>
                                <span className="text-brand-white/60">No Hidden Fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-brand-gold text-2xl">✓</span>
                                <span className="text-brand-white/60">Transparent Quotes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-brand-gold text-2xl">✓</span>
                                <span className="text-brand-white/60">Quality Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
