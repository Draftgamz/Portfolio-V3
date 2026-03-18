import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, Share2, Bookmark, Heart, MessageSquare, Calendar, User, Twitter, Linkedin, Facebook, Link2, Check, Quote, TrendingUp, Eye, Zap, BookOpen, ChevronRight, Sparkles, ExternalLink, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import blogFeatured from "@/assets/blog-featured.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { clipIn, fadeUp, stagger, scaleIn } from "@/lib/animations";

const BlogPost = () => {
  const { id } = useParams();
  const title = id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "Blog Post Title";
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const shareMenuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: contentRef });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const tableOfContents = [
    { id: "introduction", title: "Introduction", icon: BookOpen },
    { id: "philosophy", title: "Core Philosophy", icon: Zap },
    { id: "implementation", title: "Implementation", icon: TrendingUp },
    { id: "takeaways", title: "Key Takeaways", icon: Sparkles },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setShowShareMenu(false);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const shareOptions = [
    { name: "Twitter", icon: Twitter, color: "hover:bg-[#1DA1F2] hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, color: "hover:bg-[#0A66C2] hover:text-white" },
    { name: "Facebook", icon: Facebook, color: "hover:bg-[#1877F2] hover:text-white" },
  ];

  const stats = [
    { label: "Views", value: "12.4K", icon: Eye },
    { label: "Likes", value: "847", icon: Heart },
    { label: "Comments", value: "63", icon: MessageSquare },
  ];

  return (
    <div className="relative overflow-x-hidden noise-overlay">
      <GlowBackground />
      <Navbar />

      {/* Reading Progress Bar - Enhanced */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-secondary/30 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-emerald-500 to-primary"
          style={{ scaleX, transformOrigin: "0%" }}
        />
      </div>

      {/* Floating Action Bar - Desktop */}
      <motion.div
        style={{ opacity }}
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
      >
        <div className="glass-card rounded-2xl p-2 border border-border/50 backdrop-blur-xl">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
              isLiked
                ? "bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30"
                : "bg-secondary/50 text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSaved(!isSaved)}
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all mt-2 ${
              isSaved
                ? "bg-gradient-to-br from-primary to-emerald-600 text-white shadow-lg shadow-primary/30"
                : "bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10"
            }`}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
          </motion.button>
          <div className="relative" ref={shareMenuRef}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all mt-2"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
              {showShareMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: 10 }}
                  className="absolute right-full top-0 mr-3 p-2.5 bg-background/95 backdrop-blur-xl rounded-2xl border border-border shadow-2xl z-50 min-w-[200px]"
                >
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground px-3 py-2">
                    Share this article
                  </p>
                  {shareOptions.map((option) => (
                    <button
                      key={option.name}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${option.color} text-muted-foreground`}
                    >
                      <option.icon className="w-4 h-4" />
                      {option.name}
                    </button>
                  ))}
                  <div className="h-px w-full bg-border/50 my-1" />
                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all hover:bg-primary hover:text-primary-foreground text-muted-foreground"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 pt-36 sm:pt-40 pb-24 sm:pb-32 relative z-10">
        <motion.article initial="hidden" animate="visible" variants={stagger}>
          {/* Breadcrumb */}
          <motion.div variants={clipIn} className="mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-8 h-[1px] bg-gradient-to-r from-primary to-transparent group-hover:from-primary group-hover:w-12 transition-all" />
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Library
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div variants={clipIn} className="mb-10 sm:mb-16">
            {/* Tags */}
            <div className="flex items-center gap-3 flex-wrap mb-6">
              <span className="group px-4 py-2 bg-gradient-to-r from-primary/10 to-emerald-600/10 text-primary text-[10px] font-black uppercase tracking-[0.25em] rounded-full border border-primary/20 hover:from-primary hover:to-emerald-600 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_hsl(142_70%_45%/0.4)] transition-all duration-300 cursor-pointer">
                Design
              </span>
              <span className="px-4 py-2 bg-secondary/30 text-muted-foreground text-[10px] font-black uppercase tracking-[0.25em] rounded-full border border-border/50 hover:border-primary/30 hover:text-primary transition-all cursor-pointer">
                UI/UX
              </span>
              <span className="px-4 py-2 bg-secondary/30 text-muted-foreground text-[10px] font-black uppercase tracking-[0.25em] rounded-full border border-border/50 hover:border-primary/30 hover:text-primary transition-all cursor-pointer">
                Gaming
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-foreground uppercase italic mb-8">
              {title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-8 border-b border-border/50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-600 rounded-full blur-md opacity-50" />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-emerald-600 border border-primary/30 flex items-center justify-center shadow-[0_0_20px_hsl(142_70%_45%/0.3)]">
                    <User className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Draft Author</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">@draft_dev</p>
                </div>
              </div>

              <div className="flex items-center gap-6 sm:ml-auto">
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="w-9 h-9 rounded-xl bg-secondary/30 border border-border/50 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Published</p>
                    <p className="text-xs font-bold text-foreground">March 14, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="w-9 h-9 rounded-xl bg-secondary/30 border border-border/50 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Read Time</p>
                    <p className="text-xs font-bold text-foreground">5 min</p>
                  </div>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center gap-2 sm:hidden">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                    isLiked
                      ? "bg-red-500/10 border-red-500/30 text-red-500"
                      : "bg-secondary/50 border-border text-muted-foreground hover:text-red-500"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                    isSaved
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-secondary/50 border-border text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Featured Image - Enhanced */}
          <motion.div variants={fadeUp} className="relative mb-12 sm:mb-20">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-emerald-600/10 to-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
              <img src={blogFeatured} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Image overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-emerald-600 border-2 border-background flex items-center justify-center text-[8px] font-bold text-white">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">+2.4K reading this</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Table of Contents - Sidebar */}
            <motion.aside
              variants={fadeUp}
              className="hidden lg:block relative"
            >
              <div className="sticky top-32">
                <div className="glass-card rounded-3xl p-6 border border-border/50">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-6">
                    Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                        }}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                          activeSection === section.id
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                        }`}
                      >
                        <section.icon className="w-4 h-4" />
                        {section.title}
                        {activeSection === section.id && (
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        )}
                      </a>
                    ))}
                  </nav>

                  {/* Stats */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">
                      Engagement
                    </h3>
                    <div className="space-y-3">
                      {stats.map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5 text-muted-foreground">
                            <stat.icon className="w-4 h-4" />
                            <span className="text-xs font-bold">{stat.label}</span>
                          </div>
                          <span className="text-sm font-black text-foreground">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              ref={contentRef}
              variants={fadeUp}
              className="prose prose-invert prose-lg sm:prose-xl max-w-none"
            >
              {/* Lead paragraph - Enhanced */}
              <div className="relative mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-emerald-600/5 to-transparent border border-primary/10">
                <div className="absolute top-0 left-6 w-12 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                <p className="text-xl sm:text-2xl text-foreground font-bold leading-snug pl-4 border-l-4 border-primary">
                  Exploring how game interfaces are evolving towards hyper-functional simplicity in the era of AI and complex systems.
                </p>
              </div>

              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
                  The landscape of digital design is constantly shifting, but one trend remains clear: the move towards brutalist, high-contrast interfaces. This isn't just an aesthetic choice; it's a functional necessity in an age where users are bombarded with information.
                </p>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  We're witnessing a paradigm shift where form follows function more rigorously than ever before. The ornate, decorative elements of the past decade are giving way to interfaces that prioritize clarity, speed, and accessibility above all else.
                </p>
              </section>

              {/* Core Philosophy */}
              <section id="philosophy" className="scroll-mt-32 mt-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                  <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                    The Core Philosophy
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                  When we talk about brutalism in UI, we're talking about stripping away the unnecessary. It's about raw functionality exposed in its most honest form. Think of the classic terminal interface—it's pure, unadulterated interaction.
                </p>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  This philosophy extends beyond mere aesthetics. It's a fundamental rethinking of how we approach digital product design. Every element must earn its place. Every interaction must feel intentional. There's no room for decorative flourishes that don't serve a purpose.
                </p>

                {/* Quote Block - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative my-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-emerald-600/5 to-transparent border border-primary/20 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-emerald-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                  <Quote className="w-12 h-12 text-primary/30 mb-6" />
                  <blockquote className="relative z-10 text-2xl sm:text-3xl text-foreground font-black italic leading-snug mb-6">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[1px] bg-primary" />
                    <cite className="text-sm font-bold text-muted-foreground uppercase tracking-widest not-italic">— Steve Jobs</cite>
                  </div>
                </motion.div>

                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  By embracing this philosophy, we can create experiences that are not only visually striking but also incredibly performant. Every element on the screen must justify its existence. If it doesn't serve a clear purpose, it gets cut.
                </p>
              </section>

              {/* Implementation */}
              <section id="implementation" className="scroll-mt-32 mt-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                  <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                    Implementation Details
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                  In practice, this means relying heavily on typography, grid systems, and stark color contrasts. Animations should be snappy and purposeful, never gratuitous. The goal is to guide the user's attention with absolute precision.
                </p>

                {/* Code Block */}
                <div className="my-10 rounded-2xl overflow-hidden border border-border/50">
                  <div className="bg-background/80 backdrop-blur-sm px-4 py-3 border-b border-border flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Component.tsx</span>
                  </div>
                  <div className="p-6 font-mono text-sm bg-background/50 overflow-x-auto">
                    <pre className="text-muted-foreground">
                      <code>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">BrutalistCard</span> = ({'{'} children, title {'}'}) ={'>'} {'{'}
                        {'\n'}  <span className="text-purple-400">return</span> (
                        {'\n'}    {'<'}<span className="text-green-400">div</span> <span className="text-blue-400">className</span>=<span className="text-amber-400">"glass-card p-8 rounded-3xl"</span>{'>'}
                        {'\n'}      {'<'}<span className="text-green-400">h3</span> <span className="text-blue-400">className</span>=<span className="text-amber-400">"text-2xl font-black uppercase"</span>{'>'}
                        {'\n'}        {'{'}title{'}'}
                        {'\n'}      {'<'}/<span className="text-green-400">h3</span>{'>'}
                        {'\n'}      {'{'}children{'}'}
                        {'\n'}    {'<'}/<span className="text-green-400">div</span>{'>'}
                        {'\n'}  );
                        {'\n'}{'}'};</code>
                    </pre>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  The implementation focuses on three core pillars: performance, accessibility, and visual hierarchy. By leveraging modern CSS features and thoughtful component architecture, we can create interfaces that are both beautiful and blazing fast.
                </p>
              </section>

              {/* Key Takeaways - Enhanced */}
              <section id="takeaways" className="scroll-mt-32 mt-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                  <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                    Key Takeaways
                  </h2>
                </div>

                <motion.div
                  variants={scaleIn}
                  className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-emerald-600/5 to-transparent border border-primary/10 overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-emerald-600/5 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_hsl(142_70%_45%/0.3)]">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-black text-foreground uppercase tracking-tight">
                        Essential Insights
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { title: "Simplicity is the ultimate sophistication", desc: "Complex solutions to simple problems are the enemy of good design." },
                        { title: "Performance matters as much as aesthetics", desc: "A beautiful interface that loads slowly is a failed interface." },
                        { title: "Every pixel should have a purpose", desc: "Decorative elements without function are visual noise." },
                        { title: "User experience trumps trends", desc: "Timeless design principles outlast fleeting aesthetic trends." },
                      ].map((item, index) => (
                        <motion.li
                          key={item.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="group flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-sm font-black text-white group-hover:scale-110 transition-transform">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground mb-1">{item.title}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </section>

              {/* Newsletter Signup - Inline */}
              <motion.div
                variants={fadeUp}
                className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-emerald-600/5 to-primary/5 border border-primary/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-emerald-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-emerald-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                
                <div className="relative z-10 text-center max-w-xl mx-auto">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center mx-auto mb-6 border border-primary/30 shadow-[0_0_20px_hsl(142_70%_45%/0.3)]"
                  >
                    <Send className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-foreground mb-3">
                    Enjoyed this article?
                  </h3>
                  <p className="text-muted-foreground font-medium mb-6 text-sm sm:text-base">
                    Get exclusive insights on design, engineering, and brutalist aesthetics delivered to your inbox.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER YOUR EMAIL"
                      className="flex-1 bg-background/80 backdrop-blur-sm border border-border rounded-full px-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(142_70%_45%/0.2)] transition-all placeholder:text-muted-foreground/40 text-foreground"
                      required
                    />
                    <button
                      type="submit"
                      disabled={subscribed}
                      className="group bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground font-black px-8 py-4 rounded-full hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] hover:scale-105 transition-all active:scale-[0.98] uppercase tracking-widest text-xs flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {subscribed ? (
                        <>
                          <Check className="w-4 h-4" />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Tags:</span>
                  {["Brutalism", "UI Design", "Web Development", "Performance", "Accessibility"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-secondary/30 border border-border/50 rounded-full text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engagement Section - Enhanced */}
              <motion.div
                variants={fadeUp}
                className="mt-16 pt-10 border-t border-border"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all ${
                        isLiked
                          ? "bg-red-500/10 border-red-500/30 text-red-500"
                          : "bg-secondary/30 border-border/50 text-muted-foreground hover:border-red-500/30 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? "fill-current scale-110" : ""} transition-all`} />
                      <span className="text-sm font-bold">847</span>
                    </button>
                    <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-primary transition-all">
                      <MessageSquare className="w-5 h-5" />
                      <span className="text-sm font-bold">63</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Share:</span>
                    <div className="flex items-center gap-2">
                      {shareOptions.map((option) => (
                        <button
                          key={option.name}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center border border-border/50 text-muted-foreground transition-all hover:scale-110 ${option.color} bg-secondary/30`}
                        >
                          <option.icon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.article>

        {/* Related Articles */}
        <motion.section
          variants={fadeUp}
          className="mt-24 sm:mt-32 pt-16 border-t border-border"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            <h2 className="text-2xl sm:text-3xl font-black text-foreground uppercase italic tracking-tighter">
              Related Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: "Engineering",
                title: "Why I Chose React Over Everything",
                desc: "How React's component model aligns perfectly with the way I think about building interfaces.",
                readTime: "8 min read",
              },
              {
                category: "Gaming",
                title: "Designing HUDs That Don't Suck",
                desc: "A deep dive into game UI patterns that keep players immersed without cluttering the screen.",
                readTime: "5 min read",
              },
            ].map((article) => (
              <Link to="/blog" key={article.title} className="group">
                <motion.article
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500"
                >
                  <span className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-wider rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-black text-foreground uppercase italic tracking-tighter mt-4 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-4">
                    {article.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      {article.readTime}
                    </span>
                    <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-180 transition-all" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer
        headline={<>READY FOR THE <br /><span className="text-primary italic">NEXT STAGE?</span></>}
        subtext="Let's transform your vision into a high-performance digital reality."
        ctaLabel="VIEW PORTFOLIO"
        ctaLink="/"
      />
    </div>
  );
};

export default BlogPost;
