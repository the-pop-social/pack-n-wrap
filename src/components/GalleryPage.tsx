import Showcase from "./Showcase";

interface GalleryPageProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function GalleryPage({ selectedCategory, setSelectedCategory }: GalleryPageProps) {
  return (
    <div className="pt-28 bg-white">
      {/* Page Header */}
      <section className="bg-secondary/25 py-16 text-center border-b border-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold font-sans">
            Creations Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-3 mb-6">
            Our Custom Hampers Gallery
          </h1>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
          <p className="text-sm md:text-base text-muted font-sans font-light leading-relaxed max-w-xl mx-auto">
            Explore our curated selection of 26 premium hand-wrapped creations. Filter by occasion to view details, contents, and message us directly on WhatsApp to order.
          </p>
        </div>
      </section>

      {/* Full Gallery with Filters */}
      <Showcase
        previewMode={false}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}
