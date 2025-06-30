// "use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { fetchData } from "@/services/FetchData";
import ProductCard from "@/components/productCard/ProductCard";
export default function ProductCollection() {
  const products = fetchData();
  return (
    <section>
      <div className="mx-auto flex flex-col max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 justify-center">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            <AuroraText>Product</AuroraText>
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>
        <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard product={products} />
        </div>
      </div>
    </section>
  );
}
