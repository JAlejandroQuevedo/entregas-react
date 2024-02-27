import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className={`card-container`}>
      <div className={`card-container__imgTitle`}>
        <h5>{name}</h5>
        <img src={img} alt="" />
      </div>
      <div className={`cart-container__txtButton`}>
        <p> {description} </p>
        <Link to={`/item/${id}`}>
          <button>Detalles</button>
        </Link>
      </div>
    </div>
  );
};
