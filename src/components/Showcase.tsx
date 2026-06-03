import { useState, useEffect, useRef } from "react";
import { Search, Eye } from "lucide-react";
import { hampers, categories } from "../data/hampers";
import Lightbox from "./Lightbox";

interface ShowcaseProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  previewMode?: boolean;
  onViewAll?: () => void;
}

export default function Showcase({
  selectedCategory,
  setSelectedCategory,
  previewMode = false,
  onViewAll,
}: ShowcaseProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoScrollId = useRef<number | null>(null);

  // Filter hampers based on active filter
  const filteredHampers =
    selectedCategory === "all"
      ? hampers
      : hampers.filter((h) => h.category === selectedCategory);

  // In preview mode on the homepage, show exactly 6 items without filters
  const displayHampers = previewMode ? hampers.slice(0, 6) : filteredHampers;

  useEffect(() => {
    if (previewMode) {
      return;
    }

    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const card = carousel.querySelector<HTMLElement>("[data-carousel-card]");
      if (!card) {
        return;
      }

      const gapValue = Number.parseFloat(getComputedStyle(carousel).gap || "0");
      const step = card.offsetWidth + gapValue;

      if (
        carousel.scrollLeft + carousel.clientWidth + 1 >=
        carousel.scrollWidth
      ) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      carousel.scrollBy({ left: step, behavior: "smooth" });
    }, 2500);

    autoScrollId.current = intervalId;

    return () => {
      window.clearInterval(intervalId);
      autoScrollId.current = null;
    };
  }, [previewMode, displayHampers.length]);

  const stopAutoScroll = () => {
    if (autoScrollId.current !== null) {
      window.clearInterval(autoScrollId.current);
      autoScrollId.current = null;
    }
  };

  const snapCarouselToNearest = () => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const card = carousel.querySelector<HTMLElement>("[data-carousel-card]");
    if (!card) {
      return;
    }

    const gapValue = Number.parseFloat(getComputedStyle(carousel).gap || "0");
    const step = card.offsetWidth + gapValue;
    const target = Math.round(carousel.scrollLeft / step) * step;
    carousel.scrollTo({ left: target, behavior: "auto" });
  };

  const openLightbox = (hamperId: string) => {
    stopAutoScroll();
    snapCarouselToNearest();
    const idx = hampers.findIndex((h) => h.id === hamperId);
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(hampers.length - 1); // Wrap around
    }
  };

  const handleNext = () => {
    if (currentIndex < hampers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Wrap around
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const card = carousel.querySelector<HTMLElement>("[data-carousel-card]");
    if (!card) {
      return;
    }

    const gapValue = Number.parseFloat(getComputedStyle(carousel).gap || "0");
    const step = card.offsetWidth + gapValue;
    const delta = direction === "left" ? -step : step;
    carousel.scrollBy({ left: delta, behavior: "smooth" });
  };

  const currentHamper = currentIndex !== -1 ? hampers[currentIndex] : null;

  return (
    <section id="collection" className="section-padding bg-white">
      <div className="max-w-[90rem] mx-auto px-2 md:px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-h2 mt-3 text-charcoal">
            {previewMode ? "Featured Hampers" : "Best Sellers"}
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
          <p className="text-sm md:text-base text-muted font-sans font-light mt-4 leading-relaxed">
            {previewMode
              ? "A preview of our signature customized gift baskets, wedding invite platters, and anniversary chests. Click any to view detailed contents."
              : "Tried, tested, and totally gift-worthy!"}
          </p>
        </div>

        {/* Categories / Filter Bar - Hidden in Preview Mode */}
        {!previewMode && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-primary/10 pb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold border transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-primary border-primary text-white shadow-md"
                  : "bg-transparent border-primary/20 text-charcoal hover:border-primary/50 hover:bg-secondary/40"
              }`}
            >
              Personalized
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold border transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-primary border-primary text-white shadow-md"
                    : "bg-transparent border-primary/20 text-charcoal hover:border-primary/50 hover:bg-secondary/40"
                }`}
              >
                {cat.name.replace(" Hampers", "")}
              </button>
            ))}
          </div>
        )}

        {!previewMode ? (
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="grid w-full grid-flow-col auto-cols-[calc((100%-4.5rem-1px)/4)] gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
              aria-label="Best sellers carousel"
            >
              {displayHampers.map((hamper) => (
                <div
                  key={hamper.id}
                  data-carousel-card
                  onClick={() => openLightbox(hamper.id)}
                  className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-primary/10 bg-secondary/10 group cursor-pointer transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={hamper.image}
                      alt={hamper.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-primary flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-white border-t border-primary/5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-accent font-sans">
                        {hamper.category.replace("-", " ")}
                      </span>
                      <span className="text-[10px] text-primary font-serif italic">
                        Bespoke
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-semibold text-charcoal leading-snug line-clamp-1 group-hover:text-primary transition-colors duration-300">
                      {hamper.title}
                    </h3>
                    <p className="text-xs text-muted font-sans font-light mt-1.5 line-clamp-2 leading-relaxed">
                      {hamper.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {hamper.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] uppercase tracking-wider font-sans text-muted px-1.5 py-0.5 rounded bg-secondary/50 border border-primary/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white shadow-md border border-primary/10 text-charcoal hover:text-primary transition-colors"
              aria-label="Scroll left"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white shadow-md border border-primary/10 text-charcoal hover:text-primary transition-colors"
              aria-label="Scroll right"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayHampers.map((hamper) => (
              <div
                key={hamper.id}
                onClick={() => openLightbox(hamper.id)}
                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-primary/10 bg-secondary/10 group cursor-pointer transition-all duration-300 flex flex-col h-[420px]"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={hamper.image}
                    alt={hamper.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-primary flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white border-t border-primary/5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-accent font-sans">
                      {hamper.category.replace("-", " ")}
                    </span>
                    <span className="text-[10px] text-primary font-serif italic">
                      Bespoke
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-charcoal leading-snug line-clamp-1 group-hover:text-primary transition-colors duration-300">
                    {hamper.title}
                  </h3>
                  <p className="text-xs text-muted font-sans font-light mt-1.5 line-clamp-2 leading-relaxed">
                    {hamper.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {hamper.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] uppercase tracking-wider font-sans text-muted px-1.5 py-0.5 rounded bg-secondary/50 border border-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {displayHampers.length === 0 && (
          <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-primary/5">
            <Search className="w-10 h-10 text-primary/40 mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-charcoal">
              No hampers found
            </h3>
            <p className="text-sm text-muted font-sans font-light mt-2">
              Select another occasion or contact us directly to customize
              something completely new!
            </p>
          </div>
        )}

        {/* View All Button on Homepage Preview */}
        {previewMode && displayHampers.length > 0 && (
          <div className="text-center mt-16">
            <button
              onClick={onViewAll}
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center"
            >
              <span>View Full Creations Gallery</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal Dialog */}
      <Lightbox
        isOpen={lightboxOpen}
        hamper={currentHamper}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
