import { fetchDataByCategory } from "@/services/FetchData";
import { CategoryParams,Props } from "@/types/productType";
import { AuroraText } from "@/components/magicui/aurora-text";
import ProductCard from "@/components/productCard/ProductCard";
import { Metadata } from "next";


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paramId = await params;
  const product = await fetchDataByCategory(paramId.id);
  return {
    title: `${product.title} | Thynk Tech`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image, // must be absolute or under /public
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function categories({
  params,
}: {
  params: Promise<CategoryParams["params"]>;
}) {
  const category = await params;
  const products = fetchDataByCategory(category.category);
  console.log("Category Products:", products);
  return (
    <section>
      <div className="mx-auto flex flex-col max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 justify-center">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            <AuroraText>
              {" "}
              {category.category.charAt(0).toUpperCase() +
                category.category.slice(1)}
            </AuroraText>
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
