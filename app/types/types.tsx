import React from "react";

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
  quantity: [{ sm: number }, { md: number }, { lg: number }, { xl: number }];
  slug: string;
  brand: string;
  trending: boolean;
  readonly _id: string;
  sold: number;
  totalRating: number;
  rating: number[];
}

export interface FormDataTypes {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export interface CartProductsType {
  count: number;
  size: string;
  _id: string;
  productId: string;
  title: string;
  price: number;
  image: { public_id: string; url: string };
}

export interface CartType {
  cartTotal: number;
  cartCount: number;
  orderBy: string;
  discount: number | undefined;
  _id: string;
  products: {
    count: number;
    image: { public_id: string; url: string };
    price: number;
    productId: string;
    size: string;
    title: string;
    _id: string;
  }[];
}

export interface AttributeType {
  name: string;
  values: any;
}

export interface CheckBoxProps {
  id: string;
  name: string;
  checked: boolean;
  value: string;
  label: string;
  onChange: React.ChangeEventHandler;
}

export type DropDownItemsType = [
  {
    sm?: number;
  },
  {
    md?: number;
  },
  {
    lg?: number;
  },
  {
    xl?: number;
  }
];

export interface UserDataTypes {
  addresses: {}[];
  cart: string;
  createdAt: Date;
  email: string;
  name: string;
  orders: string[];
  password: string;
  refreshToken: string;
  role: string;
  updatedAt: Date;
  wishlist: [];
  __v: number;
  _id: string;
}
