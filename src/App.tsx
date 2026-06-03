import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import InstagramGrid from "./components/InstagramGrid";
import WhatsAppCTA from "./components/WhatsAppCTA";
import BulkOrder from "./components/BulkOrder";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import OccasionsPage from "./components/OccasionsPage";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSection, setActiveSection] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");

  const sections = [
    "home",
    "occasions",
    "collection",
    "why-us",
    "how-it-works",
    "testimonials",
    "faq",
  ];

  // Scroll spy to sync active header section
  useEffect(() => {
    if (currentPage !== "home") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Header offset adjustment

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const navigateTo = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    if (page === "home" && sectionId) {
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    navigateTo("home", "collection");
  };

  const handleNavigateToGallery = (categoryId: string) => {
    setSelectedCategory(categoryId);
    navigateTo("gallery");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={(id) => navigateTo("home", id)}
        onPageChange={navigateTo}
      />

      <main className="flex-grow">
        {currentPage === "home" ? (
          <>
            <div id="home">
              <Hero onNavigate={scrollToSection} />
            </div>
            <div id="occasions">
              <Categories onSelectCategory={handleSelectCategory} />
            </div>
            <WhatsAppCTA />
            <div id="collection">
              <Showcase
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            <div id="testimonials">
              <Testimonials />
            </div>
            <InstagramGrid />
          </>
        ) : currentPage === "occasions" ? (
          <OccasionsPage onNavigateToGallery={handleNavigateToGallery} />
        ) : currentPage === "gallery" ? (
          <GalleryPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ) : currentPage === "contact" ? (
          <ContactPage />
        ) : currentPage === "bulk" ? (
          <BulkOrder />
        ) : (
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold capitalize">
              {currentPage} Page
            </h2>
            <p className="mt-4">Content coming soon...</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(id) => navigateTo("home", id)} />
    </div>
  );
}
