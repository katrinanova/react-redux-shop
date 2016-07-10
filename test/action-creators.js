import expect from 'expect'
import * as actions from '../app/actions/product-actions'
import * as types from '../app/actions/action-types'

describe('actions', () => {
  it('should create an action to add a product', () => {
    const product = {name: "apple", price: 5}
    const expectedAction = {
      type: types.ADD_PRODUCT,
      product
    }
    expect(actions.addProduct(product)).toEqual(expectedAction)
  })

  it('should create an action to toggle selected', () => {
    const id = 1
    const expectedAction = {
      type: types.TOGGLE_SELECTED,
      id
    }
    expect(actions.toggleSelected(id)).toEqual(expectedAction)
  })
})
