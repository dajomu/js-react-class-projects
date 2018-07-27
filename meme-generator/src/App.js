import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="meme__container">
          <img className="meme__image" src="https://images.freeimages.com/images/large-previews/7e9/ladybird-1367182.jpg" />
          <p class="meme__text">Meme Text</p>
        </div>
      </div>
    );
  }
}

export default App;
