import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Top from './components/Top'
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/top">
          <Top />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;