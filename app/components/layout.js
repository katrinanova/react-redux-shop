import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div className="app">
      <header className="header">
        <ul className="header-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product_form">Add New Product</Link></li>
          <li><Link to="/selected-products">Selected Products</Link></li>
        </ul>
      </header>
      <main>
        {props.children}
      </main>
    </div>
    );
}
