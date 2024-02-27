import { CartWidget } from "../common/cart/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <h4>Tienda App</h4>
      <div>
        <Link to="/">
          <button>Inicio</button>
        </Link>
        <Link to="/category/calzados">
          <button>Calzados</button>
        </Link>
        <Link to="/category/ropa">
          <button>Ropa</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
