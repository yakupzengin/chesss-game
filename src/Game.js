import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";


const chess = new Chess();

const subjectGame = new BehaviorSubject()

export default subjectGame;
export const initGame = () => {
    updatedGame();
}
export const move = (from, to) => {
    try {
        const moveOperation = chess.move({ from, to })
        if (moveOperation) {
            updatedGame();
        }
    } catch (error) {
        alert("Invalid move. Please try again.");
    }

}
const updatedGame = () => {
    const isGameOver = chess.isGameOver();
    subjectGame.next({ chess: chess.board(), isGameOver, result: isGameOver ? getGameResult() : null })
}
const getGameResult = () => {
    if (chess.isCheckmate()) {
        const winner = chess.turn() === "w" ? "Black" : "White";
        return `Check Mate - Winner : ${winner}`
    } else if (chess.isDraw) {
        let reason = "50 move rule";
        if (chess.isStalemate()) {
            reason = "Dead end loop";
        } else if (chess.isThreefoldRepetition) {
            reason = "Repetition"
        } else if (chess.isInsufficientMaterial) {
            reason = "Insufficient material";
        }
        return reason;
    } else {
        return "Unknown situation";
    }
}
