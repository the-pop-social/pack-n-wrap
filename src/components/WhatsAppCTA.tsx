import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating button only after scrolling 400px (past the hero)
      if (window.scrollY > 400) {
        setShowFloat(true);
      } else {
        setShowFloat(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/919999999999?text=Hi%20Pack%20%26%20Wrap%2C%20I'm%20interested%20in%20creating%20a%20personalized%20gift%20hamper%21";

  return (
    <>
      {/* 1. Large Conversion Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        {/* Soft elegant background circles */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold font-sans">
            Start Your Curation
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mt-3 mb-6 text-charcoal leading-tight">
            Ready To Create The Perfect Gift?
          </h2>
          <p className="text-sm md:text-lg text-muted font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's design something truly special for your loved ones. Send us your ideas, occasions, and budget, and we'll craft a bespoke proposal just for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans text-sm tracking-wider uppercase font-semibold px-10 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-primary/20 active:scale-95 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform duration-300" />
              <span>Chat On WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-muted font-sans font-light">
            <span>✓ Quick response in under 2 hours</span>
            <span>✓ Deliveries across Mumbai</span>
            <span>✓ Custom message cards included</span>
          </div>
        </div>
      </section>

      {/* 2. Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Pack & Wrap on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary hover:bg-primary-dark text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center animate-pulse-glowing ${
          showFloat ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        {/* Unread dot indicator for visual engagement */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-accent border-2 border-white rounded-full animate-ping" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-accent border-2 border-white rounded-full" />
      </a>
    </>
  );
}
