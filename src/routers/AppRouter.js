import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddGood from '../components/AddGood';
import EditGoodInfo from '../components/EditGoodInfo';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import BuyingBasket from '../components/BuyingBasket';
import GoodDetails from '../components/GoodDetails';
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path='/addgood' component={AddGood} />
        <Route path='/good/:id' component={GoodDetails} />
        <Route path='/edit/:id' component={EditGoodInfo} />
        <Route path='/buyingbasket/' component={BuyingBasket}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);export default AppRouter;