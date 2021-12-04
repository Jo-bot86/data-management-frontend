import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import CompanyCreate from './CompanyCreate';
import CompanyDetail from './CompanyDetail';
import CompanyEdit from './CompanyEdit';
import CompanyList from './CompanyList';
import Home from './Home';

export default function Routes() {
  return (
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/companies/new'>
        <CompanyCreate />
      </Route>
      <Route path='/companies/:id/edit'>
        <CompanyEdit />
      </Route>
      <Route path='/companies/:id'>
        <CompanyDetail />
      </Route>
      <Route path='/companies'>
        <CompanyList />
      </Route>
      <Route path='/'>
        <Redirect to='/home' />
      </Route>
    </Switch>
  );
}
