import { useState } from "react";
import "./Ticket.css";

export default function Ticket() {
    const [randomNumbers, setRandomNumbers] = useState([0, 0, 0]);

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateThreeNumber = () => {
        const nums = [
            getRandomNumber(1, 9),
            getRandomNumber(1, 9),
            getRandomNumber(1, 9)
        ];
        setRandomNumbers(nums);
    };

    const sum = randomNumbers[0] + randomNumbers[1] + randomNumbers[2];
    const isWinning = sum === 15;

    return (
        <div className="lottery-container">
            <h2 className="lottery-title">🎟️ Lottery Ticket</h2>

            <div className="ticket-digits">
                <span className="digit-box">{randomNumbers[0]}</span>
                <span className="digit-box">{randomNumbers[1]}</span>
                <span className="digit-box">{randomNumbers[2]}</span>
            </div>

            <button className="ticket-btn" onClick={generateThreeNumber}>
                Get New Ticket
            </button>

            {isWinning && (
                <div className="win-message">
                    🎉 Congratulations, You Won! 🎉
                </div>
            )}
        </div>
    );
}