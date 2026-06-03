import { Instagram, ExternalLink } from "lucide-react";

export default function InstagramGrid() {
  // Selection of 6 premium images for the Instagram mock feed
  const instaImages = [
    { src: "./images/pack_and_wrap__1723290248_3431529775490620690_64642012236.webp", alt: "Velvet Anniversary Chest" },
    { src: "./images/pack_and_wrap__1732364929_3507653719960014714_64642012236_2.jpg", alt: "Luxury Invitation Suite" },
    { src: "./images/pack_and_wrap__1738241529_3556950208372439707_64642012236_1.jpg", alt: "Festival Joy Hamper" },
    { src: "./images/pack_and_wrap__1740300047_3574218315872778839_64642012236_2.jpg", alt: "Mrs-to-Be Bridal Box" },
    { src: "./images/pack_and_wrap__1751264330_3666193388640327007_64642012236_2.jpg", alt: "Couples Scent & Glassware" },
    { src: "./images/pack_and_wrap__1777113145_3883028941842277892_64642012236_1.jpg", alt: "Traditional Brass Platter" },
  ];

  return (
    <section id="instagram" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Instagram className="w-8 h-8 text-accent mx-auto mb-3" />
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold font-sans">
            Follow Our Story
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 text-charcoal">
            Pack & Wrap on Instagram
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
          <p className="text-sm md:text-base text-muted font-sans font-light mt-4 leading-relaxed">
            See our daily curations, backstage wrapping sessions, and the latest hamper styles directly on our feed.
          </p>
        </div>

        {/* Instagram Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaImages.map((img, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/pack_and_wrap_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-primary/5 cursor-pointer block zoom-hover-container"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover zoom-hover-img"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-1.5 text-white">
                  <Instagram className="w-6 h-6 stroke-[1.5]" />
                  <span className="text-[9px] uppercase tracking-widest font-semibold font-sans">
                    View Post
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* See More CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/pack_and_wrap_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center p-5 gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-sans text-xs tracking-wider uppercase font-semibold px-8 py-4.5 rounded-full transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>See More On Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
