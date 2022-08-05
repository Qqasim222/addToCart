import React from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import { useSelector } from 'react-redux';

const Cart = () => {

    const data = useSelector((state) => {
       return state.cart.cartItems;
    })

    const totalAmounts = useSelector((state) => {
        return state.cart.totalAmount;
    })

    const totalAmount = totalAmounts.toFixed(2);
// console.log(totalAmounts);

    console.log('mydata',data)
  return (
    <Card className={classes.cart}>
    <h3 className={classes.cartHeading}>Cart Data</h3>
        <ul>
            {data.map((item) => {
                return(
                    <div className={classes.cartList}>
                    <li><label>Product name</label> : {item.name}</li>
                    <li><label>Single product price</label> : {item.totalPrice}</li>
                    <li><label>Total quantity</label> : {item.quantity}</li>
                    </div>
                )
            })}

            <div className={classes.gTotal}>
                <h3>Grand total</h3>
                 <p>PKR {totalAmount}</p>

            </div>
        </ul>
    </Card>
  )
}


export default Cart;