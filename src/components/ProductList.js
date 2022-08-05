import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './UI/Card';
import classes from './ProductList.module.css';
import { addToCart } from '../store/cart-slice';

const ProductList = (props) => {

  const dispatch = useDispatch();

  const handleAddToCart = (user) => {
    dispatch(addToCart(user))
  } 

 return (

  <Card className={classes.list}>
   <ul>
   {props.users.map((user) => {
     return(
       <div className={classes.listData}>
       <li><label>Product name</label>: {user.name}</li>
       <li><label>Product price</label>: {user.price}</li>
       <li><label>Product quantity</label>: {user.quantity}</li>
       <br/>
       <button onClick={() => handleAddToCart(user)}>Add to cart</button>
       </div>
     )
   })}
   </ul>

</Card>
  )
}

export default ProductList;