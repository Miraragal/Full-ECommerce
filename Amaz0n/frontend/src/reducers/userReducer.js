
import {USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,USER_SIGNIN_FAILED,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAILED}from '../constants/userConstants';


function userSigninReducer (state= {}, action){ // the default function is gonna be the product  with an empty object

    switch(action.type){
        case USER_SIGNIN_REQUEST: // We send the request to the server to get the list of product
            return {loading:true}
       
            case USER_SIGNIN_SUCCESS: // we get the data from the server and the data is gonna be prdoucts = action.payload
            return {loading: false, userInfo: action.payload}
       
            case USER_SIGNIN_FAILED: // In case we have an error
            return {loading:false, error: action.payload}
       
            default:  // In the default case we return the  current state with no changes
            return state 
    }
} 

function userRegisterReducer(state = {}, action) {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAILED:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

export {userSigninReducer, userRegisterReducer};