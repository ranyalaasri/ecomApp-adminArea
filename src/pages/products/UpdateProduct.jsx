import React from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  return <div>UpdateProduct {id}</div>;
};

export default UpdateProduct;
