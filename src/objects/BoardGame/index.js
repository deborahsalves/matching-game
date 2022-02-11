import './index.css';
import cards from './data'
import CardFrontBack from '../../components/CardFrontBack/index';

const BoardGame = (amountCards) => {
    const htmlCardsList = cards.map((card) => CardFrontBack(card.cardContent, card.cardAlt))
    // the $ symbols identifies renders elements
    const $htmlCards = htmlCardsList.join('');

    return `
        <section class="board-game">
            ${$htmlCards}
        </section>`;

}

export default BoardGame;