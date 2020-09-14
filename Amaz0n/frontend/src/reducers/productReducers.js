import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILED   } from "../constants/productConstants"

function productListReducer (state= {products: []}, action){ // the default function is gonna be the products with an empty array

    switch(action.type){
        case PRODUCT_LIST_REQUEST: // We send the request to the server to get the list of product
            return {loading:true}
       
            case PRODUCT_LIST_SUCCESS: // we get the data from the server and the data is gonna be prdoucts = action.payload
            return {loading: false, products: action.payload}
       
            case PRODUCT_LIST_FAILED: // In case we have an error
            return {loading:false, error: action.payload}
       
            default:  // In the default case we return the  current state with no changes
            return state 
    }
} 

function productDetailsReducer (state= {product: {}}, action){ // the default function is gonna be the product  with an empty object

    switch(action.type){
        case PRODUCT_DETAILS_REQUEST: // We send the request to the server to get the list of product
            return {loading:true}
       
            case PRODUCT_DETAILS_SUCCESS: // we get the data from the server and the data is gonna be prdoucts = action.payload
            return {loading: false, product: action.payload}
       
            case PRODUCT_DETAILS_FAILED: // In case we have an error
            return {loading:false, error: action.payload}
       
            default:  // In the default case we return the  current state with no changes
            return state 
    }
} 

export {productListReducer, productDetailsReducer}