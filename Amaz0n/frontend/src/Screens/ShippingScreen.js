import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartAction.js";
import CheckoutSteps from "../StepsComponents/CheckoutSteps.js";


function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  
  const dispatch = useDispatch();
  
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({address, city, country, zip}));
    props.history.push('payment')
  };

  //we create a SHIPPING FORM
  return (
    <div>
      <CheckoutSteps  step1 step2></CheckoutSteps>
      <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Shipping</h2>
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="zip">Post Code</label>
            <input
              type="text"
              name="zip"
              id="zip"
              onChange={(e) => setZip(e.target.value)}
            ></input>
          </li>
            <button type="submit" className="button">
              Continue
            </button>
        </ul>
      </form>
    </div>
    </div>
   
  );
}

export default ShippingScreen;
