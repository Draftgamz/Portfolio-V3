import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Zap, AlertTriangle } from "lucide-react";
import GlowBackground from "@/components/GlowBackground";
import { clipIn, fadeUp, stagger } from "@/lib/animations";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      <GlowBackground />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center"
        >
          {/* Glitch effect container */}
          <motion.div 
            variants={clipIn}
            className="relative mb-8 sm:mb-12"
          >
            <div className="absolute inset-0 blur-2xl opacity-30 animate-pulse">
              <h1 className="text-[100px] sm:text-[180px] font-black leading-none tracking-tighter italic text-primary">
                404
              </h1>
            </div>
            <h1 className="relative text-[100px] sm:text-[180px] font-black leading-none tracking-tighter italic text-foreground">
              4<span className="text-primary relative">
                0
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-emerald-400 rounded-full blur-sm"
                  animate={{ scaleX: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>4
            </h1>
          </motion.div>

          {/* Status badge */}
          <motion.div variants={fadeUp} className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-emerald-600/10 border border-primary/20 text-primary text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4" />
              Page Not Found
            </div>
          </motion.div>

          {/* Main message */}
          <motion.div variants={fadeUp} className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-4">
              Lost in the <span className="text-primary italic">Digital Void</span>
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} className="text-base sm:text-xl text-muted-foreground font-medium mb-10 sm:mb-12 max-w-lg leading-relaxed">
            The page you're looking for has been moved, deleted, or never existed. 
            Let's get you back on track.
          </motion.p>

          {/* Action buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="group flex items-center gap-3 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground font-black px-8 py-4 rounded-full hover:shadow-[0_0_40px_hsl(142_70%_45%/0.5)] hover:scale-105 transition-all duration-300 active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Go Home
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-secondary/50 backdrop-blur-sm text-foreground border border-border/50 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Report Issue
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div 
            variants={fadeUp}
            className="mt-16 sm:mt-24 flex items-center gap-2 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground"
          >
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
            Error 404
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
