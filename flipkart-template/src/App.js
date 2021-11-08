import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './containers/HomePage';
import OfferStore from './containers/OfferStore';
import ProductPage from './containers/ProductPage';
import ViewCart from './containers/ViewCart';
import LoginPage from './containers/LoginPage';
import Checkout from './containers/Checkout';
import MultipleSelect from './containers/MultipleSelect';

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/offer-store'  component={OfferStore} />
            <Route path='/product-page'  component={ProductPage} />
            <Route path='/viewcart'  component={ViewCart} />
            <Route path='/loginpage'  component={LoginPage} />
            <Route path='/checkout'  component={Checkout} />
            <Route path='/select'  component={MultipleSelect} />

          </Switch>
      </Router>

    </>
  );
}

export default App;
