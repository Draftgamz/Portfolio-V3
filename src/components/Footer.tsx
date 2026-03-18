import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const Marquee = () => {
  return (
    <div className="relative flex overflow-hidden bg-gradient-to-r from-primary via-emerald-600 to-primary py-5 sm:py-7 mt-12 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 shadow-[0_0_60px_hsl(142_70%_45%/0.3)] transform -rotate-1 origin-left">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6">
            <span className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter text-primary-foreground drop-shadow-lg">AVAILABLE FOR WORK</span>
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground animate-pulse" />
            <span className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter text-primary-foreground drop-shadow-lg">LET'S BUILD SOMETHING</span>
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground animate-pulse" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface FooterProps {
  headline?: React.ReactNode;
  subtext?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

const Footer = ({
  headline = (
    <>
      LETS BUILD <br className="hidden sm:block" />
      <span className="text-primary italic">SOMETHING</span>
      <br className="hidden sm:block" />
      <span className="text-primary italic">ICONIC.</span>
    </>
  ),
  subtext = "Currently accepting new projects. Let's create something that pushes boundaries.",
  ctaLabel = "START A PROJECT",
  ctaLink = "/contact",
}: FooterProps) => {
  return (
    <div className="overflow-hidden">
      <Marquee />
      <motion.footer
        className="px-4 sm:px-6 pb-8 lg:pb-12 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mega-card-gradient rounded-3xl sm:rounded-4xl p-6 sm:p-12 lg:p-24 overflow-hidden relative border border-border/50 hover:border-primary/30 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 lg:mb-10 leading-[0.85] tracking-tighter uppercase italic text-foreground">
                {headline}
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-8 lg:mb-12 max-w-md leading-relaxed">
                {subtext}
              </p>
              <Link
                to={ctaLink}
                className="group inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground rounded-full font-black uppercase tracking-widest text-sm sm:text-lg hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] hover:scale-105 transition-all duration-300 active:scale-[0.98]"
              >
                {ctaLabel}
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 group-hover:translate-x-1 transition-all duration-500" />
              </Link>
            </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col lg:items-end text-left lg:text-right">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 mb-10 lg:mb-12 flex items-center justify-center group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[10.5px] font-black uppercase tracking-[0.15em] fill-primary">
                    <textPath href="#circlePath" startOffset="0%">
                      AVAILABLE FOR WORK • LET'S COLLABORATE •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="bg-gradient-to-br from-primary/20 to-emerald-600/20 border border-primary/30 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center z-10 shadow-[0_0_40px_hsl(142_70%_45%/0.3)] group-hover:scale-110 group-hover:shadow-[0_0_60px_hsl(142_70%_45%/0.5)] transition-all duration-500">
                <Zap className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
              </div>
            </div>
            <div className="flex gap-12 lg:gap-16 mb-10 lg:mb-12 text-left">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-5 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-primary" />
                  Connect
                </p>
                <ul className="space-y-3 text-sm font-bold">
                  <li><a className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />Twitter</a></li>
                  <li><a className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group" href="https://github.com" target="_blank" rel="noopener noreferrer"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />GitHub</a></li>
                  <li><a className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group" href="https://discord.com" target="_blank" rel="noopener noreferrer"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />Discord</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-5 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-primary" />
                  Explore
                </p>
                <ul className="space-y-3 text-sm font-bold">
                  <li><Link className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group" to="/"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />Home</Link></li>
                  <li><Link className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group" to="/about"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />About</Link></li>
                  <li><Link className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group" to="/contact"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-1">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                Designed with precision
              </p>
              <p className="text-base lg:text-lg font-black tracking-tight text-foreground">
                © 2026 Draft Inc.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute -bottom-16 -right-16 opacity-[0.02] pointer-events-none select-none hidden lg:block">
          <span className="text-[260px] font-black leading-none uppercase italic text-foreground">
            DRAFT
          </span>
        </div>
      </div>
    </motion.footer>
    </div>
  );
};

export default Footer;
