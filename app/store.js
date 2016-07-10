import { createStore, combineReducers } from 'redux'
import productReducer from './reducers/product-reducer';

const reducer = combineReducers({
  productState: productReducer
});

const store = createStore(reducer);
export default store;
