import "./style.css";
import Square from "./Square";
// import { useState } from "react";
export default function Board({ xIsNext, currentMove, squares, onPlay }) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    // console.log('before slice', squares)
    // console.log('xIsNext', xIsNext)
    //Squareの中に’O `or'X'が存在であれば、更新しないようにする
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    //配列のコピー(immutable)
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // console.log('nextSquares:',nextSquares)
    // nextSquares[i] = "X"
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  let result;
  status = "Next player:" + (xIsNext ? "X" : "O");
  if (winner) {
    result = "Result:Winner" + winner;
  } else if (currentMove === 9) {
    result = "Result: No one wins";
  } else {
    result = "";
  }

  //{()=>handleClick()} for solving infinite loop
  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className='result'>{result}</div>
    </>
  );
}

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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
