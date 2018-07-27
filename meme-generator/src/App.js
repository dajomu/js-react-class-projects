import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memeImage: "https://images.freeimages.com/images/large-previews/7e9/ladybird-1367182.jpg",
      memeText: "Meme Text x",
    }
  }

  calculateTextSize = (memeText) => {
    return memeText.length < 10 ? 100 : 10 / memeText.length * 100;
  }

  render() {
    const { memeImage, memeText } = this.state;
    return (
      <div className="App">
        <div className="meme__container">
          <img className="meme__image" src={memeImage}/>
          <p class="meme__text" style={{fontSize: this.calculateTextSize(memeText)}}>{memeText}</p>
        </div>
      </div>
    );
  }
}

export default App;
