import React from "react";

const ProductCard = ({ nombreProducto, descripcion, precio }) => {
  return (
    <div>
      <h2>{nombreProducto}</h2>
      <p>{descripcion}</p>
      <p>{precio}</p>
    </div>
  );
};

export default ProductCard;
