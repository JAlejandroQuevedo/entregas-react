import { ItemCount } from "./ItemCount";


export const ItemDetail = ({ description, img, price, stock }) => {
  return (
    <div>
      <div>
        <div>
          <h5>{name}</h5>
          <img src={img} alt="" />
          <p> {description} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock} />
        </div>
      </div>
    </div>
  );
};
