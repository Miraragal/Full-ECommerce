import { CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants"


function cartReducer (state= {cartItems: []}, action){ 

    switch(action.type){
        case CART_ADD_ITEM: 

            const item= action.payload
            const product= state.cartItems.find(x=> x.product === item.product) // It means that the product exits

            if(product){
                return { 
                    cartItems: 
                    state.cartItems.map(x=> x.product === product.product ?  item : x)
                }
                // si el pto existe vemos si cada item/pto esta ya en el cart,  mapeamos para comprobar que coinciden y si es asi (el segundo product es el id del product) 
                //devolvemos el nuevo  valor de qty del product, sino mantenemos x que seria el anterior valor de qty para ese pto 
                // Si inserto en el cart un pto que ya existe en el cart, aplicamos item que seria el nuevo valor de qty del producto 
            } return { cartItems: [...state.cartItems, item]}
            //devovelmos el cartItems actualizado con el previo valor de state pero anadiendo item

            case CART_REMOVE_ITEM: 
                return {
                     cartItems: 
                     state.cartItems.filter(x=> x.product !== action.payload)
                }
       
        default:  // In the default case we return the  current state with no changes
            return state 
    }
}
 
export {cartReducer}