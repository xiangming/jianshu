import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout } from './components';
import { HomePage, DetailPage } from './pages';

import '../style/global.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:id' children={<DetailPage />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
