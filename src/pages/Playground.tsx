import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Terminal, Activity, Code2, Shield, Beaker, ExternalLink, GitBranch, Database, Fingerprint, Server, CreditCard, Globe, Cpu, Zap, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { clipIn, fadeUp, stagger, scaleIn } from "@/lib/animations";

const experiments = [
  {
    title: "OLED Shader Suite",
    desc: "Optimizing battery life through UI with custom GLSL shaders for deep black pixels.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["GLSL", "WebGL", "Three.js"],
    status: "active",
    stars: "2.4K",
    link: "#",
  },
  {
    title: "Entropy Vis",
    desc: "Data visualization for randomness using cryptographic entropy sources.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["D3.js", "Canvas", "Stats"],
    status: "active",
    stars: "1.8K",
    link: "#",
  },
  {
    title: "Globe Projection",
    desc: "Native-speed WebGL mapping with real-time data overlay capabilities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tags: ["WebGL", "Three.js", "GIS"],
    status: "beta",
    stars: "3.1K",
    link: "#",
  },
  {
    title: "Edge Cache Sim",
    desc: "Visualizing data propagation across distributed edge networks.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    tags: ["Redis", "Edge", "Cache"],
    status: "active",
    stars: "956",
    link: "#",
  },
];

const Playground = () => {
  return (
    <div className="relative overflow-x-hidden noise-overlay">
      <GlowBackground />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-36 sm:pt-40 pb-24 sm:pb-32 relative z-10">
        <motion.section
          className="mb-16 sm:mb-20 relative"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            variants={clipIn}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-6 sm:mb-8 border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <Zap className="w-3 h-3" />
            System Status: Operational
          </motion.div>

          <motion.h1 variants={clipIn} className="text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-6 sm:mb-8 max-w-4xl text-foreground uppercase italic">
            ENGINEERING <br />
            <span className="text-primary relative inline-block">
              PLAYGROUND.
              <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary/30 rounded-full blur-sm" />
            </span>
          </motion.h1>

          <motion.p variants={clipIn} className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
            A laboratory for experimental UI, high-performance npm packages, and technical research into the future of the web.
          </motion.p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[240px] mb-24 sm:mb-32"
        >
          {/* glsl-noise */}
          <motion.div variants={scaleIn} className="md:col-span-2 md:row-span-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_20px_hsl(142_70%_45%/0.3)] transition-all duration-500">
                    <Terminal className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">V2.4.0-STABLE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter mb-2 text-foreground uppercase">@dp/glsl-noise</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 flex-grow font-medium">Advanced procedural noise generation for WebGL and Three.js environments. Zero dependencies.</p>
                <div className="font-mono text-xs sm:text-sm p-4 bg-background/50 border border-border rounded-xl text-primary/80 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                  npm install @dp/glsl-noise
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Web Vitals */}
          <motion.div variants={scaleIn} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Avg Core Web Vital</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-primary italic tracking-tighter group-hover:scale-110 transition-transform origin-left">99</span>
                <span className="text-sm font-bold text-muted-foreground">/100</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-emerald-400 w-[99%] shadow-[0_0_10px_hsl(142_70%_45%/0.5)]" />
              </div>
            </div>
          </motion.div>

          {/* motion-engine */}
          <motion.div variants={scaleIn} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glass-card rounded-3xl p-6 group hover:border-primary/40 transition-all cursor-pointer border border-border/50 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                  <GitBranch className="w-5 h-5 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <h4 className="font-black italic tracking-tight text-lg mb-1 uppercase text-foreground group-hover:text-primary transition-colors">motion-engine</h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium line-clamp-2">60fps orchestration for complex React animations.</p>
              </div>
            </div>
          </motion.div>

          {/* Code Snippet */}
          <motion.div variants={scaleIn} className="md:col-span-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glass-card rounded-3xl p-2 overflow-hidden border border-border/50 h-full">
              <div className="bg-background h-full rounded-[calc(1.5rem-8px)] flex flex-col border border-border/50">
                <div className="px-4 py-3 border-b border-border flex gap-2 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                  <span className="ml-2 text-[10px] font-mono text-muted-foreground">auth.ts</span>
                </div>
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-muted-foreground overflow-hidden flex-grow flex flex-col justify-center">
                  <div className="flex gap-4 mb-2">
                    <span className="text-muted-foreground/50 select-none">01</span>
                    <span>import { '{' } auth, currentUser { '}' } from <span className="text-primary">"@clerk/nextjs"</span>;</span>
                  </div>
                  <div className="flex gap-4 mb-2">
                    <span className="text-muted-foreground/50 select-none">02</span>
                    <span>import { '{' } db { '}' } from <span className="text-primary">"@/lib/db"</span>;</span>
                  </div>
                  <div className="flex gap-4 mb-2">
                    <span className="text-muted-foreground/50 select-none">03</span>
                    <span></span>
                  </div>
                  <div className="flex gap-4 mb-2">
                    <span className="text-muted-foreground/50 select-none">04</span>
                    <span className="text-purple-400">const</span> session = <span className="text-primary/80">await</span> auth();
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted-foreground/50 select-none">05</span>
                    <span><span className="text-purple-400">if</span> (!session) <span className="text-primary/80">throw new</span> <span className="text-primary">UnauthorizedError</span>();</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payments */}
          <motion.div variants={scaleIn} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-border/50 h-full">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                    <CreditCard className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Payment Infrastructure</h4>
                </div>
                <div className="text-3xl sm:text-4xl font-black italic tracking-tighter text-foreground group-hover:text-primary transition-colors">$2.4M+</div>
                <p className="text-[10px] text-primary font-bold tracking-wider mt-1">Processed via Stripe</p>
              </div>
              <div className="flex items-end gap-1.5 h-12 mt-4">
                <div className="flex-1 bg-primary/20 h-1/3 rounded-t-sm" />
                <div className="flex-1 bg-primary/20 h-1/2 rounded-t-sm" />
                <div className="flex-1 bg-primary/20 h-2/3 rounded-t-sm" />
                <div className="flex-1 bg-primary/20 h-3/4 rounded-t-sm" />
                <div className="flex-1 bg-gradient-to-t from-primary to-emerald-400 h-full rounded-t-sm relative shadow-[0_0_10px_hsl(142_70%_45%/0.5)]">
                  <div className="absolute -top-1.5 -right-1 w-2 h-2 rounded-full bg-primary animate-ping" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Architecture */}
          <motion.div variants={scaleIn} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glass-card rounded-3xl p-6 flex items-center justify-center border border-dashed border-primary/30 bg-primary/5 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all h-full">
              <div className="text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-primary/20 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <p className="text-[10px] font-mono text-foreground uppercase tracking-widest font-bold mb-1">Edge Network</p>
                <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Vercel • Cloudflare • Redis</p>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Auth */}
          <motion.div variants={scaleIn} className="md:col-span-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 overflow-hidden relative border border-border/50 h-full">
              <div className="flex-1 z-10">
                <div className="bg-primary/10 w-fit p-2.5 rounded-xl mb-4 border border-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_20px_hsl(142_70%_45%/0.3)] transition-all duration-500">
                  <Fingerprint className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter mb-2 text-foreground uppercase group-hover:text-primary transition-colors">Enterprise Identity</h3>
                <p className="text-sm text-muted-foreground font-medium">Zero-trust architecture utilizing Clerk, OAuth 2.0, and SAML SSO. Complete with biometric WebAuthn and hardware MFA support.</p>
              </div>
              <div className="w-full sm:w-1/3 aspect-video bg-background rounded-xl border border-border flex items-center justify-center relative overflow-hidden z-10 group-hover:border-primary/30 transition-colors">
                <Shield className="w-8 h-8 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Live Experiments - Enhanced */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="relative overflow-hidden pb-16 sm:pb-24"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            {/* Large section number */}
            <div className="absolute top-6 sm:top-10 right-0 opacity-[0.02] pointer-events-none select-none">
              <span className="text-[120px] sm:text-[200px] font-black leading-none">02</span>
            </div>
            {/* Accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-emerald-600/5 to-transparent rounded-full blur-3xl" />
            {/* Floating particles */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full blur-sm animate-pulse" />
            <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-emerald-500/20 rounded-full blur-sm animate-pulse delay-300" />
            <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-primary/30 rounded-full blur-sm animate-pulse delay-500" />
          </div>

          {/* Section Header */}
          <motion.div variants={clipIn} className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-primary to-transparent" />
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-primary">
                    Laboratory
                  </h2>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black flex items-center gap-3 sm:gap-4 uppercase italic tracking-tighter text-foreground">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-600 rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-primary to-emerald-600 p-2.5 sm:p-3 border border-primary/30 shadow-[0_0_20px_hsl(142_70%_45%/0.3)] group-hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] transition-all duration-500">
                    <Beaker className="w-full h-full text-white" />
                  </div>
                </div>
                <span className="relative inline-block">
                  Live Experiments
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-muted-foreground font-medium mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed">
                Unpolished prototypes, visual explorations, and interactive toys. Built to test the limits of the browser and push creative boundaries.
              </p>
            </div>

            {/* Filter Tags */}
            <div className="flex gap-2 flex-wrap">
              {["All", "WebGL", "Shaders", "Physics", "Data Vis"].map((tag, i) => (
                <motion.button
                  key={tag}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2.5 rounded-full border text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    i === 0
                      ? "bg-gradient-to-r from-primary to-emerald-600 text-white border-transparent shadow-[0_0_20px_hsl(142_70%_45%/0.3)]"
                      : "border-border/50 bg-secondary/30 backdrop-blur-sm text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14 relative z-10"
          >
            {[
              { label: "Active Projects", value: "12", icon: Beaker, color: "from-primary to-emerald-600" },
              { label: "GitHub Stars", value: "8.4K", icon: Activity, color: "from-blue-500 to-cyan-500" },
              { label: "NPM Downloads", value: "125K", icon: Code2, color: "from-purple-500 to-pink-500" },
              { label: "Contributors", value: "24", icon: Terminal, color: "from-amber-500 to-orange-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                custom={i + 4}
                className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 blur-[40px] pointer-events-none group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-[0_0_15px_hsl(142_70%_45%/0.2)] group-hover:shadow-[0_0_25px_hsl(142_70%_45%/0.3)] transition-all duration-500`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-foreground italic tracking-tighter">{stat.value}</p>
                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experiments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {experiments.map((exp, i) => (
              <motion.a
                key={exp.title}
                href={exp.link}
                variants={scaleIn}
                custom={i + 8}
                whileHover={{ y: -4 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Outer glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 via-emerald-600/30 to-transparent rounded-[26px] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
                
                <div className="relative h-full flex flex-col">
                  {/* Image container */}
                  <div className="aspect-[4/5] rounded-3xl bg-background border border-border/50 overflow-hidden relative shadow-lg group-hover:border-primary/30 group-hover:shadow-[0_20px_40px_-10px_hsl(142_70%_45%/0.2)] transition-all duration-500">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent z-10" />
                    
                    {/* Image */}
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
                    />

                    {/* Animated corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-600 opacity-30 blur-md" />
                    </div>

                    {/* Top badges */}
                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                      {/* Status badge */}
                      <div className={`px-2.5 py-1 rounded-full backdrop-blur-sm border text-[8px] sm:text-[9px] font-black uppercase tracking-wider ${
                        exp.status === "active"
                          ? "bg-primary/20 border-primary/30 text-primary shadow-[0_0_10px_hsl(142_70%_45%/0.2)]"
                          : "bg-amber-500/20 border-amber-500/30 text-amber-400"
                      }`}>
                        {exp.status === "active" && (
                          <span className="flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                            </span>
                            Active
                          </span>
                        )}
                        {exp.status === "beta" && (
                          <span className="flex items-center gap-1.5">
                            <Zap className="w-2.5 h-2.5" />
                            Beta
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stars badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-[9px] font-bold text-foreground">
                        <svg className="w-3 h-3 text-primary fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {exp.stars}
                      </div>
                    </div>

                    {/* Overlay UI */}
                    <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex justify-end">
                        <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group-hover:rotate-45">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex justify-center mb-4">
                        <span className="bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/30 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:scale-105 border border-primary/30">
                          Launch Lab <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Experiment number badge */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content below image */}
                  <div className="flex flex-col flex-grow mt-4 p-2">
                    <h5 className="font-black text-lg sm:text-xl uppercase italic tracking-tighter text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-1">
                      {exp.title}
                    </h5>
                    <p className="text-sm text-muted-foreground font-medium flex-grow leading-relaxed line-clamp-2">
                      {exp.desc}
                    </p>
                    
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
                      {exp.tags.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-secondary/30 border border-border/50 rounded-md text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-muted-foreground group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={fadeUp}
            className="mt-16 sm:mt-24 relative z-10"
          >
            <div className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-primary/20 group hover:border-primary/40 transition-all duration-500">
              {/* Background decorations */}
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-emerald-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-emerald-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_hsl(142_70%_45%/0.3)]">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase italic tracking-tighter text-foreground">
                      Want to Contribute?
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                    All experiments are open source. Feel free to explore the code, submit PRs, or fork for your own projects.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground font-black rounded-full hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] hover:scale-105 transition-all active:scale-[0.98] uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <span className="relative z-10">View on GitHub</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <a
                    href="/contact"
                    className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm text-foreground border border-border/50 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.2)] transition-all hover:scale-105 active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    <span>Start Collaboration</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <Footer
        headline={<>HAVE A TECHNICAL <br /><span className="text-primary italic">CHALLENGE?</span></>}
        subtext="I help startups build high-performance systems and bespoke interactive experiences."
        ctaLabel="START A PROJECT"
        ctaLink="/contact"
      />
    </div>
  );
};

export default Playground;
