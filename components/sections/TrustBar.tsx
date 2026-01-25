"use client";

import { Award, ShieldCheck, Clock, Droplets } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    { icon: <Award className="text-brand-gold" />, label: "40 Years Experience" },
    { icon: <ShieldCheck className="text-brand-gold" />, label: "Precision Verified" },
    { icon: <Clock className="text-brand-gold" />, label: "Solo-Operated Care" },
    { icon: <Droplets className="text-brand-gold" />, label: "Water Conservation" }
  ];

  return (
    <div className="bg-brand-green/20 border-y border-brand-white/5 py-12">
      <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
        {trustItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3 text-center">
            {item.icon}
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-white/60">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
