"use client";

export function Footer() {
    return (
        <footer className="py-20 bg-brand-black border-t border-brand-white/5">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Greater Aiken Irrigation LLC</h3>
                    <p className="text-brand-white/30 text-sm uppercase tracking-widest">© 2026 Professional Irrigation Services</p>
                </div>
                <div className="flex gap-12 text-[10px] uppercase font-bold tracking-widest text-brand-white/40">
                    <a href="#" className="hover:text-brand-white transition-colors">Safety</a>
                    <a href="#" className="hover:text-brand-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-brand-white transition-colors">Privacy</a>
                </div>
            </div>
        </footer>
    );
}
