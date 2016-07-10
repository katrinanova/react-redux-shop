import React from 'react';

export default React.createClass({

  getProduct: function(){
    return {
      name: this.refs.name.value,
      price: this.refs.price.value,
    }
  },

  render: function() {
    if (this.props.errorMessage){
      var errorMessage = <h3 className="error-message">{this.props.errorMessage}</h3>
    } else {
      var errorMessage = null
    }
    return (
      <div>
        <h1> Add New Product </h1>
        {errorMessage}
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
