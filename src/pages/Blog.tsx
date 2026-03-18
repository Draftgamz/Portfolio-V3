import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, Sparkles, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import blogFeatured from "@/assets/blog-featured.jpg";
import blogThumb1 from "@/assets/blog-thumb-1.jpg";
import blogThumb2 from "@/assets/blog-thumb-2.jpg";
import blogThumb3 from "@/assets/blog-thumb-3.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { clipIn, fadeUp, stagger, scaleIn } from "@/lib/animations";

const articles = [
  {
    category: "Gaming",
    date: "January 10, 2025",
    title: "Designing HUDs That Don't Suck",
    desc: "A deep dive into game UI patterns that keep players immersed without cluttering the screen.",
    readTime: "5 min read",
    thumb: blogThumb1,
  },
  {
    category: "Process",
    date: "December 20, 2024",
    title: "The Hybrid Digital Art Workflow",
    desc: "Blending traditional art techniques with modern generative tools for unique brand identities.",
    readTime: "12 min read",
    thumb: blogThumb2,
  },
  {
    category: "Engineering",
    date: "November 15, 2024",
    title: "Why I Chose React Over Everything",
    desc: "How React's component model aligns perfectly with the way I think about building interfaces.",
    readTime: "8 min read",
    thumb: blogThumb3,
  },
];

const Blog = () => {
  return (
    <div className="relative overflow-x-hidden noise-overlay">
      <GlowBackground />
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-32 relative z-10">
        {/* Page Header */}
        <motion.div
          className="mb-10 sm:mb-24 relative"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            variants={clipIn}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-6 sm:mb-8 border border-primary/20 hover:bg-primary/10 transition-colors cursor-default"
          >
            <Sparkles className="w-3 h-3" />
            Thoughts & Insights
          </motion.div>
          <motion.h1 variants={clipIn} className="text-[13vw] sm:text-7xl md:text-[9rem] font-black leading-[0.85] tracking-tighter mb-6 sm:mb-8 text-foreground uppercase">
            The <span className="text-primary italic relative inline-block">
              Archive.
              <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary/30 rounded-full blur-sm" />
            </span>
          </motion.h1>
          <motion.p variants={clipIn} className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-snug font-medium tracking-tight">
            Writings on design engineering, brutalist aesthetics, and the future of digital interfaces.
          </motion.p>
        </motion.div>

        {/* Featured Article - Enhanced */}
        <motion.section
          className="mb-12 sm:mb-40"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <Link to="/blog/the-future-of-gaming-ui-design" className="block group">
            <motion.div
              variants={scaleIn}
              className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-card border border-border/50 flex flex-col lg:flex-row items-stretch min-h-[auto] sm:min-h-[600px] shadow-2xl group-hover:border-primary/50 group-hover:shadow-[0_20px_60px_-15px_hsl(142_70%_45%/0.2)] transition-all duration-500"
            >
            <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[250px] sm:min-h-[300px] lg:min-h-0">
              <img
                src={blogFeatured}
                alt="Featured article"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="w-full lg:w-1/2 p-5 sm:p-12 lg:p-20 flex flex-col justify-center gap-6 sm:gap-12 relative z-10 bg-background/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-primary/30">
                    Featured
                  </span>
                  <span className="text-muted-foreground text-[10px] sm:text-[11px] font-bold uppercase tracking-widest font-mono">
                    March 14, 2025
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300 uppercase">
                  The Future of <br className="hidden lg:block" /><span className="italic">Gaming UI</span> Design
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-xl leading-relaxed font-medium max-w-lg">
                Exploring how game interfaces are evolving towards hyper-functional simplicity in the era of AI.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
                  <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest font-mono">12 min read</span>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_hsl(142_70%_45%/0.4)] transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </div>
            </motion.div>
          </Link>
        </motion.section>

        {/* Articles List - Enhanced */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                <span className="h-[1px] w-8 bg-primary" />
                LATEST ENTRIES
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 md:pb-0 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
              {["All Posts", "Engineering", "Design", "Gaming"].map((filter, i) => (
                <button
                  key={filter}
                  className={`snap-start px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                    i === 0
                      ? "border-primary/20 bg-primary/5 text-primary"
                      : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {articles.map((article) => (
              <Link to={`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`} key={article.title} className="block group">
                <motion.article
                  variants={fadeUp}
                  className="glass-card p-5 sm:p-8 rounded-3xl cursor-pointer flex flex-col md:flex-row items-center gap-6 sm:gap-12 hover:border-primary/50 transition-colors duration-500 relative overflow-hidden group-hover:shadow-[0_20px_60px_-15px_hsl(142_70%_45%/0.15)]"
                >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />

                {/* Thumbnail */}
                <div className="w-full md:w-64 lg:w-80 aspect-[16/10] sm:aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden shrink-0 relative z-10 border border-border/50 group-hover:border-primary/30 transition-colors">
                  <img
                    src={article.thumb}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="flex-1 space-y-4 sm:space-y-6 relative z-10 w-full">
                  <div className="flex items-center gap-3 sm:gap-4 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] font-mono">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      {article.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black group-hover:text-primary transition-colors tracking-tighter leading-[1.1] text-foreground uppercase">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm sm:text-lg max-w-2xl">
                    {article.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest font-mono">{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                      Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                </motion.article>
              </Link>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-16 sm:mt-32 flex justify-center">
            <button className="group px-8 py-4 sm:px-12 sm:py-6 rounded-full border border-border bg-transparent text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-foreground flex items-center gap-3">
              Load More Entries
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </motion.section>

        {/* Newsletter - Enhanced */}
        <motion.section
          className="mt-16 sm:mt-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={scaleIn} className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-16 lg:p-24 text-center relative overflow-hidden border border-primary/20 group hover:border-primary/40 transition-colors duration-500">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none transition-opacity duration-500 group-hover:bg-primary/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_30px_hsl(142_70%_45%/0.4)] transition-all duration-500"
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </motion.div>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-6 text-foreground leading-[0.9]">
                Join the <br className="hidden sm:block" /><span className="text-primary italic relative inline-block">
                  Inner Circle
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary/30 rounded-full blur-sm"
                    animate={{ scaleX: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-xl mb-8 sm:mb-12 leading-relaxed font-medium max-w-xl">
                Get exclusive insights on design, engineering, and the future of digital interfaces delivered straight to your inbox. No spam, just signal.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="flex-1 bg-background/80 backdrop-blur-sm border border-border rounded-full px-6 py-4 sm:px-8 sm:py-5 text-xs sm:text-sm font-bold tracking-widest uppercase focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(142_70%_45%/0.2)] transition-all placeholder:text-muted-foreground/40 text-foreground"
                  required
                />
                <button
                  type="submit"
                  className="group bg-primary text-primary-foreground font-black px-6 py-4 sm:px-10 sm:py-5 rounded-full hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] hover:scale-105 transition-all active:scale-[0.98] uppercase tracking-widest text-xs sm:text-sm flex items-center gap-3 justify-center w-full sm:w-auto relative overflow-hidden"
                >
                  <span className="relative z-10">Subscribe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <Footer
        headline={<>READY FOR THE <br className="hidden sm:block" /><span className="text-primary italic">NEXT STAGE?</span></>}
        subtext="Let's transform your vision into a high-performance digital reality."
        ctaLabel="VIEW PORTFOLIO"
        ctaLink="/"
      />
    </div>
  );
};

export default Blog;
