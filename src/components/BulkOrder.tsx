import React, { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import FAQ from "./FAQ";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    occasion: "anniversary",
    budget: "rs-2000-3500",
    date: "",
    requests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Human-readable labels mapping
    const occasionLabels: Record<string, string> = {
      birthday: "Birthday Hamper",
      anniversary: "Anniversary Hamper",
      wedding: "Wedding favor / countdown",
      "bride-to-be": "Bride-to-be box",
      "groom-to-be": "Groom-to-be crate",
      "baby-shower": "Baby shower / Mom-to-be",
      festival: "Festival / Rakhi / Sindhara",
      customized: "Bespoke customized hamper",
    };

    const budgetLabels: Record<string, string> = {
      "rs-1000-2000": "₹1,000 - ₹2,000",
      "rs-2000-3500": "₹2,000 - ₹3,500",
      "rs-3500-5000": "₹3,500 - ₹5,000",
      "rs-5000-plus": "₹5,000+",
    };

    const occasionText = occasionLabels[formData.occasion] || formData.occasion;
    const budgetText = budgetLabels[formData.budget] || formData.budget;

    // Formatting WhatsApp pre-filled template message
    const message = `Hi Pack & Wrap! I would like to create a custom hamper. Here are my requirements:
- Name: ${formData.name}
- Occasion: ${occasionText}
- Budget Range: ${budgetText}
- Estimated Date: ${formData.date || "Not decided"}
- Customizations / Items: ${formData.requests || "None specified"}`;

    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-28 bg-secondary/10">
      {/* Contact Header Banner */}
      <section className="bg-white text-center border-b border-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-3 mb-6">
            Bulk Orders?
          </h1>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
          <p className="text-sm md:text-base text-muted font-sans font-light leading-relaxed max-w-xl mx-auto">
            Got to celebrate on a large scale? Do not worry. We have got you
            sorted.
            <br />
            We accept bulk orders and that too at affordable prices.
            <br />
            So quickly fill in a few details here and we will reach out to
            you!!{" "}
          </p>
        </div>
      </section>

      {/* Main Two Column Contact Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Form and Details */}
          <div className="w-full lg:w-1/2 space-y-12">
            {/* Inquiry Form */}
            <div className="bg-white p-8 rounded-2xl border border-primary/5 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  WhatsApp Inquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-xl border border-primary/10 font-sans text-xs sm:text-sm text-charcoal placeholder-muted/60 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>

                {/* Occasion & Budget Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Occasion */}
                  <div>
                    <label
                      htmlFor="occasion"
                      className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2"
                    >
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-primary/10 font-sans text-xs sm:text-sm text-charcoal bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="birthday">Birthday Hamper</option>
                      <option value="anniversary">Anniversary Hamper</option>
                      <option value="wedding">Wedding Countdown/Favor</option>
                      <option value="bride-to-be">Bride To Be Box</option>
                      <option value="groom-to-be">Groom To Be Crate</option>
                      <option value="baby-shower">
                        Baby Shower / Mom-To-Be
                      </option>
                      <option value="festival">Festival / Rakhi Platter</option>
                      <option value="customized">Bespoke Custom Crate</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2"
                    >
                      Preferred Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-primary/10 font-sans text-xs sm:text-sm text-charcoal bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="rs-1000-2000">₹1,000 - ₹2,000</option>
                      <option value="rs-2000-3500">₹2,000 - ₹3,500</option>
                      <option value="rs-3500-5000">₹3,500 - ₹5,000</option>
                      <option value="rs-5000-plus">₹5,000+</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Date */}
                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2"
                  >
                    Estimated Delivery Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-primary/10 font-sans text-xs sm:text-sm text-charcoal focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>

                {/* Custom Requests */}
                <div>
                  <label
                    htmlFor="requests"
                    className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2"
                  >
                    Special Curation Requests
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={4}
                    value={formData.requests}
                    onChange={handleChange}
                    placeholder="E.g., custom name embossing on wallet, include polaroid photos, rose gold color theme..."
                    className="w-full p-4 rounded-xl border border-primary/10 font-sans text-xs sm:text-sm text-charcoal placeholder-muted/60 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>

                {/* Submit button (52px height) */}
                <button type="submit" className="btn-primary w-full shadow-lg">
                  <Send className="w-4 h-4" />
                  <span>Send Form via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Quick Contact Details */}
            <h1 className="text-center text-xl md:text-2xl font-serif font-semibold text-charcoal">
              In A Hurry ? Contact Us Right Away
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal mb-1">
                    Our Studio
                  </h4>
                  <p className="text-xs text-muted font-sans font-light leading-relaxed">
                    Bespoke Gifting Studio,
                    <br />
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal mb-1">
                    Direct Call
                  </h4>
                  <p className="text-xs text-muted font-sans font-light mt-1">
                    <a
                      href="tel:+919999999999"
                      className="hover:text-primary transition-colors"
                    >
                      +91 99999 99999
                    </a>
                  </p>
                  <p className="text-[10px] text-muted/60 font-sans mt-0.5">
                    Mon-Sat, 10 AM to 8 PM
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal mb-1">
                    Email Us
                  </h4>
                  <p className="text-xs text-muted font-sans font-light mt-1">
                    <a
                      href="mailto:hello@packandwrap.com"
                      className="hover:text-primary transition-colors"
                    >
                      hello@packandwrap.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-accent flex-shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal mb-1">
                    WhatsApp Chat
                  </h4>
                  <p className="text-xs text-muted font-sans font-light mt-1">
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      +91 99999 99999
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Component */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-2 rounded-2xl border border-primary/5 shadow-sm h-full">
              {/* Renders standard FAQ component natively here */}
              <FAQ />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
