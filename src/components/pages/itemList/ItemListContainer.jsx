import { useEffect, useState } from "react";

import { getProducts } from "../../../asyncMock";
import { ItemList } from "../../common/item/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter((product) => product.category === category);
        setProducts(productsFilter);
      } else {
        setProducts(resp);
      }

      setIsLoading(false);
    });
  }, [category]);

  return <>
  <div className={`body-cards`}>{isLoading ? <h2>Cargando...</h2> : <ItemList products={products} />}</div>
  </>;
};
