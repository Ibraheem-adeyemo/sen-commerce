import { combineReducers } from 'redux';
import userReducer from './Users/userReducer'
import { productReducer } from "./product/product.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  productReducer
})

export default rootReducer
