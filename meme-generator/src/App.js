import React, { Component } from 'react';
import './App.css';

const config = {
  giphyApiKey: '6xAd6ZCXVM5RjGTYjT4szscYQUK1ptNM',
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSource: "unsplash",
      memeImage: "https://images.freeimages.com/images/large-previews/7e9/ladybird-1367182.jpg",
      memeText: "Meme Text x",
    }
  }

  randomizeContent = async () => {
    const { imageSource } = this.state;
    const imageFetch = imageSource === 'unsplash' ?
      fetch('https://source.unsplash.com/random/800x600') :
      fetch(`http://api.giphy.com/v1/gifs/random?api_key=${config.giphyApiKey}`).then(function(response){ 
        return response.json()
      });
    const textFetch = fetch('https://talaikis.com/api/quotes/random/').then(function(response){ 
      return response.json()
    });
    Promise.all([imageFetch, textFetch]).then(([imageResponse, textResponse]) => {
      const memeImage = imageSource === 'unsplash' ? imageResponse.url : imageResponse.data.image_url;
      this.setState({memeImage: memeImage, memeText: textResponse.quote})
    }).catch(error => console.log(error))
  }

  calculateTextSize = (memeText) => {
    if(memeText.length < 10) {
      return 100;
    } else if(memeText.length > 25) {
      return 40;
    } else {
      return 10 / memeText.length * 100;
    }                
  }

  changeImage = (event) => {
    this.setState({memeImage: event.target.value});
  }

  changeText = (event) => {
    this.setState({memeText: event.target.value});
  }
  
  handleImageSourceChange = (event) => {
    this.setState({imageSource: event.target.value});
  }

  render() {
    const { imageSource, memeImage, memeText } = this.state;
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
          <label>
            <span>Unsplash:</span>
            <input type="radio" value="unsplash" 
              checked={imageSource === 'unsplash'} 
              onChange={this.handleImageSourceChange} />
          </label>
          <label>
            <span>Giphy:</span>
            <input type="radio" value="giphy" 
              checked={imageSource === 'giphy'} 
              onChange={this.handleImageSourceChange} />
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
