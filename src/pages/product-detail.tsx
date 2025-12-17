import { Link } from "react-router-dom";
import SiteHeader from "@/components/header/site-header";
import SiteFooter from "@/components/footer/site-footer";
import ProductInfo from "@/components/product/product-info";
import ProductCarousel from "@/components/content/product-carousel";
import ProductDescription from "@/components/product/product-description";
import ProductImageGallery from "@/components/product/product-image-gallery";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-6">
        <section className="w-full px-6">
          {/* Breadcrumb - Show above image on smaller screens */}
          <div className="lg:hidden mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/category/earrings">Earrings</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Pantheon</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <ProductImageGallery />

            <div className="lg:pl-12 mt-8 lg:mt-0 lg:sticky lg:top-6 lg:h-fit">
              <ProductInfo />
              <ProductDescription />
            </div>
          </div>
        </section>

        <section className="w-full mt-16 lg:mt-24">
          <div className="mb-4 px-6">
            <h2 className="text-sm font-light text-foreground">
              You might also like
            </h2>
          </div>
          <ProductCarousel />
        </section>

        <section className="w-full">
          <div className="mb-4 px-6">
            <h2 className="text-sm font-light text-foreground">
              Our other Earrings
            </h2>
          </div>
          <ProductCarousel />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ProductDetail;
