import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

function Square(props) {
  return (
    <button className = "square" onClick = { props.onClick } >
        { props.piece }
      </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sq: Array(9).fill(null),
      turn: false
    }
  }

  handleClick(i) {
    const squares = this.state.sq.slice()
    const turn = this.state.turn
    squares[i] = turn ? 'O' : 'X'
    this.setState({ sq: squares, turn: ~turn })
  }

  renderSquare(i) {
    return (
      <Square 
        piece = { this.state.sq[i] }
        onClick = { () => this.handleClick(i) }
      />
    );
  }

  render() {
    const status = 'Next player: ';

    return (
      <div>
        <div className="status">{status+(this.state.turn ? 'O' : 'X')}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Game />
    <ShoppingList />
  </div>
);
