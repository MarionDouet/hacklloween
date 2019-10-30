import React from 'react';
import './App.css';
import RandomButton from './components/RandomButton'
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <RandomButton/>
      <Footer />
    </div>
  );
}


export default App;

