import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Star, Layers, Palette, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { clipIn, fadeUp, stagger, scaleIn } from "@/lib/animations";

const ProjectDetail = () => {
  const { id } = useParams();
  const title = id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "Project Name";
  const [currentImage, setCurrentImage] = useState(0);
  
  const galleryImages = [project1, project1, project1];
  
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const projectDetails = [
    { icon: Layers, label: "Role", value: "Lead Designer" },
    { icon: Palette, label: "Type", value: "Web Design" },
    { icon: Code2, label: "Stack", value: "React, Tailwind" },
    { icon: Star, label: "Client", value: "Nexus Gaming" },
  ];

  return (
    <div className="relative overflow-x-hidden noise-overlay">
      <GlowBackground />
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-36 sm:pt-40 pb-24 sm:pb-32 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={clipIn} className="mb-8 sm:mb-12">
            <Link to="/projects" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Archive
            </Link>
          </motion.div>

          <motion.h1 variants={clipIn} className="text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-8 sm:mb-12 text-foreground uppercase italic">
            {title}
          </motion.h1>

          {/* Project Meta Grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
            {projectDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                variants={scaleIn}
                className="glass-card p-5 sm:p-6 rounded-2xl group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_25px_hsl(142_70%_45%/0.15)]"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <detail.icon className="w-5 h-5" />
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground">
                    {detail.label}
                  </p>
                </div>
                <p className="text-sm sm:text-base font-bold text-foreground">{detail.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Image Gallery */}
          <motion.div variants={fadeUp} className="mb-16 sm:mb-24">
            <div className="relative group">
              <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-4xl overflow-hidden border border-border shadow-2xl">
                <img 
                  src={galleryImages[currentImage]} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Dots Indicator */}
              {galleryImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImage 
                          ? "w-8 bg-primary" 
                          : "bg-background/50 hover:bg-background"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Thumbnail Grid */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-3 gap-4 mt-6">
                {galleryImages.map((img, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImage 
                        ? "border-primary shadow-[0_0_20px_hsl(142_70%_45%/0.3)]" 
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16 sm:mb-20">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_hsl(142_70%_45%/0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary text-foreground rounded-full font-black uppercase tracking-widest text-sm hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95 border border-border"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-3xl mx-auto space-y-8 sm:space-y-12 text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
            <p className="text-xl sm:text-2xl text-foreground font-bold leading-snug border-l-4 border-primary pl-6">
              The goal of this project was to completely reimagine the user experience from the ground up. We wanted to create something that felt both brutally functional and visually striking.
            </p>
            
            <div className="pt-8">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase italic tracking-tighter mb-6 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-primary" />
                The Challenge
              </h2>
              <p>
                Balancing high-density information with a clean, navigable interface is always a challenge. By utilizing a strict grid system and high-contrast typography, we were able to establish a clear visual hierarchy that guides the user's eye naturally through the complex data sets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
              <motion.div 
                className="aspect-square rounded-2xl overflow-hidden border border-border group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img src={project1} alt="Detail 1" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </motion.div>
              <motion.div 
                className="aspect-square rounded-2xl overflow-hidden border border-border group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img src={project1} alt="Detail 2" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </motion.div>
            </div>
            
            <div className="pt-8">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase italic tracking-tighter mb-6 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-primary" />
                The Solution
              </h2>
              <p>
                The final product is a testament to the power of brutalist design principles applied to complex functional requirements. The interface doesn't just look good; it performs exceptionally well under heavy load, providing users with a seamless, lag-free experience.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {["Lightning Fast Performance", "Responsive Design", "Accessible UI Components", "Modern Tech Stack"].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 group hover:border-primary/30 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_10px_hsl(142_70%_45%)] transition-shadow" />
                    <span className="text-base font-bold text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer
        headline={<>NEXT <br /><span className="text-primary italic">PROJECT.</span></>}
        subtext="Continue exploring the archive."
        ctaLabel="VIEW NEXT"
        ctaLink="/projects"
      />
    </div>
  );
};

export default ProjectDetail;
