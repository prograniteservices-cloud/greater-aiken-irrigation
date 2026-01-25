"use client";

import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="bg-brand-black text-brand-white scroll-smooth cursor-default">
            <Hero />
            <TrustBar />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
        </main>
    );
}
