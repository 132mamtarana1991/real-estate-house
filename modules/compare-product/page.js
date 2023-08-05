import React from "react";
import { useSelector } from "react-redux";
export default function Page() {
  const { compareProducts } = useSelector((state) => state.productData)
  console.log(compareProducts,'compareProducts')
  return (
  <>
  asas
  </>
  );
}
