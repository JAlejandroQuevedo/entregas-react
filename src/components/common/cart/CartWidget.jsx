import { BiCart } from "react-icons/bi";

export const CartWidget = () => {
  return (
    <div>
        <div className={`cart-body`}>
          <BiCart className={`cart-body__biCart`}/>
          <h2>0</h2>
        </div>
    </div>
  )
}
