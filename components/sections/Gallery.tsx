"use client";

import Image from "next/image";

export function Gallery() {
    const images = [
        "/assets/personal4.jpg",
        "/assets/personal2.jpg",
    ];

    return (
        <section className="bg-brand-black py-32 overflow-hidden">
            <div className="container-custom mb-16">
                <h2 className="text-brand-white text-4xl md:text-5xl font-bold">The Standard.</h2>
            </div>

            <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-10">
                {images.map((src, i) => (
                    <div key={i} className="relative flex-none w-[300px] md:w-[450px] aspect-video overflow-hidden">
                        <Image
                            src={src}
                            alt={`Work reference ${i}`}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
