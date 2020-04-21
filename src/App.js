import React from 'react';
import './App.css';
import 'bootstrap-css-only'; 


import Header from './components/Header';
import RollsList from './components/RollsList';
import Cart from './components/Cart';

const App = () => {
  return (
    <>
    <Header />
      <div className="container mb-5">
        <div className="row">
          <RollsList />
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
