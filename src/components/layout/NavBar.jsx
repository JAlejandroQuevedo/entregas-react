import { CartWidget } from "../common/cart/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={`navBar`}>
      <Link to='/'>
        <img src="https://res.cloudinary.com/dge6pbj4l/image/upload/v1709055423/photos%20store/logo/r7ghj4owkuqpr4h8gvvy.jpg"/>
      </Link>
      <div className={`buttons__navBar`}>
        <Link to="/">
          <button>Inicio</button>
        </Link>
        <Link to="/category/calzado">
          <button>Calzados</button>
        </Link>
        <Link to="/category/playeras">
          <button>Playeras</button>
        </Link>
        <Link to="/category/pantalones">
          <button>Pantalones</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
