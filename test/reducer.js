import expect from 'expect'
import reducer from '../app/reducers/product-reducer'
import * as types from '../app/actions/action-types'


const initialReducer = {
  products:
    {
      1: {id: 1, name: "apple", price: 3, selected: false},
      2: {id: 2, name: "herloom tomato", price: 9.75, selected: true},
      3: {id: 3, name: "banana", price: 1.50, selected: false},
      4: {id: 4, name: "blood orange", price: 2.25, selected: true}
    },
  id: 5,
};

describe('product reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialReducer)
  })

  it('should handle ADD_PRODUCT', () => {
    expect(
      reducer({ products: {}, id: 1 }, {
        type: types.ADD_PRODUCT,
        product: { name: "carrot", price: 2 }
      })
    ).toEqual({
      products:
        {
          1: {id: 1, name: "carrot", price: 2, selected: false},
        },
      id: 2,
    })
  })

  it('should handle TOGGLE_SELECTED', () => {
    expect(
      reducer(initialReducer, {
        type: types.TOGGLE_SELECTED,
        id: 3
      })
    ).toEqual({
      products:
        {
          1: {id: 1, name: "apple", price: 3, selected: false},
          2: {id: 2, name: "herloom tomato", price: 9.75, selected: true},
          3: {id: 3, name: "banana", price: 1.50, selected: true},
          4: {id: 4, name: "blood orange", price: 2.25, selected: true}
        },
      id: 5,
    })
  })
})
