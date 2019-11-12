import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/Helpage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true} />
        <Route path='/create' component={AddExpensePage} exact={true} />
        <Route path='/edit' component={EditExpensePage} exact={true} />
        <Route path='/help' component={HelpPage} exact={true} />
        <Route component={NotFoundPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
