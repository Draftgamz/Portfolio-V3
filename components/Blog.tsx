import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Blog() {
  return (
    <>
      {/* Featured Article */}
      <section className="mb-40">
        <div className="group relative overflow-hidden rounded-[3.5rem] bg-[#0A0A0C] border border-white/5 flex flex-col lg:flex-row items-stretch min-h-[600px] shadow-2xl">
          <div className="w-full lg:w-3/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms] hero-mask opacity-70" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmUdTYmnp8JckZmA0c9XsCy3Fb4flnn4wYU1Y0E7RWeH7RYF-wtY4l20FodgkW9RhKhl1CCGphCwhcu8OwKv1D5fPv44lq_25gjXD--A8y60Q-iTP8WNEEtT5au36qt-_pGGA2knwt9iDy3WkIapeB6gfQPGO7fOSGFEKinNV8B4mllXi4ENRxjQDbSPwi-LA819Lq0uucDbpqnD2BkgIOchwLq3cFM_koJliT8Zj2U2Mdw4P0fKkQjU8tb0TzSfR-gKdntwanfiM')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent hidden lg:block"></div>
          </div>
          <div className="w-full lg:w-2/5 p-12 lg:p-20 flex flex-col justify-center gap-10 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 bg-[#0fb861]/10 text-[#0fb861] text-[11px] font-black uppercase tracking-[0.25em] rounded-full border border-[#0fb861]/20">Featured Insight</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">March 14, 2024</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                The Future of <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0fb861] via-emerald-400 to-[#0fb861]">Minimalist</span> Design
              </h1>
            </div>
            <p className="text-slate-400 text-xl leading-relaxed font-medium max-w-lg">
              Exploring how digital ecosystems are evolving towards hyper-functional simplicity and mindful interaction design in the era of AI.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3 text-slate-500">
                <Clock size={18} />
                <span className="text-xs font-black uppercase tracking-widest">12 min read</span>
              </div>
              <button className="bg-[#0fb861] text-[#09090B] font-black px-10 py-5 rounded-full hover:shadow-[0_0_40px_rgba(15,184,97,0.4)] hover:scale-105 transition-all duration-500 flex items-center gap-3 group">
                Read Story
                <ArrowRight className="text-lg group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial List */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 px-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-[#0fb861] font-black uppercase tracking-[0.3em] text-[11px]">
              <span className="h-px w-12 bg-[#0fb861]"></span>
              Library
            </div>
            <h2 className="text-5xl font-black tracking-tight">LATEST ARTICLES</h2>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest hover:border-[#0fb861]/50 transition-colors">Categories</button>
            <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest hover:border-[#0fb861]/50 transition-colors">Sort by Date</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {/* Article Card 1 */}
          <article className="glass-card article-card group p-10 rounded-[2.5rem] cursor-pointer flex flex-col md:flex-row items-center gap-10 hover:bg-[#0fb861]/[0.03] hover:border-[#0fb861]/20 hover:-translate-y-1 transition-all duration-500">
            <div className="w-full md:w-56 aspect-[4/3] rounded-3xl overflow-hidden shrink-0 border border-white/5 relative">
              <Image 
                alt="Monochrome geometric pattern illustration" 
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrDfwtPjjLuMctcHVC422Py8DI7sZcuWkYZrcjXQv4SM9LrVgomW_ZJDgD2XRONDBmeu8WpAUVsLZe6QmYjMewBKpLmoCF8R2F0g9RlyR7Sa3nYGUFNrJMdYtCSXVhXT_IWGGYBZ2KHicvTSWsKNmrrMoEvTxlVgWF07ajEWAop3o0_dcIqbUSjCKJgGQ-8CORz9jmeCR5lmrVlPs_q9sA-k-aPUjifceAhSSA7TjIoEKEPaSiNhdbIFD5NrXi8WDVWbAFEMELapo"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-[#0fb861]/20 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em]">
                <span className="text-[#0fb861] px-3 py-1 bg-[#0fb861]/10 rounded-full">Typography</span>
                <span className="text-slate-500">January 10, 2024</span>
              </div>
              <h3 className="text-3xl font-black group-hover:text-[#0fb861] transition-colors tracking-tight leading-tight">Mastering Fluid Responsive Typography</h3>
              <p className="text-slate-400 leading-relaxed font-medium line-clamp-2 text-lg">A deep dive into fluid scales, container queries, and the new era of variable web fonts for high-performance applications.</p>
              <div className="flex items-center gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">5 min read</span>
                </div>
              </div>
            </div>
            <div className="size-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0fb861] group-hover:border-[#0fb861] transition-all duration-500 shadow-xl">
              <ArrowRight className="text-slate-400 group-hover:text-[#09090B] group-hover:translate-x-1 transition-all" size={24} />
            </div>
          </article>

          {/* Article Card 2 */}
          <article className="glass-card article-card group p-10 rounded-[2.5rem] cursor-pointer flex flex-col md:flex-row items-center gap-10 hover:bg-[#0fb861]/[0.03] hover:border-[#0fb861]/20 hover:-translate-y-1 transition-all duration-500">
            <div className="w-full md:w-56 aspect-[4/3] rounded-3xl overflow-hidden shrink-0 border border-white/5 relative">
              <Image 
                alt="Blurry gradient of forest green tones" 
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByrV5JPCIgVeedowz6eYbTaBqHE77oCQFEIUs8tE0ZSa8l1p7uU3SWropra-0NaA2nUZqqza9XoELSPVAOO-jcSPLj-6qpuH5geMZsPGey6WGkSVBh6uErAPvUc1zR4BkY8HSMTITxwS9Inj1JFzuKTschOc_XR-g6myvtnH4lOPSSMbEYC0amhP-ZeUoaT7SwXZtnoicQQx_tJMJ3dIN1u5hwi0qPRdlBm7sB9TSZB-Q4xuwHZ974uGeNbvf01ZtVf1XOuku1u7M"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-[#0fb861]/20 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em]">
                <span className="text-[#0fb861] px-3 py-1 bg-[#0fb861]/10 rounded-full">Process</span>
                <span className="text-slate-500">January 05, 2024</span>
              </div>
              <h3 className="text-3xl font-black group-hover:text-[#0fb861] transition-colors tracking-tight leading-tight">The Hybrid Digital Art Workflow</h3>
              <p className="text-slate-400 leading-relaxed font-medium line-clamp-2 text-lg">Blending traditional art techniques with modern generative tools for unique and authentic brand identities.</p>
              <div className="flex items-center gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">12 min read</span>
                </div>
              </div>
            </div>
            <div className="size-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0fb861] group-hover:border-[#0fb861] transition-all duration-500 shadow-xl">
              <ArrowRight className="text-slate-400 group-hover:text-[#09090B] group-hover:translate-x-1 transition-all" size={24} />
            </div>
          </article>

          {/* Article Card 3 */}
          <article className="glass-card article-card group p-10 rounded-[2.5rem] cursor-pointer flex flex-col md:flex-row items-center gap-10 hover:bg-[#0fb861]/[0.03] hover:border-[#0fb861]/20 hover:-translate-y-1 transition-all duration-500">
            <div className="w-full md:w-56 aspect-[4/3] rounded-3xl overflow-hidden shrink-0 border border-white/5 relative">
              <Image 
                alt="Abstract architectural lines in dark green" 
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-UmGIWcFD65UaUOQTGRwO6eaoRJXyqOV3StVB0H3_wtv_kz5KOGAFWJfSuMFOHIDR1zYzs_1_STiuv-5woA6BmGxpZVE-v5icRRS_0fLbypUlzeKozhx6Hlh1UwBLoWBg-A-rgWm3w0cp9Y69W9aGbnb5FnFq2LH3s01s9AgdVEUbaVcfVouvRYbQo3y6RYCBWL9KFF2JC84Vn8kkDwszLw-kHpHx8NDSbImp-nqg9K6Zaojs4DjNdNoFmjDlFgZMR7a00EEllC4"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-[#0fb861]/20 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em]">
                <span className="text-[#0fb861] px-3 py-1 bg-[#0fb861]/10 rounded-full">Engineering</span>
                <span className="text-slate-500">December 22, 2023</span>
              </div>
              <h3 className="text-3xl font-black group-hover:text-[#0fb861] transition-colors tracking-tight leading-tight">Sustainability in UI Engineering</h3>
              <p className="text-slate-400 leading-relaxed font-medium line-clamp-2 text-lg">How code efficiency, asset optimization, and green hosting contribute to a more sustainable web ecosystem.</p>
              <div className="flex items-center gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">8 min read</span>
                </div>
              </div>
            </div>
            <div className="size-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0fb861] group-hover:border-[#0fb861] transition-all duration-500 shadow-xl">
              <ArrowRight className="text-slate-400 group-hover:text-[#09090B] group-hover:translate-x-1 transition-all" size={24} />
            </div>
          </article>
        </div>
        <div className="mt-24 flex justify-center">
          <button className="px-16 py-6 rounded-full border border-white/10 glass-card text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-[#09090B] hover:border-white transition-all duration-500">
            Browse Entire Archive
          </button>
        </div>
      </section>

      {/* Mega Card Footer */}
      <footer className="px-6 pb-12 lg:px-12 mt-32 -mx-6 lg:-mx-12">
        <div className="mega-card-gradient rounded-[3rem] p-16 lg:p-28 overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-16">
            <div className="max-w-3xl">
              <h2 className="text-6xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
                READY FOR THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0fb861] to-emerald-400">NEXT STAGE?</span>
              </h2>
              <p className="text-2xl text-slate-400 mb-12 font-medium max-w-xl">Let&apos;s transform your vision into a high-performance digital reality that captivates and converts.</p>
              <Link href="/projects" className="inline-flex px-12 py-6 bg-white text-[#09090B] rounded-full font-black text-lg items-center gap-4 hover:bg-[#0fb861] hover:text-white transition-all duration-500 group shadow-2xl">
                VIEW PORTFOLIO
                <ArrowUpRight className="text-2xl group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="size-36 bg-[#0fb861]/10 rounded-full border border-[#0fb861]/20 flex items-center justify-center mb-12 animate-pulse">
                <Sparkles className="text-6xl text-[#0fb861]" size={64} />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">Crafted with precision</p>
              <p className="text-2xl font-black tracking-tight">© {new Date().getFullYear()} Portfolio Studio</p>
            </div>
          </div>
          {/* Decorative background text */}
          <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none">
            <span className="text-[250px] lg:text-[350px] font-black leading-none tracking-tighter italic">JOURNAL</span>
          </div>
        </div>
      </footer>
    </>
  );
}
