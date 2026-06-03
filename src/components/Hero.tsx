import { MessageCircle, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image (LCP optimized) */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/hero.jpg"
          alt="Premium Personalized Gift Hamper Curation"
          fetchPriority="high"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 z-10 gradient-overlay-dark" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-8 text-center text-white mt-16 md:mt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-[1.15] max-w-4xl"
          >
            Personalized Gift Hampers <br className="hidden md:inline" />
            <span className="text-primary-light italic font-normal">
              For Every Special Occasion
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl mt-6 leading-relaxed"
          >
            Gift hampers crafted with love and care for every reason and every
            season to put a smile on your face.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919999999999?text=Hi%20Pack%20%26%20Wrap%2C%20I'm%20interested%20in%20creating%20a%20personalized%20gift%20hamper%21"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans text-sm tracking-wider uppercase font-semibold px-8 py-4.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/20 w-full sm:w-auto active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform duration-300" />
              <span>Order on WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => onNavigate("occasions")}
          className="p-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
