import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "The hamper exceeded all expectations. Every detail was thoughtfully designed. The personalized photo print was a beautiful touch that made the gift feel incredibly special.",
      author: "Pooja Mehta",
      role: "Anniversary Gift Client",
      stars: 5,
    },
    {
      text: "Beautiful presentation and excellent service. Highly recommended for corporate and wedding gifting. The wood box itself is a keepsake that our clients kept!",
      author: "Rohan Malhotra",
      role: "Corporate Client",
      stars: 5,
    },
    {
      text: "Perfect gift for our anniversary celebration. The custom wine glasses and crimson velvet chest were outstanding. It felt like a true premium D2C experience.",
      author: "Sneha & Kabir",
      role: "Anniversary Hampers",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mt-3 text-charcoal">
            Gifts that made an impression!{" "}
          </h2>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative bg-white p-8 rounded-2xl border border-primary/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute top-6 right-6 text-secondary-dark/30">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-charcoal/90 font-sans font-light italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Signature */}
              <div className="border-t border-secondary py-3 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal">
                    {rev.author}
                  </h4>
                  <p className="text-[10px] tracking-wider text-muted font-sans uppercase mt-0.5">
                    {rev.role}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] text-primary font-bold">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
