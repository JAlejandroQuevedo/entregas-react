import { ItemCount } from "./ItemCount";


export const ItemDetail = ({ description, img, price, stock, name }) => {
  return (
    <div className={`detail-list-container`}>
      <div className={`detail-list-container__imgTitle`}>
        <img src={img} alt="" />
      </div>
      <div className="detail-list-container__containerText">
        <div className={`detail-list-container__txt`}>
          <h2>{name}</h2>
          <p> {description} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock}/>
        </div>
      </div>
    </div>
  );
};
