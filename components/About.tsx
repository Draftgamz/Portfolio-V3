import { ArrowRight, Code2, Gamepad2, Terminal, Trophy, Sparkles, PenTool, Briefcase, Code, Verified, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative w-full rounded-[3rem] overflow-hidden mb-24 aspect-[16/9] md:aspect-[21/9] border border-white/5 bg-[#08080A] group">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 hero-mask scale-110 group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrH6dfZNdVn2ja1VPmS912spZPzNgYqYX_jGZnuSrgPOCTb8aZ32qnS-5kuPXGEtxNW-eDIWiuvf2Bz3bSh4qUJwszc5y3_-QC2PWmjVsU-7--aWZvoRUzyktNurmB-KQwWLnXEPmevTSLGvzcVbLrAtBgxr1b2dFF73oH7L3MOKwO4mFvdi_LrHQwBYWHIMMTxUSIn_lLdpiuWrt9bh_o4TemvOMVCqDaE_rgxVsrH18d2RS348PWJ4ZilWYuErIU6QoUOG1IgyA')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0fb861]/10 text-[#0fb861] text-[11px] font-black uppercase tracking-[0.25em] mb-10 border border-[#0fb861]/20 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fb861] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0fb861]"></span>
            </span>
            17 yr old Web Dev
          </div>
          <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-10 max-w-4xl">
            Architecting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0fb861] to-emerald-400 italic">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            Merging aesthetic precision with functional excellence to build the next generation of web applications.
          </p>
        </div>
      </section>

      {/* Refined Biography Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-center">
        <div className="lg:col-span-5">
          <div className="relative group">
            <div className="absolute -inset-6 bg-[#0fb861]/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative border border-white/10 shadow-2xl ring-1 ring-white/5">
              <Image 
                alt="Draft Portrait" 
                className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKp2cyqdLW9xHZPGpbfYqj_xvtLiw6jgZ6qu2wQkGvUZVNPUFL2dsW_yb8WrA2GXavAhEs0oBn_K1mqQrrrWjTY6M9gO7DZagA3dscIATekBh8jti7x-txE8pradxaHn479REJaiSQf3ghzBiDe44uM-HfaxZ6wTNtT9q7xJaRgAIveNbYTC4tC1DM-arTmNIFTbk49Y_j7Rw5qOjcu6UNbqOpgMZi53uvT1KTtBmB82s0_RyIlHXyHcnEex6t1N653qCiISd0DQE"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-4 text-[#0fb861] font-black uppercase tracking-[0.3em] text-[11px]">
              <span className="h-[1px] w-12 bg-[#0fb861]"></span>
              The Story
            </div>
            <div className="space-y-8 text-2xl text-slate-300 leading-relaxed font-light">
              <p>
                I&apos;m <span className="text-white font-bold border-b-2 border-[#0fb861]/30">Draft</span>, a 17-year-old self-taught web developer with an obsession for clean code and brutalist design.
              </p>
              <p>
                When I&apos;m not architecting digital experiences or debugging React components, you can find me grinding competitive games. I believe the fast-paced problem solving in gaming directly translates to writing better, more efficient code.
              </p>
            </div>
            <div className="pt-10 flex flex-wrap gap-4 md:gap-6">
              <div className="stat-card flex-1 min-w-[140px] p-8 rounded-3xl hover:border-[#0fb861]/40 transition-all group">
                <p className="text-[#0fb861] font-black text-5xl mb-2 group-hover:scale-110 transition-transform origin-left">3+</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-extrabold">Years Exp.</p>
              </div>
              <div className="stat-card flex-1 min-w-[140px] p-8 rounded-3xl hover:border-[#0fb861]/40 transition-all group">
                <p className="text-[#0fb861] font-black text-5xl mb-2 group-hover:scale-110 transition-transform origin-left">20+</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-extrabold">Projects</p>
              </div>
              <div className="stat-card flex-1 min-w-[140px] p-8 rounded-3xl hover:border-[#0fb861]/40 transition-all group">
                <p className="text-[#0fb861] font-black text-5xl mb-2 group-hover:scale-110 transition-transform origin-left">10K</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-extrabold">Hours Coded</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elite Bento Grid Skills & Experience */}
      <section className="mb-40">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 tracking-tight">Toolkit & Expertise</h2>
          <div className="h-1.5 w-16 bg-[#0fb861] mx-auto rounded-full shadow-[0_0_10px_rgba(15,184,97,0.5)]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Large Skill Card */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 glass-card rounded-[2.5rem] p-12 flex flex-col justify-between group">
            <div>
              <div className="size-16 rounded-2xl bg-[#0fb861]/10 flex items-center justify-center mb-10 border border-[#0fb861]/20 group-hover:bg-[#0fb861] group-hover:text-black transition-all duration-500 shadow-lg">
                <PenTool className="text-4xl" size={32} />
              </div>
              <h3 className="text-3xl font-black mb-5">UI/UX Strategy</h3>
              <p className="text-slate-400 text-lg leading-relaxed">User research, wireframing, and high-fidelity prototyping using Figma and Adobe CC.</p>
            </div>
            <div className="mt-14 flex flex-wrap gap-2">
              <span className="px-5 py-2 bg-white/5 rounded-full text-[11px] font-black uppercase tracking-wider border border-white/10 group-hover:border-[#0fb861]/30 transition-colors">Figma</span>
              <span className="px-5 py-2 bg-white/5 rounded-full text-[11px] font-black uppercase tracking-wider border border-white/10 group-hover:border-[#0fb861]/30 transition-colors">Prototyping</span>
            </div>
          </div>

          {/* Elite Experience Card */}
          <div className="md:col-span-2 lg:col-span-4 glass-card rounded-[2.5rem] p-12 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity duration-1000">
              <Sparkles className="text-9xl" size={120} />
            </div>
            <div className="flex flex-col h-full relative z-10">
              <div className="inline-flex items-center gap-3 mb-8 text-[11px] font-black text-[#0fb861] uppercase tracking-[0.25em]">
                <span className="size-2 bg-[#0fb861] rounded-full animate-pulse"></span>
                Current Status
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                <div>
                  <h3 className="text-4xl font-black mb-2">Freelance Web Developer</h3>
                  <p className="text-xl text-slate-400 font-medium">Self-Employed <span className="mx-3 text-[#0fb861]/40">|</span> 2021 — Present</p>
                </div>
                <div className="size-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Briefcase className="text-[#0fb861]" size={24} />
                </div>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mt-auto">
                Building custom web applications and brutalist portfolios for clients. Balancing high school with shipping production-ready code and climbing the ranks in competitive gaming.
              </p>
            </div>
          </div>

          {/* Small Skill Card */}
          <div className="lg:col-span-1 glass-card rounded-[2rem] p-8 flex flex-col items-center justify-center text-center gap-5 group">
            <div className="size-14 rounded-full bg-[#0fb861]/10 flex items-center justify-center border border-[#0fb861]/20 group-hover:bg-[#0fb861] group-hover:text-black transition-all duration-500">
              <Code className="text-3xl" size={28} />
            </div>
            <p className="font-black text-xs uppercase tracking-widest text-slate-400">Frontend</p>
          </div>

          {/* Large Background Card */}
          <div className="md:col-span-2 lg:col-span-3 relative rounded-[2.5rem] overflow-hidden min-h-[350px] border border-white/5 group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLgborLWDFM1zzg0xFGJAGkA1ncbQMqf6i3-vwMbIYtr1ol61q4NefZBHvrL7R0CXkT5TV_RIjT_ws7wNnISBzv8VYtkbgmUFuckX2FSzuJAF1btfbW-RaKEwqw9AiiyCt2bwiJ5LhZEliWVOPiOAZxdOQ__lHO8MFJ9QwcEG_g2byi0fvKFInFvS2gKNQJyOeWDz5mOG3H37ldyOY3ZgCnsTJyXY9ELodJ0JNZ6XBTIKJz-9YRB7o48jTMtIXmtPO7oZqJRIlWl8')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent group-hover:via-[#050505]/30 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full md:w-5/6">
              <h3 className="text-3xl font-black mb-4">Technological Foundation</h3>
              <p className="text-lg text-slate-200 font-medium leading-relaxed">Fluent in React, Tailwind CSS, and Next.js. I don&apos;t just design experiences; I know how to bring them to life with performance and scalability in mind.</p>
            </div>
          </div>

          {/* Vertical Stats Card */}
          <div className="md:col-span-2 lg:col-span-2 glass-card rounded-[2.5rem] p-12 flex flex-col justify-between group">
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="size-12 rounded-xl bg-[#0fb861]/10 flex items-center justify-center border border-[#0fb861]/20 shadow-sm">
                  <Verified className="text-[#0fb861] text-2xl" size={24} />
                </div>
                <div>
                  <p className="font-black text-lg">Self-Taught</p>
                  <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest">Driven by passion</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="size-12 rounded-xl bg-[#0fb861]/10 flex items-center justify-center border border-[#0fb861]/20 shadow-sm">
                  <Globe className="text-[#0fb861] text-2xl" size={24} />
                </div>
                <div>
                  <p className="font-black text-lg">Remote Expert</p>
                  <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest">Global Reach</p>
                </div>
              </div>
            </div>
            <button className="w-full py-6 bg-[#0fb861] text-black font-black rounded-2xl mt-12 hover:shadow-[0_0_25px_rgba(15,184,97,0.5)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>

      {/* Mega Card Footer */}
      <footer className="mt-40 -mx-6 lg:-mx-24">
        <div className="px-6 pb-12">
          <div className="mega-card-gradient rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border border-white/5 ring-1 ring-white/5">
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-16">
              <div className="max-w-2xl text-left">
                <h2 className="text-6xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
                  LET&apos;S BUILD <br />
                  <span className="text-[#0fb861] italic">TOGETHER.</span>
                </h2>
                <p className="text-2xl text-slate-400 mb-12 font-medium leading-relaxed">Currently available for select freelance opportunities and creative collaborations.</p>
                <div className="flex flex-wrap gap-5">
                  <Link href="/contact" className="px-12 py-6 bg-[#0fb861] text-black rounded-full font-black text-lg flex items-center gap-4 hover:scale-[1.05] transition-all group shadow-[0_0_30px_rgba(15,184,97,0.3)]">
                    GET IN TOUCH
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                  </Link>
                  <Link href="/projects" className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-black text-lg flex items-center gap-4 hover:bg-white/10 transition-all">
                    VIEW WORK
                  </Link>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="size-36 bg-[#0fb861]/10 rounded-full flex items-center justify-center mb-12 border border-[#0fb861]/20 shadow-[0_0_20px_rgba(15,184,97,0.1)]">
                  <Sparkles className="text-6xl text-[#0fb861] animate-pulse" size={64} />
                </div>
                <div className="flex gap-16 mb-12 text-left">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0fb861] mb-6">Connect</p>
                    <ul className="space-y-3 text-base font-bold text-slate-400">
                      <li><a className="hover:text-[#0fb861] transition-colors" href="#">LinkedIn</a></li>
                      <li><a className="hover:text-[#0fb861] transition-colors" href="#">Twitter</a></li>
                      <li><a className="hover:text-[#0fb861] transition-colors" href="#">GitHub</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0fb861] mb-6">Explore</p>
                    <ul className="space-y-3 text-base font-bold text-slate-400">
                      <li><Link className="hover:text-[#0fb861] transition-colors" href="/">Home</Link></li>
                      <li><Link className="hover:text-[#0fb861] transition-colors" href="/projects">Work</Link></li>
                      <li><Link className="hover:text-[#0fb861] transition-colors" href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 mb-3">Designed with passion</p>
                <p className="text-xl font-black tracking-tight">© {new Date().getFullYear()} Portfolio Studio</p>
              </div>
            </div>
            {/* Decorative background text */}
            <div className="absolute -bottom-16 -right-16 opacity-[0.03] pointer-events-none select-none">
              <span className="text-[250px] lg:text-[320px] font-black leading-none">ABOUT</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
