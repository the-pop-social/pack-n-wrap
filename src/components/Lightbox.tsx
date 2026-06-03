import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle, Gift, CheckCircle } from "lucide-react";
import { Hamper } from "../data/hampers";

interface LightboxProps {
  isOpen: boolean;
  hamper: Hamper | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ isOpen, hamper, onClose, onPrev, onNext }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      // Prevent body scrolling when dialog is open
      document.body.style.overflow = "hidden";
      dialog.showModal();
    } else {
      document.body.style.overflow = "";
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, hamper]);

  // Handle keyboard events (Escape is native to dialog, but Arrow keys need custom hook)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onPrev, onNext]);

  if (!hamper) return null;

  // Custom light-dismiss click on backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Check if the click happened directly on the dialog wrapper (which represents the backdrop)
    if (e.target === dialog) {
      onClose();
      return;
    }

    // Coordinates fallback check from web guidance guide
    const rect = dialog.getBoundingClientRect();
    const isClickInside =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isClickInside) {
      onClose();
    }
  };

  // WhatsApp Link generator with custom product message
  const getWhatsAppLink = (title: string) => {
    const baseUrl = "https://wa.me/919999999999";
    const text = `Hi Pack & Wrap! I saw your creations online and I'm interested in personalizing a hamper styled like "${title}". Could you share details regarding budget and customizations?`;
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="fixed inset-0 m-auto max-w-5xl w-[90%] md:w-[85%] max-h-[90vh] md:max-h-[85vh] rounded-2xl overflow-hidden border border-primary/10 shadow-2xl bg-white focus:outline-none p-0 backdrop:bg-charcoal/80 backdrop:backdrop-blur-sm transition-all duration-300 scale-95 open:scale-100 opacity-0 open:opacity-100"
    >
      <div className="relative flex flex-col md:flex-row h-full min-h-[450px] md:h-[65vh] overflow-y-auto md:overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-charcoal hover:text-primary shadow-md hover:shadow-lg transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute top-1/2 left-4 z-30 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-charcoal hover:text-primary shadow-md hover:shadow-lg transition-all duration-200 hidden md:block"
          aria-label="Previous hamper"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          className="absolute top-1/2 right-4 z-30 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-charcoal hover:text-primary shadow-md hover:shadow-lg transition-all duration-200 hidden md:block"
          aria-label="Next hamper"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image */}
        <div className="relative w-full md:w-[55%] h-[300px] md:h-full bg-secondary/30 flex items-center justify-center overflow-hidden">
          <img
            src={hamper.image}
            alt={hamper.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle logo representation */}
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-[9px] tracking-widest text-white uppercase font-sans font-medium">
            Pack & Wrap Design
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-[45%] h-full p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-secondary/15">
          <div>
            {/* Occasion / Tags */}
            <div className="flex flex-wrap gap-2 items-center mb-4">
              <span className="text-[10px] uppercase tracking-wider font-semibold font-sans text-accent px-2 py-0.5 rounded-md bg-accent/10">
                {hamper.category.replace("-", " ")}
              </span>
              {hamper.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] uppercase tracking-wider font-sans text-primary font-medium px-2 py-0.5 rounded-md border border-primary/20 bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif font-bold text-charcoal leading-snug mb-3">
              {hamper.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted font-sans font-light leading-relaxed mb-6">
              {hamper.description}
            </p>

            {/* Curation Items List */}
            <div className="border-t border-primary/10 pt-5">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal mb-4 flex items-center gap-1.5 font-sans">
                <Gift className="w-4 h-4 text-primary" />
                <span>What's Inside This Curation</span>
              </h4>
              <ul className="space-y-2.5">
                {hamper.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/80 font-sans font-light">
                    <CheckCircle className="w-3.5 h-3.5 text-primary-light mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA Box */}
          <div className="mt-8 border-t border-primary/10 pt-5 flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs text-muted font-sans">
              <span>Delivery across Mumbai & outskirts</span>
              <span className="font-semibold text-primary">₹1,000 - ₹5,000+</span>
            </div>
            <a
              href={getWhatsAppLink(hamper.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans text-xs tracking-wider uppercase font-semibold py-4.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire & Customize on WhatsApp</span>
            </a>
            <p className="text-[10px] text-center text-muted font-sans italic">
              Tap above to discuss colors, pricing, and custom greeting cards.
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
