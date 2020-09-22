import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userAction.js";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect= props.location.search ? props.location.search.split("=")[1]: '/'

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }

    return () => {
      //
    };
  }, [userInfo]); // empty array significa que la action renderizara despues de componentDiMount

  const submitHandler = (e) => {
    console.log("Holaa");
    e.preventDefault();
    dispatch(signin(email, password));
  };

  //we create a Sign In FORM
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Sign-In</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit" className="button">
              Sign in
            </button>
          </li>
          <li>New to Amaz0n?</li>
          <li>
            <Link to={redirect==='/'? 'register': 'register?redirect='+ redirect}
             className="button secondary text-center">
              Create your Amaz0n account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
