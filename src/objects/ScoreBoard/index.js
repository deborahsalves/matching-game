import './index.css'
import PlayerName from '../../components/PlayerName/index'
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${PlayerName('Player 1')}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName('Player 2')}
        </header>
    `;
}

export default ScoreBoard;