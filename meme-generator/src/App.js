import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memeImage: "https://images.freeimages.com/images/large-previews/7e9/ladybird-1367182.jpg",
      memeText: "Meme Text",
    }
  }

  render() {
    const { memeImage, memeText } = this.state;
    return (
      <div className="App">
        <div className="meme__container">
          <img className="meme__image" src={memeImage}/>
          <p class="meme__text">{memeText}</p>
        </div>
      </div>
    );
  }
}

export default App;
