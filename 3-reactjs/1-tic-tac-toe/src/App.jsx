/* eslint-disable react/prop-types */
import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return <button className='square' onClick={onSquareClick}>{ value }</button>
}

export default function Board() {
  const [squares, setSquares] = useState( Array(9).fill(null) );
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    
    if( squares[i] || calculateWinner(squares) ) return;

    const newSquares = squares.slice();

    newSquares[i] = ( xIsNext ) ? newSquares[i] = 'X' : newSquares[i] = 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = '';

  if( winner ) {
    status = 'Pemenang: ' + winner;
  } else {
    status = 'Giliran: ' + (xIsNext ? 'X' : 'O') 
  }

  return (
    <>
      <div className='status'>{ status }</div>
      
      <div className='board'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}  />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}  />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}  />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}  />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}  />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}  />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}  />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}  />
      </div>
    </>
  )
}



// Logika penentuan pemenang
function calculateWinner(squares) {
  const lines = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    // Vertikal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    // const [a = lines[i][0];
    // const b = lines[i][1];
    // const c = lines[i][2];

    const [a, b, c] = lines[i];

    if( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
      return squares[a];
    }

    return false;
  }
}
