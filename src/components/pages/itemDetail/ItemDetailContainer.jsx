import { useEffect, useState } from "react";
import { ItemDetail } from "../../common/item/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../asyncMock";

export const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    getProduct(id)
      .then(resp => {
        setItem(resp);
        setIsLoading(false);
      });
  }, [])

  return (
    <>
      {isLoading ? <h2>Cargando...</h2> : <ItemDetail {...item} />}
    </>
  )
}
