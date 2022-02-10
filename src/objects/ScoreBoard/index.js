import './index.css'
import PlayerName from '../../components/PlayerName/index'

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${PlayerName('Player 1')}
            ${PlayerName('Player 2')}
        </header>
    `;
}

export default ScoreBoard;