import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Currency from './currency-component/currency';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/currencies/:currencyId' component={Currency} />
    </Switch>
  </main>
)
export default Main;
