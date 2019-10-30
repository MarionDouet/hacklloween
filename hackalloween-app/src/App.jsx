import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import RandomButton from './components/RandomButton'
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
          <RandomButton/>
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

