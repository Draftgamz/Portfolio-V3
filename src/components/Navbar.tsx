import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", path: "/" },
  { label: "Playground", path: "/playground" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-fit">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`glass-card rounded-full transition-all duration-300 ${
            scrolled 
              ? "shadow-[0_8px_32px_rgba(0,0,0,0.8)] border-primary/20 bg-background/90" 
              : "border-border/50 bg-background/80"
          } backdrop-blur-xl`}
        >
          <div className="flex items-center gap-1 p-1.5">
            <Link to="/" className="group flex items-center gap-2.5 pl-3 pr-2 py-1.5 rounded-full hover:bg-primary/10 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-emerald-600 rounded-full flex items-center justify-center shadow-[0_0_20px_hsl(142_70%_45%/0.5)] group-hover:shadow-[0_0_30px_hsl(142_70%_45%/0.7)] transition-all duration-300 group-hover:scale-110">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-black tracking-tight text-sm text-foreground group-hover:text-primary transition-colors">Draft</span>
            </Link>

            <div className="h-6 w-px bg-border/50 mx-1 hidden md:block" />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5 px-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 text-[13px] font-bold rounded-full transition-all duration-300 relative group ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-primary/10 rounded-full" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="ml-1 px-5 py-2.5 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground font-bold text-[13px] rounded-full flex items-center gap-2 hover:shadow-[0_0_25px_hsl(142_70%_45%/0.5)] hover:scale-105 transition-all duration-300 group"
              >
                Let's Talk
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-rotate-45 transition-all duration-300" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary transition-all mr-1 relative z-[60]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl md:hidden flex flex-col justify-center px-6 noise-overlay"
          >
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-tl from-primary/20 to-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto relative z-10">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={`group flex items-center justify-between text-4xl sm:text-5xl font-black tracking-tighter uppercase border-b border-border/50 pb-4 transition-all ${
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.label}
                      <ChevronRight className={`w-8 h-8 group-hover:translate-x-2 transition-transform ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  className="group w-full py-5 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground font-black text-lg uppercase tracking-widest rounded-full flex items-center justify-center gap-3 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.5)] hover:scale-[1.02] transition-all active:scale-[0.98]"
                >
                  Let's Talk 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:-rotate-45 transition-all" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
