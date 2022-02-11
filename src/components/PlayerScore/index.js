import './index.css';

const PlayerScore = (points = 0) => {
    return `
        <ol data-points="${points}" class="player-score">
            <li class="pointer">Um</li>
            <li class="pointer">Dois</li>
            <li class="pointer">Três</li>
        </ol>
    `;
}

export default PlayerScore;