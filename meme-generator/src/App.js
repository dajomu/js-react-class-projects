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
          <img className="meme__image" src={memeImage}/>
          <p class="meme__text" style={{fontSize: this.calculateTextSize(memeText)}}>{memeText}</p>
        </div>
        <div className="inputs">
          <label>
            Image:
            <input 
              type="text"
              name="memeImage"
              value={memeImage}
              onChange={this.changeImage} />
          </label>
          <label>
            Text:
            <input 
              type="text"
              name="memeText"
              value={memeText}
              onChange={this.changeText} />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
