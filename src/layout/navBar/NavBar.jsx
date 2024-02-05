import React from "react";
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";

const NavBar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Productos</li>
        </ul>
        <CartWidgetContainer />
      </div>
    </div>
  );
};

export default NavBar;
