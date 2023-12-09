export interface ProductPropsType {
  title: string;
  price: number;
  image: { public_id: string; url: string };
  slug: string;
}

export interface ProductType {
  title: string;
  category: string;
  subcategory: string;
  price: number;
  description: string;
  image: { public_id: string; url: string };
  inventory: string;
  quantity: { sm: number; md: number; lg: number; xl: number };
  slug: string;
  brand: string;
  trending: boolean;
  _id: string;
  sold: number;
  totalRating: number;
  rating: number[];
}
