import React, { Component } from 'react';

class CurrentPlayer extends Component {
    render() {
        const { currentPlayer } = this.props;
        return (
            <div className={`game-player-indicator game-player-indicator-${currentPlayer}`}>
                <span>{`Current player is: ${currentPlayer}`}</span>
            </div>
        );
    }
}

export default CurrentPlayer