import React from 'react';
import { connect } from 'react-redux';
import ProductList from './product-list';
import store from '../store';
import { toggleSelected } from '../actions/product-actions.js';



const SelectedListContainer = React.createClass({

  toggleSelected: function(id){
    store.dispatch(toggleSelected(id));
  },

  render: function() {
    var products = Object.keys(this.props.products).map(key => this.props.products[key]);
    var selectedProducts = [];
    products.forEach(function(product){
      if (product.selected){
        selectedProducts.push(product);
      };
    })

    return (
      <ProductList products={selectedProducts} title={"Selected Products"} toggleSelected={this.toggleSelected}/>
    );
  }
})

const mapStateToProps = function(store){
  return {
    products: store.productState.products
  };
}

export default connect(mapStateToProps)(SelectedListContainer);
