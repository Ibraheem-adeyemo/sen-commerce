import { productType } from "./produc.type";
import { popularProducts } from "../data";

const initialState = {
    popularProducts: popularProducts,
    cartItems: [],
    favouriteItem:[],
    product: null
}

// const indx = state.cartItems.indexOf(action.payload)


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case productType.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }  
        case productType.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            } 
        case productType.ADD_TO_FAVOURITE:
            return {
                ...state,
                favouriteItem: [...state.favouriteItem, action.payload]
            }  
        case productType.REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favouriteItem: [...state.favouriteItem.filter(item => item.id !== action.payload.id)]
            } 
        case productType.GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload
            }   
        default:
            return state;
    }

}