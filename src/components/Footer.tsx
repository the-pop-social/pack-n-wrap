import { MessageCircle, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(sectionId);
  };

  const instagramUrl = "https://www.instagram.com/pack_and_wrap_/";
  const whatsappUrl = "https://wa.me/919999999999?text=Hi%20Pack%20%26%20Wrap%2C%20I'm%20interested%20in%20creating%20a%20personalized%20gift%20hamper%21";

  return (
    <footer className="bg-charcoal text-white/80 pt-16 pb-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick("home", e)}
              className="inline-flex items-center gap-2 group mb-6"
            >
              <div className="w-9 h-9 rounded-full border border-primary/40 bg-charcoal-light flex items-center justify-center text-primary font-serif font-bold text-base">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wide text-white group-hover:text-primary transition-colors leading-none">
                  Pack & Wrap
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-primary-light font-sans mt-0.5">
                  Bespoke Gifting
                </span>
              </div>
            </a>
            <p className="text-xs font-sans font-light text-white/60 leading-relaxed mb-6">
              Thoughtfully curated hampers and platters crafted for birthdays, anniversaries, weddings, baby showers, and life's most memorable moments.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-6">
              Collections
            </h4>
            <ul className="space-y-3 font-sans text-xs">
              <li>
                <a
                  href="#occasions"
                  onClick={(e) => handleNavClick("occasions", e)}
                  className="hover:text-primary transition-colors duration-300 font-light"
                >
                  Occasion Categories
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  onClick={(e) => handleNavClick("collection", e)}
                  className="hover:text-primary transition-colors duration-300 font-light"
                >
                  Featured Hampers
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick("why-us", e)}
                  className="hover:text-primary transition-colors duration-300 font-light"
                >
                  Why Pack & Wrap
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleNavClick("how-it-works", e)}
                  className="hover:text-primary transition-colors duration-300 font-light"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-6">
              Customer Love
            </h4>
            <ul className="space-y-3 font-sans text-xs">
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleNavClick("testimonials", e)}
                  className="hover:text-primary transition-colors duration-300 font-light"
                >
                  Client Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick("faq", e)}
                  className="hover:text-primary transition-colors duration-300 font-light"
                >
                  FAQ Section
                </a>
              </li>
              <li>
                <a
                  href="#instagram"
                  onClick={(e) => handleNavClick("instagram", e)}
                  className="hover:text-primary transition-colors duration-300 font-light"
                >
                  Instagram Feed
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-6">
              Studio Inquiry
            </h4>
            <ul className="space-y-4 font-sans text-xs font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Bespoke Boutique Studio, Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919999999999" className="hover:text-primary transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:hello@packandwrap.com" className="hover:text-primary transition-colors">
                  hello@packandwrap.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and signature */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans font-light text-white/40">
          <p>© 2026 Pack & Wrap. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 fill-accent stroke-accent text-accent" /> for memorable gifting.
          </p>
        </div>
      </div>
    </footer>
  );
}
