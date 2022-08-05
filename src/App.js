import React, { Fragment, useState} from "react";
import ProductForm from './components/ProductForm';
import ProductList from "./components/ProductList";
import Header from "./components/Headers/Header";
import Cart from "./components/Cart/Cart";

const App = () => {

    const[productList, setProductList] = useState([]);

    const onAddProduct = (pName, priceT, quant) => {
        setProductList((prevProductList) => {
            return [...prevProductList,
                 {
                     name:pName,
                     price: priceT,
                    quantity: quant,
                    totalPrice: priceT,
                    id: Math.random().toString()}]

        })
    }

    return(
       <Fragment>
       <Header/>
       <Cart/>
      <ProductForm onAddProduct={onAddProduct}/>
      <ProductList users={productList}/>
       </Fragment>
    )
}

export default App;