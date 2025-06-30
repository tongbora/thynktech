
export type ProductType = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
};

export type TParams =Promise<{ slug: string}>;

export type Params = {
  params: {
    id: string;
  };
};

export type CategoryParams = {
  params: {
    category: string;
  };
};
