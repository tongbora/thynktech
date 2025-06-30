import { ProductType } from "@/types/productType";

export async function fetchData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const response = await fetch(`${baseUrl}products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for further handling
  }
}
export async function fetchDataById(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const response = await fetch(`${baseUrl}products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const product: ProductType = data.product;
    return product;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for further handling
  }
}

export async function fetchDataByCategory(type: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const response = await fetch(`${baseUrl}products/category?type=${type}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for further handling
  }
}
