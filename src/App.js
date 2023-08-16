import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import User from './containers/User';
import Layout from './layout/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from "react-redux";

import "./App.css";
import configureStore from "./Store/store";

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
  <Layout>
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='login' element={<Login />} />
    <Route path='user' element={<User />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  </Layout>
    </Provider>
  );
};

export default App;