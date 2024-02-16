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

export interface CartType {
  count: number;
  size: string;
  _id: string;
  productId: string;
  title: string;
  price: number;
  image: any;
}

export interface AttributeType {
  name: string;
  values: any;
}

export interface CheckBoxProps {
  id:string;
  name:string;
  checked:boolean;
  value:string;
  label:string;
  onChange :React.ChangeEventHandler
}

