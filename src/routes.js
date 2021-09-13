import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';

function Routes(){

  return(
    <BrowserRouter>
      <Route path="/" exact>
        <Menu />
      </Route>
    </BrowserRouter>
  )
}

export default Routes;
