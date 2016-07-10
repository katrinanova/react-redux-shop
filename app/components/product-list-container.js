import React from 'react';
import { connect } from 'react-redux';
import ProductList from './product-list';
import store from '../store';
import { toggleSelected } from '../actions/product-actions.js';

const ProductListContainer = React.createClass({
  toggleSelected: function(id){
    store.dispatch(toggleSelected(id));
  },

  render: function() {
    var products = Object.keys(this.props.products).map(key => this.props.products[key])
    return (
      <ProductList products={products} title={"All Listed Products"} toggleSelected={this.toggleSelected} />
    );
  }

});

const mapStateToProps = function(store){
  return {
    products: store.productState.products
  };
}


export default connect(mapStateToProps)(ProductListContainer);
