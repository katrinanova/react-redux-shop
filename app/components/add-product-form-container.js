import React from 'react';
import AddProductForm from './add-product-form';
import store from '../store';
import { addProduct } from '../actions/product-actions.js';
import { hashHistory } from 'react-router';

const AddProductFormContainer = React.createClass({
  getInitialState: function(){
    return ({
      errorMessage: null
    })
  },

  addProduct: function(event) {
    event.preventDefault();

    var product = this.refs.child.getProduct();

    if (product.name && product.price){
      store.dispatch(addProduct(product));
      hashHistory.push("/");
    } else {
      var errorMessage;
      if (!product.name && !product.price){
        this.setState({errorMessage: "Name or Price can not be blank"});
      } else if (!product.name){
        this.setState({errorMessage: "Name can not be blank"});
      } else {
        this.setState({errorMessage: "Price can not be blank"});
      }
    }

  },

  render: function() {
    return (
      <AddProductForm addProduct={this.addProduct} errorMessage={this.state.errorMessage} ref="child" />
    );
  }

});

export default AddProductFormContainer;
