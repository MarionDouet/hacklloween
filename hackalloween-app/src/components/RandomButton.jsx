import React from 'react';
import DisplayMovies from './DisplayMovies';
import axios from 'axios';
import './RandomButton.css'


function FunctionRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


class RandomButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: null
    };
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }


  getMovies() {
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies/')
      .then(response => response.data)
      
      .then(data => {
        this.setState({
          movies: data.movies[FunctionRandom(1, 81)]
        });
    });
  }

  render(){
    return(
      <div className = "divButton">

        {
          this.state.movies ? <DisplayMovies movies={this.state.movies}/> : null
        }
        
        <button className="buttonRandom" type="button" onClick={this.getMovies}>Next!</button>
          
       
      </div>

    )
  }
}

export default RandomButton;