import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILED  }from '../constants/productConstants';
import axios from "axios";

const listProducts = () => async (dispatch) =>{
    try {
        
        dispatch({type: PRODUCT_LIST_REQUEST}) // action que dispatch
        const {data} = await axios.get("/api/products") // trasladamos data from the server
    
        dispatch ({type: PRODUCT_LIST_SUCCESS, payload:data})  // seguna action que dispatch, tras realizar la action Request cogemos la info del servidor y en esta action con payload la dispatchamos
    }
    catch (error) {
        dispatch({type: PRODUCT_LIST_FAILED,payload: error.message})
    }
}


const detailsProduct =(productId) => async (dispatch)=>{
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload:productId })
        const {data}= await axios.get("/api/products/"+ productId)
        
        dispatch({type: PRODUCT_DETAILS_SUCCESS,payload: data})

    }
    catch(error){
        dispatch({type: PRODUCT_DETAILS_FAILED, payload: error.message})
    }
}
export {listProducts, detailsProduct};