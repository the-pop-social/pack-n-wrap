import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onPageChange: (page: string) => void;
}

export default function Header({
  onNavigate,
  activeSection,
  onPageChange,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Occasions", href: "occasions" },
    { name: "Collection", href: "collection" },
    { name: "Contact", href: "contact" },
    { name: "Reviews", href: "testimonials" },
    { name: "Bulk Order", href: "bulk" },
  ];

  const pageLinks = ["occasions", "contact", "bulk"];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (pageLinks.includes(href)) {
      onPageChange(href);
    } else {
      onNavigate(href);
    }
  };

  return (
    <>
      <header className="relative z-40 bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full border border-primary/40 bg-secondary flex items-center justify-center text-primary font-serif font-bold text-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-charcoal group-hover:text-primary transition-colors duration-300 leading-none">
                Pack & Wrap
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted font-sans mt-0.5">
                Bespoke Gifting
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative text-sm tracking-wider font-sans font-medium uppercase transition-colors duration-300 py-1 ${
                  activeSection === item.href
                    ? "text-primary font-semibold"
                    : "text-charcoal/80 hover:text-primary"
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/919999999999?text=Hi%20Pack%20%26%20Wrap%2C%20I'm%20interested%20in%20creating%20a%20personalized%20gift%20hamper%21"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans text-xs tracking-wider uppercase font-semibold px-5 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform duration-300" />
              <span>Inquire Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden pt-24 bg-white/95 backdrop-blur-md flex flex-col justify-between"
          >
            <div className="flex flex-col items-center gap-6 px-6 py-8 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`text-xl font-serif tracking-wide py-2 ${
                    activeSection === item.href
                      ? "text-primary border-b border-primary/30"
                      : "text-charcoal/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA at bottom */}
            <div className="p-8 border-t border-secondary flex flex-col items-center gap-4 bg-secondary/50">
              <a
                href="https://wa.me/919999999999?text=Hi%20Pack%20%26%20Wrap%2C%20I'm%20interested%20in%20creating%20a%20personalized%20gift%20hamper%21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans text-sm tracking-wider uppercase font-semibold py-4 rounded-full transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Inquiry</span>
              </a>
              <span className="text-xs text-muted font-sans">
                Let's craft your perfect gift
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
