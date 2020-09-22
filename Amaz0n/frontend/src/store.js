import {createStore, combineReducers, applyMiddleware} from 'redux';
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer} from './reducers/productReducers.js';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartReducers'
import Cookie from 'js-cookie';
import { userSigninReducer,  userRegisterReducer } from './reducers/userReducer.js';



// we set access to the cookie and pass its value to the InitialState
const cartItems= Cookie.getJSON("cartItems") || [];
const userInfo=Cookie.getJSON('userInfo') || null;


const initialState={cart:{cartItems}, shippping:{}, payment:{}, userSignin:{userInfo}}

// reducer es una function dado un state y una action retorna una nueva action basada en ese state
const reducer = combineReducers ({  
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer

})

// inside the createStore method we need 3 parameters: reducer, initialState, middleware
//thunk is a middleware for redux and it allows us to run async actions inside action in the redux
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store= createStore (reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;