import { useState } from "react";
import Board from "./Board";
import "./style.css";
export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setcurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    //enumerate(arrayの中にarrayを追加する)
    setHistory(nextHistory);
    setcurrentMove(nextHistory.length - 1);
    // setHistory([...history, nextSquares]);
    // setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setcurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }
  //mapの引数2個で前の方は配列、後ろの方は数
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className='main'>
      <h1>Welcome to Board Game</h1>
      <div className='game game-board'>
        <div className='left-side'>
          <Board
            xIsNext={xIsNext}
            currentMove={currentMove}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
      </div>
      <div className='game game-info'>
        <div className='right-side'>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
