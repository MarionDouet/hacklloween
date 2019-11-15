import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import RandomButton from './components/RandomButton'
import Home from './components/Home';
import Footer from './components/Footer';
import Top from './components/Top'
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <RandomButton /> 
          <Home />
        </Route>
        <Route path="/top">
          <Top />
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

