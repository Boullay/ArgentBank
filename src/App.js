import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import User from './containers/User';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from "react-redux";

import "./App.css";
import configureStore from "./Store/store";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='profile' element={<User />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </Provider>
  );
};

export default App;