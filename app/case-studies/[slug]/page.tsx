import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  
  if (!study) {
    return {
      title: "Case Study Not Found | Greater Aiken Irrigation",
      description: "The requested irrigation case study could not be found."
    };
  }

  return {
    title: `${study.issue} in ${study.neighborhood} | Greater Aiken Irrigation`,
    description: study.description,
    keywords: study.keywords.join(", "),
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const processedContent = await remark().use(html).process(study.content);
  const contentHtml = processedContent.toString();

  // Find related case studies (same location or issue, excluding current)
  const allStudies = getAllCaseStudies();
  const relatedStudies = allStudies
    .filter(s => s.slug !== study.slug && (s.location === study.location || s.issue === study.issue))
    .slice(0, 3);

  return (
    <div className="bg-brand-black text-brand-white min-h-screen font-body">
      <Header />

      <main className="pt-32 pb-24">
        <article className="container-custom max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-brand-white/40">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-brand-gold transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-brand-gold truncate max-w-[200px]">{study.title}</span>
          </nav>

          <header className="mb-16">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold mb-6 block">
              {study.location} • {study.neighborhood}
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-brand-white/60 text-sm font-light">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(study.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="w-1 h-1 bg-brand-gold/40 rounded-full" />
              <span>Surgical Fix: {study.issue}</span>
            </div>
          </header>

          {/* Featured Image Placeholder or Related Visual */}
          <div className="relative aspect-[21/9] w-full bg-brand-green/20 border border-brand-gold/10 mb-16 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-brand-gold/30 font-heading italic text-2xl uppercase tracking-[1em]">Field Report</span>
            </div>
          </div>

          <div 
            className="prose prose-invert prose-brand max-w-none 
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-gold/90
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:italic prose-h2:font-normal
              prose-p:text-lg prose-p:leading-relaxed prose-p:text-brand-white/80 prose-p:mb-8
              prose-strong:text-brand-gold prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-6 prose-li:text-brand-white/70 prose-li:mb-2
              prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {relatedStudies.length > 0 && (
            <div className="mt-16 pt-16 border-t border-brand-gold/10">
              <h3 className="text-2xl font-heading font-bold text-brand-gold mb-8">Related Field Reports</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedStudies.map((related) => (
                  <Link 
                    key={related.slug} 
                    href={`/case-studies/${related.slug}`}
                    className="block p-6 bg-brand-green/10 border border-brand-gold/10 hover:border-brand-gold/40 transition-colors group"
                  >
                    <span className="text-[10px] text-brand-gold/60 uppercase tracking-widest block mb-2">
                      {related.location}
                    </span>
                    <h4 className="font-heading font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <span className="text-xs text-brand-white/40">{related.issue}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <footer className="mt-24 pt-12 border-t border-brand-gold/10">
            <div className="bg-brand-green/10 border border-brand-gold/20 p-12 text-center">
              <h3 className="font-heading text-3xl font-bold mb-6">Need a Surgical Fix for Your Estate?</h3>
              <p className="text-brand-white/70 mb-8 max-w-xl mx-auto font-light leading-relaxed">
                Don't let amateur repairs compromise your landscape. Travis R. Sowell brings 40 years of precision to every zone.
              </p>
              <Link href="/#quote" className="btn btn-primary inline-block min-w-[240px]">
                Request Your Estimate
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}
