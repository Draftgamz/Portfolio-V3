import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Aether Engine",
    category: "Fintech / Web Platform",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzGvqHfu-NaB7tzdOgvwvRx4KUizhlGSDOiRbRsAkvwNvJNnR7UAQuX_EzIMdYuxOxkKvWE4wyUCUSsYAkm8kKBL-xx8eu5JSKJO1BZcQzRPe7KhLuSG-tp8q4-oslipQaX0ZsK0VHLEP_Km3y-VCKmx9wVYabeCokFlMPm-Lv6_dCIEJDJRtfsGwRvsT8iAQpfkM5BmGV-I8dv1gD-H1242OqM7eNroQ38qpl-49BztO-HpVkVrPyFc3-pMiJjhwjLkZ2Vsmd1EU",
    year: "2024",
    color: "from-[#0fb861] to-emerald-900"
  },
  {
    title: "Kinetica",
    category: "Motion Design System",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2aYO0sQjTm2x_GXQdNgblWleEKfdGOYlZjXmKnSvWrfxwUwGCJ3soXYiyfLJEJhw7IaV8_WZc78L2S03EFGvkprVXoHiwdjmxQYrv57s0y4Ov35jrL3UeKd2-E4OJhEyW0qGxOn1JcdB0diSIz-aWbsGJqK2m2u51Hx_xpAQqsMlA0wdfWHIJZVmst4dEPlXuEsZt16QnBV1JwAeew06ns_2tO0hcDMK0p3WGNcvkNrZpNFVovbSjCRjH3wz-yRHGZTRrFeDuw2M",
    year: "2023",
    color: "from-blue-500 to-indigo-900"
  },
  {
    title: "Nexus Hub",
    category: "Gaming Community",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASSo8lnBebo2aLnZUANBACkrreNhno-5H7VW9e8_5Y3iqfVuNmX_eZwRFVZk7YRRYtX03_3oVmquiZCjq75GVnZFry68XgZOrTer7u34QrZKbJIG-hriCanDXpxnlURrVvYxhH0JIhX3OD4uD7m9l9cv66zxo8XU2ixS9DiKx2VsIHCbHP65apv5klG3UdyQDfdnRBKZIkyRGiyIhnze_QwWWkvKsvxvZHph8GkpWPis-2iBZ-2PC7FrBBDtFu2SvnUNYBgjOZ2E4",
    year: "2023",
    color: "from-purple-500 to-fuchsia-900"
  },
  {
    title: "Omni Protocol",
    category: "DeFi Interface",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrDfwtPjjLuMctcHVC422Py8DI7sZcuWkYZrcjXQv4SM9LrVgomW_ZJDgD2XRONDBmeu8WpAUVsLZe6QmYjMewBKpLmoCF8R2F0g9RlyR7Sa3nYGUFNrJMdYtCSXVhXT_IWGGYBZ2KHicvTSWsKNmrrMoEvTxlVgWF07ajEWAop3o0_dcIqbUSjCKJgGQ-8CORz9jmeCR5lmrVlPs_q9sA-k-aPUjifceAhSSA7TjIoEKEPaSiNhdbIFD5NrXi8WDVWbAFEMELapo",
    year: "2022",
    color: "from-orange-500 to-red-900"
  },
  {
    title: "Synthwave",
    category: "Audio Visualizer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByrV5JPCIgVeedowz6eYbTaBqHE77oCQFEIUs8tE0ZSa8l1p7uU3SWropra-0NaA2nUZqqza9XoELSPVAOO-jcSPLj-6qpuH5geMZsPGey6WGkSVBh6uErAPvUc1zR4BkY8HSMTITxwS9Inj1JFzuKTschOc_XR-g6myvtnH4lOPSSMbEYC0amhP-ZeUoaT7SwXZtnoicQQx_tJMJ3dIN1u5hwi0qPRdlBm7sB9TSZB-Q4xuwHZ974uGeNbvf01ZtVf1XOuku1u7M",
    year: "2022",
    color: "from-pink-500 to-rose-900"
  }
];

export default function Projects() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-32">
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-[#0fb861] text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
          <span className="h-2 w-2 rounded-full bg-[#0fb861]"></span>
          Index of Works
        </div>
        <h1 className="text-[clamp(4rem,12vw,12rem)] font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
          The <br /><span className="text-[#0fb861] not-italic">Archive.</span>
        </h1>
        <p className="text-xl md:text-3xl text-slate-400 max-w-3xl font-medium leading-relaxed">
          A curated collection of digital experiences, platforms, and interfaces built with brutal precision.
        </p>
      </div>

      {/* Project List */}
      <div className="border-t border-white/10 flex flex-col">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative border-b border-white/10 py-12 md:py-20 hover:bg-[#0fb861]/[0.02] transition-colors duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8 px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer overflow-hidden">
            
            {/* Hover Image Reveal (Desktop) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-[16/10] rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700 pointer-events-none z-0 hidden lg:block shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10 opacity-60`}></div>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full">
              <span className="text-slate-600 font-mono text-xl md:text-3xl font-light">0{idx + 1}</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter group-hover:text-[#0fb861] group-hover:translate-x-4 transition-all duration-500">
                {project.title}
              </h2>
            </div>
            
            <div className="relative z-10 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 shrink-0">
              <p className="text-slate-400 font-bold text-sm md:text-base uppercase tracking-widest">{project.category}</p>
              <div className="flex items-center gap-6">
                <span className="px-4 py-2 rounded-full border border-white/10 text-white font-mono text-sm">{project.year}</span>
                <div className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0fb861] group-hover:border-[#0fb861] group-hover:text-[#09090B] transition-all duration-500 group-hover:-rotate-45">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mega Card Footer */}
      <footer className="mt-40 mb-12">
        <div className="mega-card-gradient rounded-[3rem] p-12 md:p-24 overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-16">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">
                HAVE A <br />
                <span className="text-[#0fb861] not-italic">PROJECT</span> IN MIND?
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium max-w-xl">Let&apos;s collaborate to build something extraordinary.</p>
              <Link href="/contact" className="inline-flex px-10 py-5 bg-white text-[#09090B] rounded-full font-black text-lg items-center gap-4 hover:bg-[#0fb861] hover:text-white transition-all duration-500 group shadow-2xl uppercase tracking-tight">
                INITIATE CONTACT
                <ArrowUpRight className="text-2xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={24} />
              </Link>
            </div>
            <div className="text-left lg:text-right flex flex-col items-start lg:items-end w-full lg:w-auto">
              <div className="size-32 bg-[#0fb861]/10 rounded-full border border-[#0fb861]/20 flex items-center justify-center mb-12 animate-pulse">
                <Sparkles className="text-5xl text-[#0fb861]" size={48} />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">Available for work</p>
              <a href="mailto:hello@studio.com" className="text-2xl md:text-3xl font-black tracking-tight hover:text-[#0fb861] transition-colors italic">hello@studio.com</a>
            </div>
          </div>
          {/* Decorative background text */}
          <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none select-none">
            <span className="text-[180px] md:text-[250px] lg:text-[300px] font-black leading-none tracking-tighter italic uppercase">WORK</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
