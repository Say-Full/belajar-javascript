/* eslint-disable react/prop-types */
import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return <button className='square' onClick={onSquareClick}>{ value }</button>
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if( squares[i] || calculateWinner(squares) ) return;

    const newSquares = squares.slice();

    newSquares[i] = ( xIsNext ) ? newSquares[i] = 'X' : newSquares[i] = 'O';
    
    onPlay(newSquares);
  }

  const winner = calculateWinner(squares);
  let status = '';

  if( winner ) {
    status = 'Pemenang: ' + winner;
  } else {
    status = 'Giliran: ' + (xIsNext ? 'X' : 'O');
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



// Pengelola game secara keseluruhan
export default function Game() {
  const [history, setHistory] = useState( [ Array(9).fill(null) ] ); // Histori setiap kotak

  /**
   * Awalnya:
   * history = [
   *  [null, null, null, null, null, null, null, null, null]
   * ]
   * 
   * Ketika diklik sekali:
   * history = [
   *  [null, null, null, null, null, null, null, null, null],
   *  [null, null, 'X', null, null, null, null, null, null]
   * ]
   * 
   * Ketika diklik kedua kali:
   * history = [
   *  [null, null, null, null, null, null, null, null, null],
   *  [null, null, 'X', null, null, null, null, null, null],
   *  ['O', null, 'X', null, null, null, null, null, null]
   * ]
   */

  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[history.length - 1]; // Keadaan board saat ini (array di indeks terakhir pd history)

  // Loncat ke move yg diinginkan
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handlePlay(newSquares) {   
    const newHistory = [...history.slice(0, currentMove + 1), newSquares]; // `...history.slice(0, currentMove + 1)` untuk menyimpan array histori dr awal hingga 'move' yg dipilih
    setHistory(newHistory); // Memperbarui array history
    setCurrentMove(newHistory.length - 1); // Mundur ke histori move yg dipilih
  }

  // move = index = langkah ke brp
  const moves = history.map((squares, move) => {
    let teks = '';

    if( move > 0 ) {
      teks = 'Kembali ke langkah #' + move;
    } else {
      teks = 'Mulai ulang';
    }

    // Setiap looping pkk method map ini akan mengembalikan komponen `li`
    // Klo kita looping `li` hrs ada key
    return (
      <li key={ move }>
        <button onClick={ () => jumpTo(move) }>{ teks }</button>
      </li>
    );
  });

  // Jika ingin fitur Time Travel ini berada di samping kotaknya, maka berikan class `flex` untuk class `game` di dlm file index.css
  return(
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className='game-info'>
        <ol>{ moves }</ol>
      </div>
    </div>
  );
}



// Logika penentuan pemenang
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
      return squares[a];
    }
  }

  return false;
}
