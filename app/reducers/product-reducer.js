import * as types from '../actions/action-types';

const initialState = {
  products: {},
  id: 0,
};

const productReducer = function(initialState, action) {

  var newProducts = Object.assign({}, state.products);

  switch(action.type) {

    case types.ADD_PRODUCT:
      var id = state.id;
      //assign id and selected to product
      var product = Object.assign({}, {id: id, selected: false}, action.product);
      //mapp id to product
      newProducts[id] = product;

      var newState = Object.assign({}, state, {products: newProducts}, {id: id + 1});

      return newState;



    case types.TOGGLE_SELECTED:
      var product = Object.assign({}, state.products[action.id]);
      product.selected = !product.selected;
      newProducts[action.id] = product;

      var newState = Object.assign({}, state, {products: newProducts})

      return newState
  }

  return state;

}

export default productReducer;
