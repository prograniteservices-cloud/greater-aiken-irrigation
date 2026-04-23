import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { getAllCaseStudies } from "@/lib/case-studies";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Irrigation Case Studies | Expert Sprinkler Repair Aiken SC",
  description: "Browse 50+ localized irrigation case studies across Aiken, North Augusta, and Evans. Real problems, expert surgical solutions.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="bg-brand-black text-brand-white min-h-screen font-body">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mb-16">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold mb-6 block">
              Proven Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              Field Reports & <br />
              <span className="italic font-normal text-brand-gold/90">Surgical Solutions</span>
            </h1>
            <p className="text-xl text-brand-white/70 font-light leading-relaxed">
              Explore our localized case studies showcasing 40 years of irrigation mastery across South Carolina and Georgia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link 
                key={study.slug} 
                href={`/case-studies/${study.slug}`}
                className="group relative bg-brand-green/10 border border-brand-gold/10 p-8 hover:border-brand-gold/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-brand-gold/60 text-[10px] uppercase tracking-widest block mb-4">
                  {study.location} • {study.neighborhood}
                </span>
                
                <h2 className="text-xl font-heading font-bold mb-4 group-hover:text-brand-gold transition-colors">
                  {study.title}
                </h2>
                
                <p className="text-brand-white/60 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {study.description}
                </p>
                
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest">
                  View Case Study
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
