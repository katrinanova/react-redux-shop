import * as types from '../actions/action-types';

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    product
  };
}

export function toggleSelected(id) {
  return {
    type: types.TOGGLE_SELECTED,
    id
  };
}
