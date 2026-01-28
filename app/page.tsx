"use client";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Quote } from "@/components/sections/Quote";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="bg-brand-black text-brand-white scroll-smooth cursor-default">
                <Hero />
                <TrustBar />
                <Services />
                <Gallery />
                <About />
                <Quote />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
