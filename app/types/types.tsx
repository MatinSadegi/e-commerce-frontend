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

export interface FormDataTypes {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export interface AuthState {
  name: string;
  email: string;
  token:string
}
export interface AuthContextType {
  auth: AuthState | undefined;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}
