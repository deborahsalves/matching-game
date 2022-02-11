import './index.css'
import PlayerTurn from '../../components/PlayerTurn'
import PlayerName from '../../components/PlayerName'
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${PlayerTurn()}
            ${PlayerName('Player 1')}
            ${PlayerScore()}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName('Player 2')}
        </header>
    `;
}

export default ScoreBoard;