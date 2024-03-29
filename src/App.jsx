import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer } from "./components/pages"
import { NavBar } from "./components/layout/NavBar"
import {CartWidget} from "./components/common"
import Cart from "./components/common/cart/Cart"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"  element={ <ItemListContainer/> }/>
          <Route path="/category/:category"  element={ <ItemListContainer/> }/>
          <Route path="/cart"  element={ <Cart/> }/>
          <Route path="/item/:id"  element={ <ItemDetailContainer /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App