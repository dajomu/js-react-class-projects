import React, { Component } from 'react';

class Winner extends Component {
    render() {
        const { winner } = this.props;
        return (
            <div className={`game-player-indicator game-player-indicator-${winner}`}>
                <span>{`The winner is: ${winner}`}</span>
            </div>
        );
    }
}

export default Winner