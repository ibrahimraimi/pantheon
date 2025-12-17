import { useState } from "react";
import { useParams } from "react-router-dom";

import SiteHeader from "../components/header/site-header";
import SiteFooter from "../components/footer/site-footer";
import ProductGrid from "../components/category/product-grid";
import FilterSortBar from "../components/category/filter-sort-bar";
import CategoryHeader from "../components/category/category-header";

const Category = () => {
  const { category } = useParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-6">
        <CategoryHeader category={category || "All Products"} />

        <FilterSortBar
          filtersOpen={filtersOpen}
          setFiltersOpen={setFiltersOpen}
          itemCount={24}
        />

        <ProductGrid />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Category;
