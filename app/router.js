import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

export default (
  <Router history={hashHistory}>
    <Route component={Layout}>
      <Route path="/" component={ProductListContainer}/>
      <Route path="/selected-products" component={SelectedListContainer}/>
      <Route path="/product_form" component={AddProductFormContainer}/>
    </Route>
  </Router>
);
