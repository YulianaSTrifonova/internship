import { useEffect, useRef, useState } from "react";
import Ball from "./Ball";
import Paddle from "./Paddle";
import "./board.css";
import { CONTROLS, DIRECTIONS } from "../enums";

export default function Board() {
    const [leftPaddle, setLeftPaddle] = useState(8);
    const [rightPaddle, setRightPaddle] = useState(8);

    const initialBallState = { x: 10, y: 15 };
    const [ball, setBall] = useState(initialBallState);
    const [velocity, setVelocity] = useState({ x: 1, y: 1 });
    const [speed, setSpeed] = useState(140);
    const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
    const [wallHit, setWallHit] = useState(false);

    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    const [gameStarted, setGameStarted] = useState(false);

    const intervalRef = useRef(0);

    function handleKeyDown(event: KeyboardEvent) {
        switch (event.key) {
            case CONTROLS.UP:
                if (rightPaddle >= 1) {
                    setRightPaddle(rightPaddle - 1);
                    return;
                }
                break;
            case CONTROLS.W:
                if (leftPaddle >= 1) {
                    setLeftPaddle(leftPaddle - 1);
                    return;
                }
                break;
            case CONTROLS.DOWN:
                if (rightPaddle <= 15) {
                    setRightPaddle(rightPaddle + 1);
                    return;
                }
                break;
            case CONTROLS.S:
                if (leftPaddle <= 15) {
                    setLeftPaddle(leftPaddle + 1);
                    return;
                }
                break;
            case CONTROLS.SPACE:
                setGameStarted(true);
                break;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    function moveBall() {
        setBall((prevBall) => ({
            x: prevBall.x + velocity.x,
            y: prevBall.y + velocity.y,
        }));
    }

    function getPaddlePosition(paddle: number) {
        return [paddle, paddle + 1, paddle + 2, paddle + 3, paddle + 4];
    }

    function checkPaddleCollision() {
        const leftPaddlePosition = getPaddlePosition(leftPaddle);
        const rightPaddlePosition = getPaddlePosition(rightPaddle);

        if (ball.y + 1 == 30) {
            if (rightPaddlePosition.some((part) => ball.x == part)) {
                const newVelocity =
                    Math.random() > 0.5 ? { x: -1, y: -1 } : { x: 1, y: -1 };
                setVelocity(newVelocity);
                setDirection(DIRECTIONS.LEFT);
                setWallHit(false);
            } else {
                setWallHit(true);
            }
        }

        if (ball.y - 1 == 0) {
            if (leftPaddlePosition.some((part) => ball.x == part)) {
                const newVelocity =
                    Math.random() > 0.5 ? { x: 1, y: 1 } : { x: -1, y: 1 };
                setVelocity(newVelocity);
                setDirection(DIRECTIONS.RIGHT);
                setWallHit(false);
            } else {
                setWallHit(true);
            }
        }
    }

    function checkBorderCollision() {
        if (ball.x == 1) {
            if (direction == DIRECTIONS.RIGHT) {
                setVelocity({ x: 1, y: 1 });
            } else {
                setVelocity({ x: 1, y: -1 });
            }
        } else if (ball.x == 19) {
            if (direction == DIRECTIONS.RIGHT) {
                setVelocity({ x: -1, y: 1 });
            } else {
                setVelocity({ x: -1, y: -1 });
            }
        }
    }

    function checkCollision() {
        checkBorderCollision();
        checkPaddleCollision();
    }

    function ballSpeed() {
        if (speed > 30) {
            setSpeed(speed - 2);
        }
    }

    function newBall() {
        const randomDir =
            Math.random() > 0.5 ? { x: 1, y: 1 } : { x: 1, y: -1 };
        if (randomDir.y == -1) {
            setDirection(DIRECTIONS.LEFT);
        } else {
            setDirection(DIRECTIONS.RIGHT);
        }
        setBall(initialBallState);
        setVelocity(randomDir);
        ballSpeed();
    }

    function scorePoint() {
        if (ball.y == 0) {
            setPlayerTwoScore(playerTwoScore + 1);
            newBall();
        } else if (ball.y == 30) {
            setPlayerOneScore(playerOneScore + 1);
            newBall();
        }
    }

    function tick() {
        checkCollision();
        moveBall();
        if (wallHit) {
            scorePoint();
        }
    }

    function startInterval() {
        intervalRef.current = window.setInterval(tick, speed);
    }

    function stopInterval() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = 0;
        }
    }

    useEffect(() => {
        if (gameStarted && !intervalRef.current) {
            startInterval();
        }

        return () => stopInterval();
    });

    return (
        <div>
            {gameStarted ? (
                <>
                    <div className="scores">
                        <p>{playerOneScore}</p>
                        <p>{playerTwoScore}</p>
                    </div>
                    <div className="board-border">
                        <div className="board">
                            {ball.y == 0 || ball.y == 30 ? (
                                ""
                            ) : (
                                <Ball x={ball.x} y={ball.y} />
                            )}
                            <Paddle x={leftPaddle} y={0} />
                            <Paddle x={rightPaddle} y={30} />
                        </div>
                    </div>
                </>
            ) : (
                <div className="init-text">Press Spacebar to start</div>
            )}
        </div>
    );
}
