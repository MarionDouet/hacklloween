import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import {Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;