import LargeHero from "@/components/content/large-hero";
import SiteFooter from "@/components/footer/site-footer";
import SiteHeader from "@/components/header/site-header";
import ProductCarousel from "@/components/content/product-carousel";
import EditorialSection from "@/components/content/editorial-section";
import FiftyFiftySection from "@/components/content/fifty-fifty-section";
import OneThirdTwoThirdsSection from "@/components/content/one-third-two-third-section";
import SEO from "@/components/seo";

const Index = () => {
  return (
    <>
      <SEO
        title="Linea Pantheon - Premium Fashion & Lifestyle E-commerce"
        description="Discover our curated collection of premium fashion and lifestyle products. Shop the latest trends with fast shipping, easy returns, and exceptional customer service."
        keywords={[
          "fashion",
          "ecommerce",
          "premium clothing",
          "lifestyle",
          "shopping",
          "online store",
        ]}
        url="/"
      />
      <div className="min-h-screen bg-background">
        <SiteHeader />

        <main className="pt-6">
          <FiftyFiftySection />
          <ProductCarousel />
          <LargeHero />
          <OneThirdTwoThirdsSection />
          <EditorialSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default Index;
