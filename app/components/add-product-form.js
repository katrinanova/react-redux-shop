import React from 'react';

export default React.createClass({

  getProduct: function(){
    return {
      name: this.refs.name.value,
      price: this.refs.price.value,
    }
  },

  render: function() {
    return (
      <div>
        <h1> Add New Product </h1>
        <form className="add-product-form" onSubmit={this.props.addProduct}>
          <label>Product Name:
            <input type="text" ref="name" defaultValue=""/>
          </label>
          <label>Product Price $:
            <input type="number" ref="price" defaultValue=""/>
          </label>
          <button>Add Product</button>
        </form>
      </div>
    );
  }

});
