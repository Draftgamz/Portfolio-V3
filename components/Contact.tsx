import { ArrowRight, ChevronDown, ArrowUpRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <div className="relative pt-20 pb-20 px-6 lg:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0fb861]/5 text-[#0fb861] text-[10px] font-black uppercase tracking-[0.25em] mb-8 border border-[#0fb861]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fb861] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0fb861]"></span>
              </span>
              Available for projects
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12">
              LET&apos;S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0fb861] to-emerald-400 italic">CONNECT.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 max-w-3xl leading-snug font-medium tracking-tight">
              Have a vision that needs bringing to life? I&apos;m currently accepting new freelance opportunities and creative collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            {/* Contact Form Section */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0fb861]/5 blur-[100px] pointer-events-none"></div>
                
                <form className="space-y-12 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-4">
                      <label className="text-[11px] font-black text-[#0fb861] uppercase tracking-[0.3em] ml-1">Full Name</label>
                      <input 
                        className="w-full px-0 py-4 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/10 rounded-none text-xl text-white placeholder:text-slate-700 focus:outline-none focus:border-[#0fb861] transition-all focus:ring-0" 
                        placeholder="e.g. John Doe" 
                        type="text" 
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label className="text-[11px] font-black text-[#0fb861] uppercase tracking-[0.3em] ml-1">Email Address</label>
                      <input 
                        className="w-full px-0 py-4 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/10 rounded-none text-xl text-white placeholder:text-slate-700 focus:outline-none focus:border-[#0fb861] transition-all focus:ring-0" 
                        placeholder="hello@example.com" 
                        type="email" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <label className="text-[11px] font-black text-[#0fb861] uppercase tracking-[0.3em] ml-1">Interested In</label>
                    <div className="relative">
                      <select className="w-full px-0 py-4 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/10 rounded-none text-xl text-white focus:outline-none focus:border-[#0fb861] transition-all appearance-none cursor-pointer">
                        <option className="bg-[#09090B] text-slate-400">Select an option</option>
                        <option className="bg-[#09090B]">Product Design</option>
                        <option className="bg-[#09090B]">Brand Identity</option>
                        <option className="bg-[#09090B]">Web Development</option>
                        <option className="bg-[#09090B]">Just saying hi!</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <label className="text-[11px] font-black text-[#0fb861] uppercase tracking-[0.3em] ml-1">Your Message</label>
                    <textarea 
                      className="w-full px-0 py-4 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/10 rounded-none text-xl text-white placeholder:text-slate-700 focus:outline-none focus:border-[#0fb861] transition-all resize-none focus:ring-0" 
                      placeholder="Tell me about your project, goals, and timeline..." 
                      rows={4}
                    ></textarea>
                  </div>
                  
                  <button type="button" className="group flex items-center justify-center gap-4 w-full bg-[#0fb861] text-black font-black py-7 px-10 rounded-full hover:shadow-[0_20px_40px_rgba(15,184,97,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                    <span className="tracking-[0.2em] text-sm">INITIALIZE CONTACT</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-20 lg:pl-12">
              {/* Contact Details */}
              <div className="space-y-16">
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0fb861] mb-8 flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-[#0fb861]"></span> REACH OUT
                  </h4>
                  <div className="space-y-4">
                    <a className="block text-4xl md:text-5xl font-black tracking-tighter hover:text-[#0fb861] transition-colors duration-300" href="mailto:hello@studio.design">hello@studio.design</a>
                    <a className="block text-3xl font-bold text-slate-400 hover:text-white transition-colors" href="tel:+15550001234">+1 (555) 000-1234</a>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0fb861] mb-6 flex items-center gap-3">
                      <span className="h-[1px] w-6 bg-[#0fb861]"></span> OFFICE
                    </h4>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">
                      123 Creative Blvd<br />
                      San Francisco, CA<br />
                      94103, USA
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0fb861] mb-6 flex items-center gap-3">
                      <span className="h-[1px] w-6 bg-[#0fb861]"></span> SOCIAL
                    </h4>
                    <div className="flex flex-col gap-3">
                      <a className="text-lg font-bold hover:text-[#0fb861] transition-colors" href="#">Instagram</a>
                      <a className="text-lg font-bold hover:text-[#0fb861] transition-colors" href="#">Dribbble</a>
                      <a className="text-lg font-bold hover:text-[#0fb861] transition-colors" href="#">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map/Location Card */}
              <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 group shadow-2xl">
                <Image 
                  alt="San Francisco Map" 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Z0XWHQQ-5nc5wCZXdWPMgaPWUxz_LXZrbFCkX3RUdSqnNKJ44sRqUJYF4A32ED91tsqLMeJvMwQd_j93_jxjSssOxRAl4BfOHyG7WbSL9D6kZePrbjVna20rhxtuG4W2a32oGrZBY7z18G2qpcFzwdT3auHLE2zAOdvMXKd25M04KEGi6WaX2a6rrpQJwAGCD0M07EqLBA7yzc8YI9rohexD2H1EVUqrtAEG1JekjbXudpFwM4Ny-JPfYIDtgaE5kO1yZGCq8nk"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply transition-opacity group-hover:opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-black/60 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/10 shadow-xl">
                  <span className="size-2.5 bg-[#0fb861] rounded-full animate-pulse shadow-[0_0_10px_#0fb861]"></span>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em]">LIVE IN SAN FRANCISCO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Card Footer */}
      <footer className="px-6 pb-12 lg:px-12 mt-32 max-w-[1400px] mx-auto">
        <div className="mega-card-gradient rounded-[4rem] p-12 lg:p-24 overflow-hidden relative border border-white/5 shadow-[0_-20px_80px_rgba(0,0,0,0.5)]">
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-16">
            <div className="max-w-3xl">
              <h2 className="text-6xl lg:text-[9rem] font-black mb-12 leading-[0.8] tracking-tighter">
                WANT TO SEE <br />
                <span className="text-[#0fb861] italic">MY WORK?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium max-w-xl leading-relaxed">
                Explore my curated selection of high-impact digital experiences and case studies.
              </p>
              <Link href="/projects" className="inline-flex px-14 py-7 bg-white text-black rounded-full font-black text-sm tracking-[0.2em] items-center gap-5 hover:bg-[#0fb861] transition-all duration-300 group hover:scale-[1.05] active:scale-[0.98]">
                VIEW PORTFOLIO
                <ArrowUpRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="text-right flex flex-col items-end w-full lg:w-auto">
              <div className="size-32 bg-[#0fb861]/10 rounded-full flex items-center justify-center mb-12 border border-[#0fb861]/20 shadow-[0_0_40px_rgba(15,184,97,0.1)]">
                <Sparkles className="text-5xl text-[#0fb861] animate-pulse" size={48} />
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">DESIGNED WITH PASSION</p>
                <p className="text-2xl font-black">© {new Date().getFullYear()} PORTFOLIO STUDIO</p>
              </div>
            </div>
          </div>
          {/* Decorative background text */}
          <div className="absolute -bottom-20 -left-10 opacity-[0.03] pointer-events-none select-none">
            <span className="text-[250px] lg:text-[350px] font-black leading-none tracking-tighter">STUDIO</span>
          </div>
        </div>
      </footer>
    </>
  );
}
