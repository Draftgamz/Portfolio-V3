import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Send, ChevronDown, ArrowUpRight, Mail, MapPin, Github, Twitter, MessageCircle, Zap, Sparkles, Calendar, Clock, Check, ArrowRight, Globe, User, FileText, MessageSquare } from "lucide-react";
import { useState, useRef } from "react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { clipIn, fadeUp, stagger, slideInLeft, slideInRight, scaleIn } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";

const options = [
  { value: "web", label: "Web Design", icon: Globe, description: "Custom websites & web apps" },
  { value: "gaming", label: "Gaming UI", icon: MessageCircle, description: "Game interfaces & overlays" },
  { value: "brand", label: "Brand Identity", icon: Sparkles, description: "Visual identity & branding" },
  { value: "collab", label: "Just saying hi!", icon: User, description: "Friendly hello" },
];

const features = [
  { icon: Clock, label: "Response Time", value: "< 24 Hours", gradient: "from-primary to-emerald-600" },
  { icon: Calendar, label: "Availability", value: "Open", gradient: "from-blue-500 to-cyan-500" },
  { icon: Zap, label: "Turnaround", value: "Fast", gradient: "from-purple-500 to-pink-500" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", interest: "", message: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: formRef });
  const formOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", interest: "", message: "" });
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const inputClass =
    "w-full px-0 py-4 bg-transparent border-0 border-b border-border/50 text-lg sm:text-xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:border-b-2 transition-all duration-300";

  return (
    <div className="relative overflow-x-hidden noise-overlay">
      <GlowBackground />
      <Navbar />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <main className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <motion.div
          className="mb-16 sm:mb-24 lg:mb-32"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            variants={clipIn}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-6 sm:mb-8 border border-primary/20 hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(142_70%_45%/0.2)] transition-all duration-300 cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_8px_hsl(142_70%_45%/0.5)]" />
            </span>
            Available for Projects
          </motion.div>

          <motion.h1 variants={clipIn} className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter mb-6 sm:mb-8 text-foreground">
            LET'S <span className="italic text-primary relative inline-block">
              CONNECT
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={clipIn} className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-medium">
            Have a vision that needs bringing to life? I'm currently accepting new freelance opportunities and creative collaborations. Let's build something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Form Section */}
          <motion.div 
            variants={slideInLeft} 
            className="lg:col-span-7 xl:col-span-8"
            ref={formRef}
          >
            <motion.div 
              style={{ opacity: formOpacity }}
              className="relative"
            >
              {/* Section header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-primary to-transparent" />
                <h2 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-primary">
                  Send a Message
                </h2>
              </div>

              {/* Form Card */}
              <div className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 via-emerald-600/5 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 via-emerald-600/5 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                
                {/* Success overlay */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl rounded-[2rem]"
                    >
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_hsl(142_70%_45%/0.4)]"
                        >
                          <Check className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-foreground mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          I'll get back to you within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form className="space-y-8 sm:space-y-10 relative z-10" onSubmit={handleSubmit}>
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="group">
                      <label className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-3">
                        <User className="w-3.5 h-3.5" />
                        Full Name
                      </label>
                      <input
                        className={inputClass}
                        placeholder="John Doe"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="group">
                      <label className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-3">
                        <Mail className="w-3.5 h-3.5" />
                        Email Address
                      </label>
                      <input
                        className={inputClass}
                        placeholder="hello@example.com"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Interest Dropdown */}
                  <div className="group relative z-20" ref={dropdownRef}>
                    <label className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-3">
                      <FileText className="w-3.5 h-3.5" />
                      Interested In
                    </label>
                    <div
                      className={`${inputClass} cursor-pointer flex items-center justify-between py-4 group-hover:border-primary/30 transition-colors`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={formData.interest ? "text-foreground" : "text-muted-foreground/40"}>
                        {formData.interest ? options.find(o => o.value === formData.interest)?.label : "Select a service"}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${isDropdownOpen ? "rotate-180 text-primary" : ""}`} />
                    </div>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full mt-2 left-0 w-full bg-background/98 backdrop-blur-xl border border-border/50 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden z-50"
                        >
                          <div className="p-2 flex flex-col gap-1 max-h-80 overflow-y-auto">
                            {options.map((option) => (
                              <div
                                key={option.value}
                                className={`px-4 py-4 cursor-pointer transition-all duration-200 rounded-xl flex items-start gap-4 ${
                                  formData.interest === option.value
                                    ? "bg-gradient-to-r from-primary/10 to-emerald-600/10 border border-primary/20"
                                    : "hover:bg-secondary/30 border border-transparent"
                                }`}
                                onClick={() => {
                                  setFormData({ ...formData, interest: option.value });
                                  setIsDropdownOpen(false);
                                }}
                              >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                  formData.interest === option.value
                                    ? "bg-gradient-to-br from-primary to-emerald-600 shadow-[0_0_15px_hsl(142_70%_45%/0.3)]"
                                    : "bg-secondary/50"
                                }`}>
                                  <option.icon className={`w-5 h-5 ${
                                    formData.interest === option.value ? "text-white" : "text-muted-foreground"
                                  }`} />
                                </div>
                                <div className="flex-1">
                                  <p className={`text-sm font-bold ${
                                    formData.interest === option.value ? "text-primary" : "text-foreground"
                                  }`}>
                                    {option.label}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {option.description}
                                  </p>
                                </div>
                                {formData.interest === option.value && (
                                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(142_70%_45%/0.5)] mt-2" />
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-3">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Your Message
                    </label>
                    <textarea
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project, timeline, and goals..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    whileHover={{ scale: isSubmitting || submitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || submitted ? 1 : 0.98 }}
                    className="group relative w-full bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground font-black py-5 sm:py-6 px-8 rounded-full overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_0_30px_hsl(142_70%_45%/0.3)] hover:shadow-[0_0_50px_hsl(142_70%_45%/0.5)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          <span className="tracking-[0.2em] text-xs sm:text-sm">SENDING...</span>
                        </>
                      ) : submitted ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span className="tracking-[0.2em] text-xs sm:text-sm">SENT!</span>
                        </>
                      ) : (
                        <>
                          <span className="tracking-[0.2em] text-xs sm:text-sm">INITIALIZE CONTACT</span>
                          <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar Section */}
          <motion.div variants={slideInRight} className="lg:col-span-5 xl:col-span-4 space-y-4 lg:space-y-6">
            {/* Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  variants={scaleIn}
                  custom={index}
                  className="glass-card rounded-3xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 blur-[50px] pointer-events-none group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-[0_0_20px_hsl(142_70%_45%/0.2)] group-hover:shadow-[0_0_30px_hsl(142_70%_45%/0.3)] transition-all duration-500`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground">
                        {feature.label}
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-foreground italic tracking-tighter">
                        {feature.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info Card */}
            <motion.div
              variants={fadeUp}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(142_70%_45%/0.15)]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[60px] pointer-events-none transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-150" />
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-600 rounded-xl blur-md opacity-50" />
                  <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_hsl(142_70%_45%/0.3)]">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-primary">
                  Direct Contact
                </h4>
              </div>
              <a 
                className="block text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter hover:text-primary transition-colors duration-300 text-foreground break-all" 
                href="mailto:draft@studio.design"
              >
                draft@studio.design
              </a>
            </motion.div>

            {/* Location & Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Location */}
              <motion.div
                variants={fadeUp}
                className="glass-card rounded-3xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col justify-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-[9px] font-black uppercase tracking-[0.25em] text-primary mb-2">
                  Location
                </h4>
                <p className="text-lg font-black text-foreground tracking-tight">
                  Remote
                </p>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">
                  Worldwide
                </p>
              </motion.div>

              {/* Social */}
              <motion.div
                variants={fadeUp}
                className="glass-card rounded-3xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-[9px] font-black uppercase tracking-[0.25em] text-primary mb-3">
                  Social
                </h4>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
                    { name: "GitHub", icon: Github, href: "https://github.com" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      className="text-xs font-bold hover:text-primary transition-colors text-foreground flex items-center justify-between group/link"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-all text-primary" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Online Status */}
            <motion.div
              variants={scaleIn}
              className="glass-card rounded-3xl p-6 flex items-center gap-4 border border-primary/20 bg-gradient-to-r from-primary/5 to-emerald-600/5 hover:from-primary/10 hover:to-emerald-600/10 transition-all group cursor-default"
              whileHover={{ scale: 1.02, boxShadow: "0_0_40px_hsl(142_70%_45%/0.2)" }}
            >
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary shadow-[0_0_12px_hsl(142_70%_45%)]"></span>
              </span>
              <div>
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
                  Online
                </p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                  Ready to Collaborate
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.section
          variants={fadeUp}
          className="mt-24 sm:mt-32 pt-16 border-t border-border/50"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-primary to-transparent" />
            <h2 className="text-xl sm:text-2xl font-black text-foreground uppercase italic tracking-tighter">
              Common Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Most projects take 2-6 weeks depending on scope and complexity.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! I offer maintenance packages and ongoing collaboration.",
              },
              {
                q: "What's your payment structure?",
                a: "50% upfront, 50% on completion. Flexible for larger projects.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-500 group"
                whileHover={{ y: -2 }}
              >
                <p className="text-sm font-bold text-foreground mb-3 leading-relaxed">
                  {faq.q}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer
        headline={<>WANT TO SEE <br /><span className="text-primary italic">MY WORK?</span></>}
        subtext="Explore my curated selection of high-impact digital experiences."
        ctaLabel="VIEW PORTFOLIO"
        ctaLink="/"
      />
    </div>
  );
};

export default Contact;
