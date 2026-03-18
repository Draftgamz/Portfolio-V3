import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Gamepad2, Globe, Verified, Sparkles, Zap, Trophy, Users, Mail, ArrowUpRight, ArrowRight, Heart, Star, Layers, Cpu, Palette, Terminal, Award, Target, Clock, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import portrait from "@/assets/portrait.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { clipIn, fadeUp, stagger, scaleIn, slideInLeft, slideInRight } from "@/lib/animations";

const stats = [
  { value: "2+", label: "Years Experience", icon: Clock, gradient: "from-primary to-emerald-600" },
  { value: "30+", label: "Projects Completed", icon: Trophy, gradient: "from-blue-500 to-cyan-500" },
  { value: "∞", label: "Games Played", icon: Gamepad2, gradient: "from-purple-500 to-pink-500" },
  { value: "100%", label: "Client Satisfaction", icon: Heart, gradient: "from-red-500 to-orange-500" },
];

const skills = [
  { name: "UI/UX Design", level: 95, icon: Palette, color: "from-primary to-emerald-600" },
  { name: "React / Next.js", level: 90, icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Gaming UI", level: 92, icon: Gamepad2, color: "from-purple-500 to-pink-500" },
  { name: "TypeScript", level: 88, icon: Terminal, color: "from-amber-500 to-orange-500" },
];

const values = [
  { icon: Target, title: "Precision", desc: "Every pixel serves a purpose. No decoration without function." },
  { icon: Zap, title: "Performance", desc: "Speed is a feature. I optimize for both humans and machines." },
  { icon: Award, title: "Excellence", desc: "Good enough isn't enough. I push boundaries on every project." },
  { icon: Users, title: "Collaboration", desc: "Great work happens together. I communicate clearly and often." },
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div className="relative overflow-x-hidden noise-overlay">
      <GlowBackground />
      <Navbar />

      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <main className="relative max-w-[1200px] mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-20" ref={ref}>
        {/* Hero Banner - Enhanced */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-16 sm:mb-24 border border-border/50 bg-card group"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-600/5 opacity-50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-emerald-600/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-emerald-600/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 py-14 sm:py-20 px-6 sm:px-10 lg:px-14 flex flex-col items-center text-center">
            <motion.div
              variants={clipIn}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-8 sm:mb-10 border border-primary/20 hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(142_70%_45%/0.2)] transition-all duration-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_8px_hsl(142_70%_45%/0.5)]" />
              </span>
              Gamer & Web Designer
            </motion.div>
            <motion.h1 variants={clipIn} className="text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-8 sm:mb-10 max-w-4xl text-foreground">
              Architecting Digital <br />
              <span className="text-primary italic relative inline-block">
                Experiences
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </motion.h1>
            <motion.p variants={clipIn} className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium px-4 mb-10">
              Merging gaming passion with web design precision to build the next generation of digital experiences.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground rounded-full font-black uppercase tracking-widest text-sm hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2 relative overflow-hidden">
                <span className="relative z-10">Let's Talk</span>
                <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link to="/projects" className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm text-foreground rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2 border border-border/50">
                View Work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Bar */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 sm:mb-28"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              custom={i}
              className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-5 blur-[40px] pointer-events-none group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
              <div className="flex flex-col items-center text-center gap-3 sm:gap-4 relative z-10">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-[0_0_15px_hsl(142_70%_45%/0.2)] group-hover:shadow-[0_0_25px_hsl(142_70%_45%/0.3)] transition-all duration-500`}>
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <p className={`text-3xl sm:text-4xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent italic tracking-tighter`}>
                    {stat.value}
                  </p>
                  <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Bio Grid - Enhanced */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 mb-28 sm:mb-40 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div variants={slideInLeft} className="lg:col-span-5">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-emerald-600/10 to-primary/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Image frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-600 rounded-[2rem] blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl">
                  <img
                    alt="Draft — portrait"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    src={portrait}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Overlay badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-background/80 backdrop-blur-md border border-border/50">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_8px_hsl(142_70%_45%/0.5)]" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Available for Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="lg:col-span-7">
            <div className="space-y-8 sm:space-y-10">
              {/* Section header */}
              <div className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                <div className="h-[1px] w-12 bg-gradient-to-r from-primary to-transparent" />
                The Story
              </div>

              {/* Bio text */}
              <div className="space-y-6 sm:space-y-8 text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary/30 pl-6 group hover:border-primary transition-colors duration-300"
                >
                  I'm <span className="text-foreground font-bold">Draft</span>, a 17-year-old who lives at the intersection of{" "}
                  <span className="text-primary font-bold border-b-2 border-primary/30">
                    gaming and web design
                  </span>
                  . What started as modding game UIs turned into a full-blown passion for crafting digital experiences.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  I believe that great design is invisible — it should feel as smooth as 144fps gameplay. No lag, no friction, just pure flow.
                </motion.p>
              </div>

              {/* Core Values */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 gap-4 pt-6 sm:pt-10"
              >
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-5 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center mb-3 shadow-[0_0_15px_hsl(142_70%_45%/0.2)] group-hover:shadow-[0_0_20px_hsl(142_70%_45%/0.3)] transition-all duration-500">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-foreground mb-1">{value.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section - Enhanced */}
        <motion.section
          className="mb-28 sm:mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-gradient-to-r from-primary to-transparent" />
              <h2 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-primary">
                Expertise
              </h2>
              <div className="h-[1px] w-8 bg-gradient-to-l from-primary to-transparent" />
            </div>
            <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-foreground">
              Toolkit & <span className="text-primary italic">Skills</span>
            </h3>
            <div className="h-1.5 w-16 bg-gradient-to-r from-primary to-emerald-600 mx-auto rounded-full shadow-[0_0_10px_hsl(142_70%_45%/0.5)]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skills Progress */}
            <motion.div
              variants={scaleIn}
              className="lg:col-span-2 glass-card rounded-[2rem] p-8 sm:p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 via-emerald-600/5 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-foreground mb-8 relative z-10">
                Technical Proficiency
              </h3>
              
              <div className="space-y-6 relative z-10">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-[0_0_10px_hsl(142_70%_45%/0.2)]`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-black text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-[0_0_10px_hsl(142_70%_45%/0.3)]`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Software */}
            <motion.div
              variants={scaleIn}
              className="glass-card rounded-[2rem] p-8 sm:p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 via-emerald-600/5 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
              
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-8 relative z-10">
                Tools
              </h3>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {["Figma", "React", "TypeScript", "Next.js", "Tailwind", "Framer Motion", "Three.js", "Blender", "After Effects", "VS Code", "Git", "OBS"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline - Enhanced */}
        <motion.section
          className="mb-28 sm:mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-gradient-to-r from-primary to-transparent" />
              <h2 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-primary">
                Timeline
              </h2>
              <div className="h-[1px] w-8 bg-gradient-to-l from-primary to-transparent" />
            </div>
            <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-foreground">
              The <span className="text-primary italic">Journey</span>
            </h3>
            <div className="h-1.5 w-16 bg-gradient-to-r from-primary to-emerald-600 mx-auto rounded-full shadow-[0_0_10px_hsl(142_70%_45%/0.5)]" />
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-border to-primary/50 sm:-translate-x-1/2" />

            {[
              {
                year: "2025",
                title: "Freelance Designer & Developer",
                desc: "Working with global clients to build high-performance web applications and gaming interfaces.",
                icon: Globe,
                gradient: "from-primary to-emerald-600",
              },
              {
                year: "2024",
                title: "Mastering the Stack",
                desc: "Deep dive into React, Next.js, and Framer Motion. Built 20+ personal projects to refine my skills.",
                icon: Code,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                year: "2023",
                title: "The Beginning",
                desc: "Started learning HTML, CSS, and basic JavaScript. Modded game UIs and discovered a passion for design.",
                icon: Sparkles,
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16 mb-16 last:mb-0 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-[12px] sm:left-1/2 w-[20px] h-[20px] rounded-full bg-gradient-to-br ${item.gradient} sm:-translate-x-1/2 mt-0 sm:mt-0 shadow-[0_0_20px_hsl(142_70%_45%/0.5)] z-10 flex items-center justify-center`}>
                  <div className="w-2.5 h-2.5 rounded-full bg-background" />
                </div>

                <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right sm:ml-auto'}`}>
                  <motion.div
                    className="glass-card p-6 sm:p-8 rounded-[2rem] group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.15)] cursor-pointer relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Card glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 blur-[40px] pointer-events-none group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
                    
                    <div className={`flex items-center gap-4 mb-4 relative z-10 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-[0_0_15px_hsl(142_70%_45%/0.3)]`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-2xl font-black bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>{item.year}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black mb-3 text-foreground relative z-10">{item.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed relative z-10">{item.desc}</p>
                  </motion.div>
                </div>
                <div className="hidden sm:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={fadeUp}
          className="relative"
        >
          <div className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-primary/20 group hover:border-primary/40 transition-all duration-500">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-emerald-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-emerald-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left">
              <div className="flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_hsl(142_70%_45%/0.3)]">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase italic tracking-tighter text-foreground">
                    Ready to Work Together?
                  </h3>
                </div>
                <p className="text-muted-foreground font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  I'm currently accepting new projects. Let's discuss how I can help bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground font-black rounded-full hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] hover:scale-105 transition-all active:scale-[0.98] uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link
                  to="/projects"
                  className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm text-foreground border border-border/50 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.2)] transition-all hover:scale-105 active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <span>View Portfolio</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer
        headline={<>LET'S BUILD <br /><span className="text-primary italic">TOGETHER.</span></>}
        subtext="Currently available for freelance opportunities and creative collaborations."
      />
    </div>
  );
};

export default About;
