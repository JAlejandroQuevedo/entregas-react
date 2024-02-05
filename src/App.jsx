import ProductCardContainer from "./common/productCard/productCardContainer";
import NavBarContainer from "./layout/navBar/NavBarContainer";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBarContainer />
      <ItemListContainer />
      <ProductCardContainer />
    </>
  );
}

export default App;
