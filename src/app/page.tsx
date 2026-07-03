import { Container } from "@/components/ui/Container";
import { CategoryGrid } from "@/components/features/CategoryGrid";
import { ProductCard } from "@/components/features/ProductCard";
import { CATEGORIES, MOCK_PRODUCTS } from "@/mocks/data";

export default function Home() {
  return (
    <div className="pb-20">
      <Container>
        {/* Categories Section */}
        <section className="mt-4 md:mt-8">
          <CategoryGrid categories={CATEGORIES} />
        </section>

        {/* Hero / Recommendation Title */}
        <section className="mt-8 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-apple-text tracking-tight">
            Рекомендации для вас
          </h2>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </Container>
    </div>
  );
}
