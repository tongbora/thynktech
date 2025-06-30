"use client";
import React, { use } from "react";
import Image from "next/image";
import { ProductType } from "@/types/productType";
import { Skeleton } from "@/components/ui/skeleton";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";

export default function ProductCard({
  product,
}: {
  product: Promise<ProductType[]>;
}) {
  const productList = use(product);
  if (!productList || productList.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-[350px] w-full rounded-xl bg-gray-300 dark:bg-gray-700"
          />
        ))}
      </div>
    );
  }
  return (
    <>
      {productList.map((product: ProductType) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div className="max-w-md mx-auto rounded-md bg-gray-100 dark:bg-neutral-900 overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-95">
            <div className="relative">
              {/* <Skeleton className="h-[400px]  w-full bg-gray-300 dark:bg-gray-700" /> */}
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={450}
                  className="rounded-xl"
                  unoptimized
                />
              )}
              {!product.image && (
                <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-400 dark:bg-gray-800" />
              )}
              <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 m-2 rounded-full text-sm font-medium">
                SALE
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">${product.price}</span>
                <button className="relative inline-block text-md text-gray-50 rounded-full px-5 py-2.5 font-bold shadow-sm transition-colors bg-gradient-to-r from-blue-500 to-purple-500">
                  Buy Now
                  <BorderBeam duration={6} size={30} />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
