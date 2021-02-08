import React, { useState } from 'react';
import { calculateWinner } from '../tools/calculateWinner';
import Board from './Board';
import Square from './Square';

const styles = {
    width: '200px',
    margin: '20px auto',
};

;

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Reset Board
        </button>
    )

    return (
        <>
        { !calculateWinner(board) &&
            <Board squares={board} onClick={handleClick} />
        }
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;