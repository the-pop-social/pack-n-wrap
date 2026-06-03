import { MessageCircle, Image, Gift, CheckCircle } from "lucide-react";
import { categories, Category } from "../data/hampers";

interface OccasionsPageProps {
  onNavigateToGallery: (categoryId: string) => void;
}

export default function OccasionsPage({ onNavigateToGallery }: OccasionsPageProps) {
  // Typical lists of items that can go inside each occasion type to make them feel highly authentic
  const occasionDetailsMap: Record<string, string[]> = {
    birthday: [
      "Custom Hand-Tied Chocolate Bouquets",
      "Polaroid Photo Ceramic Mugs & Memory Scrolls",
      "Gourmet Cookies, Snack Mixes, & Wafer Collections",
      "Premium Scented Soy Candles & Scented Wax Melts",
      "LED Fairy Lights & Hand-written Calligraphy Cards"
    ],
    anniversary: [
      "Engraved Couple Champagne Mugs / Flutes Set",
      "Personalized Wooden Couple Photo Frames",
      "Royal Crimson Velvet Trunks with brass lock",
      "Assorted Turkish Delights, Truffles, & Fine Baklava",
      "Fragrant Dried Rose Potpourri & Premium Diffusers"
    ],
    wedding: [
      "Royal Navy & Gold Foiled Wedding Favor Boxes",
      "Polished Brass Diyas / Decorative T-Light Stands",
      "Silver-Foil Glass Jars with Premium Almonds & Cashews",
      "Wedding Countdown Dates Crate Monograms",
      "Traditional Kesar Sweets & Sibling Message Scrolls"
    ],
    "bride-to-be": [
      "Satin 'Bride-to-Be' Robes with gold scripts",
      "Organic Rosewater Mists & Himalayan Bath Salts",
      "Custom Ceramic 'Mrs' Mugs & Champagne flutes",
      "Personalized 'Mrs' Cozy Satin Slippers",
      "Bespoke Embroidered Bridal Veil & White Ribbons"
    ],
    "groom-to-be": [
      "Premium Personalized Engraved Leather Wallets",
      "Bespoke Sandalwood Grooming Oils & Colognes",
      "Custom 'Groom-to-Be' Satin Silk Eye Masks",
      "Leather Belt, Cufflinks, & Pocket Square sets",
      "Matte Black Presentation Boxes with Gold Ribbons"
    ],
    "baby-shower": [
      "Woven Cotton Baskets & Cane Storage Boxes",
      "Organic Cotton Swaddles, Rompers, & Newborn Caps",
      "Handmade Crochet Teddy Bears & Wooden Rattle Toys",
      "Baby's First Memory Keepsake Journal Books",
      "Encouragement Scroll Cards for New Parents"
    ],
    festival: [
      "Handcrafted Embellished Thali Plated Platters",
      "Artisan Zardosi Rakhis & Sindhara Sweets",
      "Hand-rolled Sandalwood Incense & Incense Burners",
      "Terracotta Painted Hand Clay Diyas Set of 4",
      "Gourmet Rose-flavored Jars (Almonds, Pistachios)"
    ],
    customized: [
      "100% Client-tailored Box Contents (Stationery, Skincare, Chocolates)",
      "Premium Upcycled Wood Serving Trays & Pinewood Crates",
      "Personalized Name Engraving on Leather, Glass, or Wood",
      "Natural Soy Wax Candles & Custom Scent Blends",
      "Eco-friendly Bamboo Utensils & Handcrafted Macrame"
    ],
  };

  const getWhatsAppLink = (occasionName: string) => {
    const baseUrl = "https://wa.me/919999999999";
    const text = `Hi Pack & Wrap! I would like to inquire about creating a custom gift hamper for a "${occasionName}". Could you guide me through the customization options and packages?`;
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-secondary/15 pt-28">
      {/* Header Banner */}
      <section className="bg-white py-16 border-b border-primary/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold font-sans">
            Tailored Gifting Themes
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-3 mb-6">
            Bespoke Gifting Occasions
          </h1>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
          <p className="text-sm md:text-base text-muted font-sans font-light leading-relaxed max-w-xl mx-auto">
            From anniversaries to bridal showers, festivals to baby arrivals, we curate distinct styles designed to make each occasion unforgettable.
          </p>
        </div>
      </section>

      {/* Occasions List */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 section-padding space-y-24">
        {categories.map((cat: Category, idx: number) => {
          const isEven = idx % 2 === 0;
          const items = occasionDetailsMap[cat.id] || [];

          return (
            <div
              key={cat.id}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-primary/5 pb-16 last:border-0 last:pb-0 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border border-primary/10 shadow-sm zoom-hover-container">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover zoom-hover-img"
                />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent font-sans">
                    Curation Theme
                  </span>
                  <div className="h-[1px] w-6 bg-accent/30" />
                </div>
                <h2 className="text-2xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
                  {cat.name}
                </h2>
                <p className="text-xs sm:text-sm text-muted font-sans font-light leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Items typically included */}
                <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm mb-8">
                  <h4 className="text-[11px] uppercase tracking-widest font-semibold text-charcoal font-sans mb-3.5 flex items-center gap-1.5">
                    <Gift className="w-4 h-4 text-primary" />
                    <span>Included Curation Assets</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[11px] text-charcoal/80 font-sans font-light leading-snug"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary-light mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons (52px height) */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={getWhatsAppLink(cat.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onNavigateToGallery(cat.id)}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    <Image className="w-4 h-4" />
                    <span>Explore Curation Gallery</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
