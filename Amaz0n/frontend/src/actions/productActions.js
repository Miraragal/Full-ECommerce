import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILED, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAILED  }from '../constants/productConstants';
import Axios from "axios";

const listProducts = () => async (dispatch) =>{
    try {
        
        dispatch({type: PRODUCT_LIST_REQUEST}) // action que dispatch
        const {data} = await Axios.get("/api/products") // trasladamos data from the server
    
        dispatch ({type: PRODUCT_LIST_SUCCESS, payload:data})  // seguna action que dispatch, tras realizar la action Request cogemos la info del servidor y en esta action con payload la dispatchamos
    }
    catch (error) {
        dispatch({type: PRODUCT_LIST_FAILED,payload: error.message})
    }
}


const detailsProduct =(productId) => async (dispatch)=>{
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload:productId })
        const {data}= await Axios.get("/api/products/"+ productId)
        
        dispatch({type: PRODUCT_DETAILS_SUCCESS,payload: data})

    }
    catch(error){
        dispatch({type: PRODUCT_DETAILS_FAILED, payload: error.message})
    }
}


const saveProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
      const {userSignin: { userInfo },} = getState();
      const { data } = await Axios.post('/api/products', product, {
          headers: { // el token viene de getState
            Authorization: 'Bearer ' + userInfo.token,
          },
        });
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_SAVE_FAILED, payload: error.message });
    }
  };

export {listProducts, detailsProduct, saveProduct};