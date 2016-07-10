import React from 'react';
import AddProductForm from './add-product-form';
import store from '../store';
import { addProduct } from '../actions/product-actions.js';
import { hashHistory } from 'react-router';

const AddProductFormContainer = React.createClass({

  addProduct: function(event) {
    event.preventDefault();

    var product = this.refs.child.getProduct();

    store.dispatch(addProduct(product))
    hashHistory.push("/");
  },

  render: function() {
    return (
      <AddProductForm addProduct={this.addProduct} ref="child" />
    );
  }

});

export default AddProductFormContainer;
