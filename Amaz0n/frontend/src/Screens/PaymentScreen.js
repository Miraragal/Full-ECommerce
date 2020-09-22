import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { savePayment } from "../actions/cartAction.js";
import CheckoutSteps from "../StepsComponents/CheckoutSteps.js";


function PaymentScreen(props) {

  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({paymentMethod}));
    props.history.push('placeorder')
  };

  //we create a PAYMENT FORM
  return (
    <div>
      <CheckoutSteps  step1 step2 step3></CheckoutSteps>
      <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Payment</h2>
          </li>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              id="paymentMethod"
              value='paypal'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="address">Paypal</label>
          </div>
          <br/>
            <button type="submit" className="button">
              Continue
            </button>
        </ul>
      </form>
    </div>
    </div>
   
  );
}

export default PaymentScreen;
