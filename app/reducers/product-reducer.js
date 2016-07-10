import * as types from '../actions/action-types';

const initialState = {
  products:
    {
      1: {id: 1, name: "apple", price: 3, selected: false},
      2: {id: 2, name: "herloom tomato", price: 9.75, selected: true},
      3: {id: 3, name: "banana", price: 1.50, selected: false},
      4: {id: 4, name: "blood orange", price: 2.25, selected: true}
    },
  id: 5,
};

const productReducer = function(state = JSON.parse(localStorage.getItem("productState")) || initialState, action) {

  var newProducts = Object.assign({}, state.products);

  switch(action.type) {

    case types.ADD_PRODUCT:
      var id = state.id;
      //assign id and selected to product
      var product = Object.assign({}, {id: id, selected: false}, action.product);
      //mapp id to product
      newProducts[id] = product;

      var newState = Object.assign({}, state, {products: newProducts}, {id: id + 1});
      localStorage.setItem("productState", JSON.stringify(newState));

      return newState;



    case types.TOGGLE_SELECTED:
      var product = Object.assign({}, state.products[action.id]);
      product.selected = !product.selected;
      newProducts[action.id] = product;

      var newState = Object.assign({}, state, {products: newProducts});
      localStorage.setItem("productState", JSON.stringify(newState))

      return newState;
  }

  return state;

}

export default productReducer;
