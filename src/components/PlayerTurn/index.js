import './index.css';

const PlayerTurn = (currentPlayer = 1) => {
    return `
        <img class="player-turn" data-currentPlayer="${currentPlayer}" src="images/icon-arrow-down.png" alt="Seta para baixo indicativa de quem joga" />
    `
}

export default PlayerTurn;