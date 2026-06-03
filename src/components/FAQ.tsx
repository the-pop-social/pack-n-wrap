import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What occasions do you cater to?",
      a: "We design premium hampers for birthdays, anniversaries, weddings, baby showers, festivals (including Raksha Bandhan, Diwali), bride-to-be, groom-to-be, corporate gestures, and other custom milestone celebrations.",
    },
    {
      q: "Can hampers be customized?",
      a: "Absolutely! Customization is at the core of what we do. You can handpick the color themes, box types (wooden crates, velvet chests, metallic trays), and every single item that goes inside the hamper.",
    },
    {
      q: "Do you offer photo personalization?",
      a: "Yes! We specialize in photo-based gifting. You can share your favorite images, and we will incorporate them into custom Polaroid frames, hanging photo scrolls, or printed mugs as requested.",
    },
    {
      q: "How much do hampers cost?",
      a: "Our custom creations start from ₹1,000 and can go up to ₹5,000+ depending on the complexity of the design, trunk size, and items chosen. We will design and propose styles that fit perfectly within your specified budget.",
    },
    {
      q: "How far in advance should I order?",
      a: "For single custom hampers, we recommend ordering 2 to 4 days in advance. For bulk orders or major events like weddings and corporate gatherings, please reach out at least 2 to 3 weeks prior to ensure material availability.",
    },
    {
      q: "Do you provide delivery?",
      a: "Yes, we offer reliable doorstep delivery services across Mumbai and neighboring suburbs. Platter curations and fragile trunks are handled with extreme care during transport.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-primary/5">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold font-sans">
            Have Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
        </div>

        {/* FAQ Accordion (details name="faq-group") */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              name="faq-group"
              className="group border border-primary/10 rounded-2xl bg-secondary/15 open:bg-secondary/30 transition-all duration-300 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-sm sm:text-base md:text-lg font-bold text-charcoal select-none list-none">
                <span className="pr-4">{faq.q}</span>
                <div className="w-8 h-8 rounded-full border border-primary/15 bg-white flex items-center justify-center flex-shrink-0 group-open:bg-primary group-open:border-primary text-charcoal group-open:text-white transition-all duration-300">
                  <ChevronDown className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted font-sans font-light leading-relaxed border-t border-primary/5 bg-white/70">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
