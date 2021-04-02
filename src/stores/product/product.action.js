import { productType } from "./produc.type";
import { popularProducts } from "../data";

  const addToCart = (payload) => {
    return {
      type: productType.ADD_TO_CART,
      payload
    }
  }

  const removeFromCart = (payload) => {
    return {
      type: productType.REMOVE_FROM_CART,
      payload
    }
  }

  const addToFavourite = (payload) => {
    return {
      type: productType.ADD_TO_FAVOURITE,
      payload
    }
  }

  const getSingleProduct = (payload) => {
    return {
      type: productType.GET_SINGLE_PRODUCT,
      payload
    }
  }

  const getAllProduct = () => {
    return {
      type: productType.GET_ALL_PRODUCT
    }
  }

  const removeFromFavourite = (payload) => {
    return {
      type: productType.REMOVE_FROM_FAVOURITE,
      payload
    }
  }
  
  export const addToCartAction = (cart) => {
      console.log(cart, 'add action')
    return dispatch => {
      dispatch(addToCart(cart))
    }
  }

  export const removeFromCartAction = (cart) => {
  return dispatch => {
    dispatch(removeFromCart(cart))
  }
}

export const addToFavouriteAction = (cart) => {
  return dispatch => {
    dispatch(addToFavourite(cart))
  }
}

export const removeFromFavouriteAction = (cart) => {
  return dispatch => {
    dispatch(removeFromFavourite(cart))
  }
}

const findProduct = (id) => {
  return popularProducts.find(itm => {
    return itm.id.toString() === id
  } )
}

export const getSingleProductAction = (id) => {
  const product = findProduct(id)
  return dispatch => {
    dispatch(getSingleProduct(product))
  }
}