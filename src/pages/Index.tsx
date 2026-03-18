import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Layers, Zap, Gamepad2, Code, Hexagon, Triangle, Circle, Square, Command, Cpu, Globe, Sparkles, MoveRight, Star } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import workspace from "@/assets/workspace.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { clipIn, stagger, fadeUp, scaleIn } from "@/lib/animations";

const projects = [
  {
    name: "Aether Engine",
    category: "Gaming / Web Platform",
    year: "2025",
    image: project1,
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-7",
    titleSize: "text-4xl sm:text-5xl",
    mt: "",
  },
  {
    name: "Kinetica",
    category: "Motion Design System",
    year: "2024",
    image: project2,
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-5",
    titleSize: "text-3xl sm:text-4xl",
    mt: "md:mt-32",
  },
];

const Index = () => {
  return (
    <div className="relative overflow-x-hidden noise-overlay">
      <GlowBackground />
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-48">
        {/* Hero */}
        <motion.section
          className="flex flex-col items-center text-center pb-16 sm:pb-40 relative"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            variants={clipIn}
            className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-primary text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-8 sm:mb-12 backdrop-blur-xl relative z-10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary" />
            </span>
            <Sparkles className="w-3 h-3" />
            Available for Projects
            <Sparkles className="w-3 h-3" />
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-huge font-black uppercase italic mb-8 sm:mb-14 text-foreground pb-2 sm:pb-4 relative z-10">
            <span className="inline-block relative">
              Designing{" "}
              <span className="text-primary relative">
                Digital
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full blur-sm" />
              </span>
            </span>
            <br className="hidden sm:block" /> Experiences with
            <br className="hidden sm:block" /> Brutal <span className="not-italic">Precision.</span>
          </motion.h1>

          <motion.p variants={clipIn} className="max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed px-4 mb-10 relative z-10">
            17 years old. Gamer. Web Designer. Specializing in high-contrast interfaces and fluid motion that push boundaries.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto px-4 sm:px-0 relative z-10">
            <Link
              to="/contact"
              className="group px-8 sm:px-10 py-4 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <a
              href="#work"
              className="group px-8 sm:px-10 py-4 bg-secondary/50 backdrop-blur-sm text-foreground border border-border/50 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              View Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.section>

        {/* Trusted By */}
        <motion.section
          className="py-10 sm:py-24 border-t border-border/50 overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-12">
            <h2 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
              Trusted by innovative teams
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-emerald-600 shadow-[0_0_10px_hsl(142_70%_45%/0.5)]" />
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </motion.div>
          <div className="relative flex flex-col gap-4 sm:gap-6 overflow-hidden">
            {/* Row 1 */}
            <div className="flex w-full">
              <motion.div
                className="flex whitespace-nowrap items-center gap-4 sm:gap-8 px-4 sm:px-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-6 sm:gap-10">
                    {[
                      { name: "Nexus Gaming", icon: Hexagon },
                      { name: "Kinetica Studios", icon: Triangle },
                      { name: "Aether Engine", icon: Circle },
                      { name: "NeonDash", icon: Square },
                      { name: "Void Protocol", icon: Command },
                      { name: "Cipher Systems", icon: Cpu },
                    ].map((client) => (
                      <div
                        key={client.name + i}
                        className="flex items-center gap-2.5 sm:gap-4 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-secondary/30 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_25px_hsl(142_70%_45%/0.2)] transition-all duration-300 cursor-pointer group"
                      >
                        <client.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(142_70%_45%/0.5)] transition-all duration-300" />
                        <span className="text-xs sm:text-sm font-black italic uppercase tracking-widest">{client.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 (Reverse) */}
            <div className="flex w-full">
              <motion.div
                className="flex whitespace-nowrap items-center gap-4 sm:gap-8 px-4 sm:px-8"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-6 sm:gap-10">
                    {[
                      { name: "Stark Industries", icon: Layers },
                      { name: "OmniCorp", icon: Globe },
                      { name: "Cyberdyne", icon: Cpu },
                      { name: "Tyrell Corp", icon: Hexagon },
                      { name: "Weyland-Yutani", icon: Triangle },
                      { name: "Massive Dynamic", icon: Circle },
                    ].map((client) => (
                      <div
                        key={client.name + i}
                        className="flex items-center gap-2.5 sm:gap-4 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-secondary/30 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(142_70%_45%/0.15)] transition-all duration-300 cursor-pointer group"
                      >
                        <client.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                        <span className="text-xs sm:text-sm font-black italic uppercase tracking-widest">{client.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Bento Grid */}
        <motion.section
          className="py-10 sm:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {/* Core Expertise */}
            <motion.div variants={fadeUp} className="md:col-span-7 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-emerald-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="glass-card rounded-3xl p-8 sm:p-12 flex flex-col justify-between h-full relative overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(142_70%_45%/0.15)] transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center mb-6 sm:mb-8 border border-primary/30 shadow-[0_0_20px_hsl(142_70%_45%/0.3)] group-hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] group-hover:scale-110 transition-all duration-500">
                    <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter mb-3 sm:mb-4 text-foreground">
                    Core Expertise
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-xl leading-relaxed max-w-md">
                    Crafting seamless user journeys through technical excellence and artistic vision.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-12 relative z-10">
                  {["UI DESIGN", "GAMING", "REACT", "TYPESCRIPT"].map((tag) => (
                    <span key={tag} className="px-4 sm:px-5 py-2 bg-gradient-to-r from-primary/10 to-emerald-600/10 border border-primary/20 text-primary rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase hover:from-primary hover:to-emerald-600 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_hsl(142_70%_45%/0.4)] transition-all duration-300 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Secondary */}
            <div className="md:col-span-5 grid grid-cols-1 gap-4 sm:gap-6">
              {/* Fastest Turnaround */}
              <motion.div variants={scaleIn} className="relative group overflow-hidden rounded-3xl min-h-[140px] sm:min-h-[160px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-600 to-primary animate-gradient" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDQwIDBIMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-50" />
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase leading-[1] tracking-tighter italic text-white drop-shadow-lg">
                    Fastest<br />Turnaround
                  </h3>
                </div>
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
                  <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
              </motion.div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Years XP */}
                <motion.div variants={fadeUp} className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center group hover:border-primary/30 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.15)] transition-all duration-500">
                  <div className="text-4xl sm:text-6xl font-black mb-2 italic tracking-tighter bg-gradient-to-br from-primary to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">2+</div>
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Years Experience</div>
                </motion.div>

                {/* Workspace image */}
                <motion.div variants={fadeUp} className="relative group rounded-3xl overflow-hidden border border-border/50 min-h-[120px] sm:min-h-[140px] hover:border-primary/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img src={workspace} alt="Gaming setup" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-3 left-3 z-20">
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/90 drop-shadow-lg">Workspace</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Philosophy */}
            <motion.div variants={fadeUp} className="md:col-span-12 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-emerald-600/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(142_70%_45%/0.15)] transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-emerald-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 flex-1">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-8 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                    <h3 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-primary">
                      My Philosophy
                    </h3>
                  </div>
                  <p className="text-foreground text-xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-[1.2] font-black italic tracking-tighter">
                    "Design is not just what it looks like and feels like. Design is{" "}
                    <span className="text-primary relative inline-block">
                      how it works
                      <div className="absolute bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-primary to-emerald-600 opacity-30 -skew-x-12 rounded-full" />
                    </span>."
                  </p>
                </div>
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center border border-primary/30 shadow-[0_0_30px_hsl(142_70%_45%/0.3)] group-hover:shadow-[0_0_50px_hsl(142_70%_45%/0.5)] group-hover:scale-110 transition-all duration-500">
                    <Code className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          className="py-10 sm:py-24 border-t border-border/50 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            {/* Large section number */}
            <div className="absolute top-6 sm:top-10 right-0 opacity-[0.02] pointer-events-none select-none">
              <span className="text-[120px] sm:text-[200px] font-black leading-none">01</span>
            </div>
            {/* Accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-emerald-600/5 to-transparent rounded-full blur-3xl" />
          </div>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-20 gap-4 sm:gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-primary to-transparent" />
                <h2 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-primary">
                  Services
                </h2>
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none text-foreground">
                Technical <span className="text-primary relative inline-block">
                  Arsenal
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h3>
            </div>
            <div className="flex flex-col md:items-end gap-3 sm:gap-4">
              <p className="text-muted-foreground font-medium text-sm sm:text-base max-w-sm md:text-right">
                Delivering high-performance solutions tailored for the modern web and gaming industry.
              </p>
              <Link to="/about" className="group flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-primary hover:text-primary/80 transition-colors">
                View Full Stack
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {[
              {
                title: "UI/UX Design",
                desc: "Crafting intuitive, high-contrast interfaces that prioritize user experience and visual impact. Specializing in dark mode and brutalist aesthetics.",
                icon: Layers,
                gradient: "from-emerald-500/20 via-primary/10 to-transparent",
                accent: "from-emerald-500 to-primary",
                features: ["Wireframing", "Prototyping", "Design Systems"],
              },
              {
                title: "Frontend Dev",
                desc: "Building blazing fast, responsive web applications using React, Next.js, and Tailwind CSS. Pixel-perfect implementation with smooth animations.",
                icon: Code,
                gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
                accent: "from-blue-500 to-cyan-500",
                features: ["React / Next.js", "TypeScript", "Tailwind CSS"],
              },
              {
                title: "Gaming UI",
                desc: "Designing immersive HUDs, overlays, and menus for games and streaming platforms. Blending functionality with intense visual flair.",
                icon: Gamepad2,
                gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
                accent: "from-purple-500 to-pink-500",
                features: ["HUD Design", "Stream Overlays", "Motion Graphics"],
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative"
              >
                {/* Outer glow on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.accent} rounded-[26px] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`} />
                
                {/* Main card */}
                <div className="relative h-full">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Glass card */}
                  <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(142_70%_45%/0.15)] transition-all duration-500 h-full">
                    {/* Animated background blob */}
                    <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-primary/10 to-emerald-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-md`} />
                    </div>
                    
                    <div className="relative">
                      {/* Icon container */}
                      <div className="relative inline-block mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_hsl(142_70%_45%/0.3)] group-hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] group-hover:scale-110 transition-all duration-500">
                          <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                        {service.desc}
                      </p>
                      
                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1.5 bg-secondary/30 border border-border/50 rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA with divider */}
                      <div className="relative pt-4 border-t border-border/30 group-hover:border-primary/30 transition-colors duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Learn more
                          </span>
                          <MoveRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects - Enhanced with better hover and layout */}
        <motion.section
          id="work"
          className="py-10 sm:py-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <div className="absolute top-6 sm:top-10 right-0 opacity-[0.02] pointer-events-none select-none">
            <span className="text-[120px] sm:text-[200px] font-black leading-none">02</span>
          </div>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 sm:mb-20 gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[1px] w-8 bg-primary" />
                <h2 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-primary">
                  Portfolio
                </h2>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-foreground flex flex-col">
                <span>Selected</span>
                <span className="text-primary italic relative">
                  Works
                  <motion.div
                    className="absolute -bottom-2 -right-4 w-16 h-[1px] bg-primary/50"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </h2>
            </div>
            <Link className="group flex items-center justify-center sm:justify-start gap-3 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-foreground hover:text-primary transition-colors border border-border px-6 py-3 rounded-full hover:border-primary/50 hover:bg-primary/5 w-full sm:w-auto mt-4 sm:mt-0" to="/projects">
              View Archive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
            {projects.map((project) => (
              <Link
                to={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={project.name}
                className={`${project.colSpan} block group cursor-pointer ${project.mt}`}
              >
                <motion.div variants={scaleIn} className="h-full flex flex-col">
                  <div className={`overflow-hidden rounded-[2rem] sm:rounded-3xl ${project.aspect} bg-card relative border border-border/50 shadow-2xl group-hover:border-primary/50 transition-colors duration-500 group-hover:shadow-[0_20px_60px_-15px_hsl(142_70%_45%/0.3)]`} >
                    <img
                      src={project.image}
                      alt={`${project.name} project`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-end px-1 sm:px-4 mt-1 sm:mt-2">
                    <div className="flex flex-col gap-2">
                      <h3 className={`text-3xl sm:text-5xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors text-foreground leading-none`}>
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-primary font-mono text-[9px] sm:text-[11px] uppercase tracking-widest">
                          {project.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        <span className="text-muted-foreground font-mono text-[9px] sm:text-[11px] uppercase tracking-widest">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_hsl(142_70%_45%/0.4)] transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Third project — full width */}
          <Link to="/projects/neondash" className="block mt-12 sm:mt-24 group cursor-pointer">
            <motion.div variants={scaleIn}>
              <div className="overflow-hidden rounded-[2rem] sm:rounded-3xl aspect-[16/9] sm:aspect-[21/9] bg-card relative border border-border/50 shadow-2xl group-hover:border-primary/50 transition-colors duration-500 group-hover:shadow-[0_20px_60px_-15px_hsl(142_70%_45%/0.3)]">
                <img
                  src={project3}
                  alt="NeonDash project"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-end px-1 sm:px-4 mt-1 sm:mt-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors text-foreground leading-none">
                    NeonDash
                  </h3>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-primary font-mono text-[9px] sm:text-[11px] uppercase tracking-widest">
                      Analytics Dashboard / SaaS
                    </span>
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-muted-foreground font-mono text-[9px] sm:text-[11px] uppercase tracking-widest">
                      2025
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_hsl(142_70%_45%/0.4)] transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.section>

        {/* Testimonials - Enhanced with better cards and visual hierarchy */}
        <motion.section
          className="py-10 sm:py-24 border-t border-border relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <div className="absolute top-6 sm:top-10 right-0 opacity-[0.02] pointer-events-none select-none">
            <span className="text-[120px] sm:text-[200px] font-black leading-none">03</span>
          </div>
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-20 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[1px] w-8 bg-primary" />
                <h2 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-primary">
                  Client Feedback
                </h2>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tighter text-foreground">
                Transmission <br className="hidden sm:block" /> <span className="text-primary relative">
                  Logs.
                  <Star className="absolute -top-6 -right-2 w-6 h-6 text-primary/30 rotate-12" />
                </span>
              </h3>
            </div>
            <p className="text-muted-foreground mt-4 md:mt-0 font-medium text-sm sm:text-base max-w-sm md:text-right">
              Decrypted feedback from recent collaborations and deployments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 relative z-10">
            {[
              {
                quote: "Draft completely transformed our platform's UI. The brutalist aesthetic combined with the smooth animations created an experience our users love. Highly recommended for anyone looking to push boundaries.",
                author: "Sarah Jenkins",
                role: "Product Lead, Nexus Gaming",
                id: "LOG_01A",
                rating: 5,
              },
              {
                quote: "Working with Draft was a breeze. He understood our vision immediately and delivered a website that exceeded our expectations. The attention to detail in the micro-interactions is phenomenal.",
                author: "Marcus Chen",
                role: "Founder, Kinetica Studios",
                id: "LOG_02B",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                variants={fadeUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="glass-card rounded-3xl p-6 sm:p-12 flex flex-col justify-between overflow-hidden relative border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="absolute top-6 sm:top-8 right-6 sm:right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-125 transform">
                    <span className="font-serif text-7xl sm:text-9xl leading-none text-primary">"</span>
                  </div>

                  <div className="relative z-10 mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-4 sm:mb-6 border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Log: {testimonial.id}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-[1.4] text-foreground group-hover:text-primary transition-colors">
                      "{testimonial.quote}"
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 relative z-10 mt-auto pt-6 sm:pt-8 border-t border-border/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_25px_hsl(142_70%_45%/0.3)] transition-all duration-500">
                      <span className="font-black text-lg sm:text-xl text-primary group-hover:text-primary-foreground transition-colors">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-black uppercase italic tracking-tighter text-foreground">
                        {testimonial.author}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Journal - Enhanced with better hover states */}
        <motion.section
          className="py-10 sm:py-24 border-t border-border relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <div className="absolute top-6 sm:top-10 right-0 opacity-[0.02] pointer-events-none select-none">
            <span className="text-[120px] sm:text-[200px] font-black leading-none">04</span>
          </div>
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-center justify-between mb-10 sm:mb-20 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[1px] w-8 bg-primary" />
                <h2 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-primary">
                  Writing & Thinking
                </h2>
              </div>
            </div>
            <p className="text-muted-foreground mt-3 sm:mt-4 md:mt-0 font-medium text-sm sm:text-base">
              Thoughts on design, gaming, and code.
            </p>
          </motion.div>
          <div className="divide-y divide-border border-b border-border">
            {[
              { date: "Mar 25", title: "The Future of Brutalist UI in 2025", category: "Design" },
              { date: "Feb 12", title: "Micro-interactions that matter", category: "Development" },
            ].map((article, i) => (
              <Link to="/blog" key={article.title} className="block">
                <motion.article
                  variants={fadeUp}
                  className="group py-8 sm:py-14 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-secondary/30 px-2 sm:px-8 -mx-2 sm:-mx-8 transition-all duration-500 cursor-pointer rounded-xl"
                >
                  <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20 items-start md:items-center w-full">
                    <div className="flex items-center gap-3 mb-3 md:mb-0">
                      <span className="text-muted-foreground font-mono text-[10px] sm:text-[11px] uppercase tracking-widest min-w-[60px]">
                        {article.date}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black group-hover:text-primary transition-colors italic uppercase tracking-tighter leading-[1.1] sm:leading-none text-foreground">
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read Article
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all mt-0 shrink-0" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
