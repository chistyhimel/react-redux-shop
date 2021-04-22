import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

function ProductListing() {
  const products = useSelector((state) => state.allProducts);
  //   console.log(products.products);
  return (
    <main className="">
      <ProductComponent />
    </main>
  );
}

export default ProductListing;
