import React, { Component } from 'react';
import CurrentPlayer from './components/CurrentPlayer';
import Winner from './components/Winner';
import './App.css';

const gameSquares = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];

const winningConditions = [
  ["a1", "b1", "c1"],
  ["a2", "b2", "c2"],
  ["a3", "b3", "c3"],
  ["a1", "a2", "a3"],
  ["b1", "b2", "b3"],
  ["c1", "c2", "c3"],
  ["a1", "b2", "c3"],
  ["a3", "b2", "c1"],
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'x',
      winner: '',
    };
  }

  findWinner = (currentSquare, state) => {
    let winner = "";
    winningConditions
      .filter(condition => condition.includes(currentSquare))
      .forEach(condition => {
        if(state[condition[0]] === state[condition[1]] && state[condition[1]] === state[condition[2]] && state[condition[0]]) {
          winner = state[condition[0]];
        }
      })
    return winner;
  }

  clickCurrentSquare = (currentSquare, currentPlayer) => {
    if(!this.state[currentSquare] && !this.state.winner) {
      this.setState({
        currentPlayer: currentPlayer === "x" ? "o" : "x",
        [currentSquare]: currentPlayer,
        winner: this.findWinner(currentSquare, {...this.state, [currentSquare]: currentPlayer})
      })
    }
  }

  render() {
    const { winner } = this.state;
    return (
      <div className="App">
        {!winner && <CurrentPlayer currentPlayer={this.state.currentPlayer} />}
        {!!winner && <Winner winner={this.state.winner} />}
        <div className="game-container">
          {gameSquares.map(gameSquare => {
            const squareState = this.state[gameSquare];
            return <div 
              className={`game-square${squareState !== '' ? ' game-square-' +  squareState : ''}`}
              onClick={() => this.clickCurrentSquare(gameSquare, this.state.currentPlayer)}>
              <span>{squareState}</span>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
