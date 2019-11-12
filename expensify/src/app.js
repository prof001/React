import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configurestore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
//console.log(store.getState());

const expense1 = store.dispatch(
  addExpense({
    description: 'Water bill',
    note: 'New water bill',
    amount: 400,
    createdAt: 2900
  })
);

const expense2 = store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'New water bill',
    amount: 400,
    createdAt: 2900
  })
);
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//console.log(store.getState());
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
