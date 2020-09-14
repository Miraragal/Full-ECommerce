import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {productListReducer} from './reducers/productReducers.js';
import thunk from 'redux-thunk';


const initialState={}

// reducer es una function dado un state y una action retorna una nueva action basada en ese state
const reducer = combineReducers ({  
    productList: productListReducer
})

// inside the createStore method we need 3 parameters: reducer, initialState, middleware
//thunk is a middleware for redux and it allows us to run async actions inside action in the redux
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store= createStore (reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;