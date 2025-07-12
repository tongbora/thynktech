import { fetchData } from "@/services/FetchData";
import React from "react";
import { columns } from "./columns";
import { ProductType } from "@/types/productType";
import { DataTable } from "./DataTable";


export default async function page() {
  const products: ProductType[] = await fetchData();
  return (
    <div className="mx-w-[800px]">
      <DataTable columns={columns} data={products} />
    </div>
  );
}


