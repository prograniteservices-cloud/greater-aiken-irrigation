"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Services() {
    const services = [
        {
            title: "Golf Course Maintenance",
            desc: "Full-scale irrigation auditing and specialized head maintenance for elite courses.",
            img: "/assets/golf2.jpg",
        },
        {
            title: "Vibrant Flower Gardens",
            desc: "Drip systems and micro-irrigation tailored to preserve the health of rare botanical collections.",
            img: "/assets/personal3.jpg",
        },
        {
            title: "Residential Estates",
            desc: "High-end residential systems designed for longevity and flawless seasonal performance.",
            img: "/assets/personal1.jpg",
        },
    ];

    return (
        <section id="services" className="section-padding bg-brand-white text-brand-black">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for Excellence.</h2>
                        <p className="text-xl text-black/60 font-medium">
                            We specialize in high-margin, complex irrigation systems that require surgical precision and decades of localized knowledge.
                        </p>
                    </div>
                    <div className="hidden lg:block text-brand-gold font-bold text-8xl opacity-10 font-heading">01</div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {services.map((service, i) => (
                        <motion.div whileHover={{ y: -10 }} key={i} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-black">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-black/50 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
