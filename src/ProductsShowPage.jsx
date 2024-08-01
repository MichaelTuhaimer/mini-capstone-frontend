import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { ProductsShow } from "./ProductsShow";

export function ProductsShowPage() {
  const product = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (id, params) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then(() => {
      navigate("/products");
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/products/${id}.json`).then(() => {
      navigate("/products");
    });
  };

  return (
    <div>
      <ProductsShow product={product} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
