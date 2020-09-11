import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {addToCart, removeFromCart} from './actions'
import CartIcons from "./CartIcons";

function ProductList() {
  const products = useSelector(st => st.products);
  const dispatch = useDispatch()
  const handleClick = e => {
    e.preventDefault()
    dispatch()
  }

  const productCards = Object.keys(products).map(id => (
    <div className="col-md-3 mb-3" key={id}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">
            <Link to={`/products/${id}`}>{products[id].name}</Link>
          </h2>
          <CartIcons id={id} />
          <button onClick={addToCart(id)}>Add to Cart</button>
          <button  onClick={removeFromCart(id)}>Remove from Cart</button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h4>Look at all of our beautiful products!</h4>
      <div className="row">{productCards}</div>
    </div>
  );
}

export default ProductList;
