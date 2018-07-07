import React, { Component } from 'react';
import CurrentPlayer from './components/CurrentPlayer';
import './App.css';

const gameSquares = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'x',
      a1: '',
      a2: '',
      a3: '',
      b1: '',
      b2: '',
      b3: '',
      c1: '',
      c2: '',
      c3: '',
    };
  }

  selectSquare = (square, player) => {
    this.setState({
      [square]: player,
      currentPlayer: player === 'x' ? 'o' : 'x'
    });
  }

  render() {
    return (
      <div className="App">
        <CurrentPlayer currentPlayer={this.state.currentPlayer} />
        <div className="game-container">
          {gameSquares.map(gameSquare => {
            const squareState = this.state[gameSquare];
            return <div 
              className={`game-square${squareState !== '' ? ' game-square-' +  squareState : ''}`}
              onClick={() => {if(squareState === '') {this.selectSquare(gameSquare, this.state.currentPlayer)}}}>
              <span>{squareState}</span>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
