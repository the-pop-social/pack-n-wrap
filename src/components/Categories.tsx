import { categories } from "../data/hampers";

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section id="occasions" className="py-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mt-3 text-charcoal">
            Gifts by Category
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
          <p className="text-sm md:text-base text-muted font-sans font-light mt-4 leading-relaxed">
            Celebrate every occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-primary/10 text-left focus:outline-none bg-white flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Contents */}
              <div className="p-6 text-charcoal flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-serif tracking-wide leading-tight">
                  {cat.name}
                </h3>
                <p className="text-xs text-muted font-light mt-2 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
