import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/layout';

import ProductListContainer from './components/product-list-container';
import SelectedListContainer from './components/selected-list-container';
import AddProductFormContainer from './components/add-product-form-container';


export default (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={ProductListContainer}/>
      <Route path="/selected-products" component={SelectedListContainer}/>
      <Route path="/product_form" component={AddProductFormContainer}/>
    </Route>
  </Router>
);
