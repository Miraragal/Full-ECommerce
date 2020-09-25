import Axios from 'axios';
import Cookie from 'js-cookie';
import {USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,USER_SIGNIN_FAILED,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAILED,USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILED, USER_LOGOUT}from '../constants/userConstants';

const signin=(email, password)=> async (dispatch)=>{
    dispatch ({type: USER_SIGNIN_REQUEST, payload: {email, password}})
    try {
        console.log(email, password)
        const {data} = await Axios.post("/api/users/signin", {email, password}) // trasladamos data from the server
        console.log(data)
        dispatch ({type: USER_SIGNIN_SUCCESS, payload:data})  // seguna action que dispatch, tras realizar la action Request cogemos la info del servidor y en esta action con payload la dispatchamos
        Cookie.set('userInfo', JSON.stringify(data))
    }
    catch (error) {
        dispatch({type: USER_SIGNIN_FAILED,payload: error.message})
    }
}

const register=(name, email, password)=> async (dispatch)=>{
    dispatch ({type: USER_REGISTER_REQUEST, payload: {name, email, password}})
    try {
        const {data} = await Axios.post("/api/users/register", {name, email, password}) // trasladamos data from the server
        dispatch ({type: USER_REGISTER_SUCCESS, payload:data})  // seguna action que dispatch, tras realizar la action Request cogemos la info del servidor y en esta action con payload la dispatchamos
        Cookie.set('userInfo', JSON.stringify(data))
    }
    catch (error) {
        dispatch({type: USER_REGISTER_FAILED,payload: error.message})
    }
}

const update=({userId, name, email, password})=> async (dispatch, getState)=>{
    const {userSignin:{userInfo}}=getState()
    dispatch ({type: USER_UPDATE_REQUEST, payload: {userId, name, email, password}})
    try {
        const {data} = await Axios.post("/api/users/" + userId, {name, email, password},{
            headers:{
                Authorization: 'Bearer' + userInfo.token
            }
        }) 
        dispatch ({type: USER_UPDATE_SUCCESS, payload:data})  
        Cookie.set('userInfo', JSON.stringify(data))
    }
    catch (error) {
        dispatch({type: USER_UPDATE_FAILED,payload: error.message})
    }
}

const logout=()=> async (dispatch)=>{
        Cookie.remove('userInfo')
        dispatch ({type: USER_LOGOUT})  
}


export {signin, register, update, logout};