import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div className="app">
      <header className="header">
        <ul className="header-links">
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/product_form" activeClassName="active">Add New Product</Link></li>
          <li><Link to="/selected-products" activeClassName="active">Selected Products</Link></li>
        </ul>
      </header>
      <main>
        {props.children}
      </main>
    </div>
    );
}
