import './index.css';
import CardGame from '../../components/CardGame/index';

const BoardGame = (amountCards) => {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);
    return `
        <section class="board-game">
            ${$htmlContent}
        </section>`;

}

export default BoardGame;