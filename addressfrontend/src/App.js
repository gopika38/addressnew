// App.js
import { Provider } from 'react-redux';

import React from 'react';
import AddressList from './components/AddressList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import HomePage from './components/HomePage';
import AddAddressForm from './components/AddAddressForm';
import DeleteAddressButton from './components/DeleteAddressButton';
import UpdateAddressForm from './components/UpdateAddressForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/add" component={AddAddressForm} />
            <Route path="/delete" component={DeleteAddressButton} />
            <Route path="/update" component={UpdateAddressForm} />
            <Route path="/get-all-addresses" component={AddressList} />
          </Switch>
          <ToastContainer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
