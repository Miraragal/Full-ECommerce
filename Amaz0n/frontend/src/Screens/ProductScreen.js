import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions.js";

function ProductScreen(props) {

  //we define a hook for wraping a qty insert by the user with default value 1
  const [qty, setQty]= useState(1)
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id)); // we need to match the props with el id de cada producto
    return () => {
      //
    };
  }, []); // empty array significa que la action renderizara despues de componentDiMount

  //we dont need it anymore-redux
  // console.log(props.match.params.id);
  // const product = data.products.find((x) => x._id === props.match.params.id)

  // we this function we redirect userts 
  //history.push is a method to redirect to a different URL with the product id y qty pasado a num con la seleccion del user
  const handleAddToCart= () => {
    props.history.push("/cart/" + props.match.params.id + "?qty="+ qty )
  }

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="details-info">
            <img src="../images/patagonia-logo.png" alt="logo" id="logo" />
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.numReviews} reviews)
              </li>
              <li>
                <b>${product.price}</b>
              </li>
              <li>
                Description:
                <div> {product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: $ {product.price} </li>
              <li>Status:  {product.countInStock >0 ? "In stock" : "Out of stock" }</li>
              <li> 
                {/* with this comand or eventhandler when users select a quantity, this value will be put in the qty variable */}
                Qty:<select value={qty} onChange ={(e) => {setQty(e.target.value)}}> 
                {/* creamos un spread array donde para cada key countInStock en el object product, para cada option me da un nuevo array 
                donde me devuelve el index+1 (no queremos 0) */}
                {[...Array(product.countInStock).keys()].map(x=>
                  <option key={x+1} value={x+1}>
                    {x+1}
                  </option>)}
                </select>
              </li>

              <li>
                {product.countInStock >0 && <button onClick={handleAddToCart}className="button"> Add to cart</button>}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
