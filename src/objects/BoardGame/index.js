import './index.css';
import cards from './data'
import CardFrontBack from '../../components/CardFrontBack/index';

const BoardGame = (amountCards) => {
    const randomiseCards = (dataArray, returnArray = []) => {
        const randomisedArray = returnArray;
        let copiedArray = dataArray;
        const rand = Math.floor(Math.random() * copiedArray.length);
        const pickedArrayItem = copiedArray[rand];
        randomisedArray.push(pickedArrayItem);
        copiedArray.splice(rand, 1);
        return copiedArray.length === 0 ? randomisedArray : randomiseCards(copiedArray, randomisedArray);
    }

    const flipAndHideCards = ($activeCards) => {
        $activeCards.forEach((card) => card.classList.remove('-active'))
    }

    const swapCurrentPlayer = () => {
        const $playerTurn = document.querySelector('.player-turn');
        const currentPlayer = $playerTurn.getAttribute('data-currentPlayer');
        $playerTurn.setAttribute('data-currentPlayer', currentPlayer == 1 ? 2 : 1);
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $activeCards = $boardGame.querySelectorAll('.card-front-back.-active');
        if ($activeCards.length === 2) {
            setTimeout(() => {
                flipAndHideCards($activeCards);
                swapCurrentPlayer();
            }, 1000);
        }

    }

    const randomisedCards = randomiseCards(cards);
    const htmlCardsList = randomisedCards.map((card) => CardFrontBack(card.cardContent, card.cardAlt))
    // the $ symbols identifies renders elements
    const $htmlCards = htmlCardsList.join('');

    return `
        <section class="board-game" onClick="boardGame.handleClick()">
            ${$htmlCards}
        </section>`;

}

export default BoardGame;