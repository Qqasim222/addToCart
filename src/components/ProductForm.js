import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./ProductForm.module.css";

const ProductForm = (props) => {
  const [enteredPName, setEnteredPName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const inputNameHandler = (event) => {
    setEnteredPName(event.target.value);
  };
  const inputPriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const inputQuantityHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddProduct(enteredPName, enteredPrice, enteredQuantity);
    setEnteredPName("");
    setEnteredPrice("");
    setEnteredQuantity("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <div>
          <label>Pname:</label>
          <input onChange={inputNameHandler} value={enteredPName} />
        </div>
        <br />
        <div>
          <label>Price:</label>
          <input
            onChange={inputPriceHandler}
            value={enteredPrice}
            type="number"
          />
        </div>
        <br />
        <div>
          <label>Quantity:</label>
          <input
            onChange={inputQuantityHandler}
            value={enteredQuantity}
            type="number"
          />
        </div>
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </Card>
  );
};

export default ProductForm;
