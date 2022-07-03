import React from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  console.log("id is", id);
  return <h1>Product id is {id}</h1>;
};
export default ProductDetail;
