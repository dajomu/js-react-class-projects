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

  randomizeContent = async () => {
    const response = await fetch('https://source.unsplash.com/random/800x600');
    this.setState({memeImage: response.url})
  }

  calculateTextSize = (memeText) => {
    return memeText.length < 10 ? 100 : 10 / memeText.length * 100;
  }

  changeImage = (event) => {
    this.setState({memeImage: event.target.value});
  }

  changeText= (event) => {
    this.setState({memeText: event.target.value});
  }

  render() {
    const { memeImage, memeText } = this.state;
    return (
      <div className="App">
        <div className="meme__container">
          <img className="meme__image" alt="Meme Image" src={memeImage}/>
          <p className="meme__text" style={{fontSize: this.calculateTextSize(memeText)}}>{memeText}</p>
        </div>
        <div className="inputs">
          <label>
            <span>Image:</span>
            <input 
              type="text"
              name="memeImage"
              value={memeImage}
              onChange={this.changeImage} />
          </label>
          <label>
            <span>Text:</span>
            <input 
              type="text"
              name="memeText"
              value={memeText}
              onChange={this.changeText} />
          </label>
          <button onClick={this.randomizeContent}>
            Randomize!!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
