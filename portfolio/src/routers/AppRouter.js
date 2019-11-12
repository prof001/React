import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import ItemOne from '../components/ItemOne';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/portfolio' component={Portfolio} exact={true} />
        <Route path='/portfolio/:id' component={ItemOne} exact={true} />
        <Route path='/contact' component={Contact} exact={true} />
        <Route component={NotFoundPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
