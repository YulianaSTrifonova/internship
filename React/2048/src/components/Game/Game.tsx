/* eslint-disable react/react-in-jsx-scope */

import Board from "../Board/Board";
import useGameLogic from "../useGameLogic";
import "./game.css";

export default function Game() {
  const { score, tiles, gameOver, hasWon, restartGame } = useGameLogic();

  return (
    <div className="game">
      <h1 className="title">2048</h1>
      <p className="score">Score: {score}</p>
      <Board tiles={tiles} />
      {gameOver && (
        <div className="overlay">
          <div className="game-over">
            {hasWon() ? <h1>You Won!</h1> : <h1>Game Over</h1>}
            <button onClick={restartGame}>Restart</button>
          </div>
        </div>
      )}
    </div>
  );
}
