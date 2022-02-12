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
    const randomisedCards = randomiseCards(cards);
    console.log(randomisedCards);
    const htmlCardsList = randomisedCards.map((card) => CardFrontBack(card.cardContent, card.cardAlt))
    // the $ symbols identifies renders elements
    const $htmlCards = htmlCardsList.join('');

    return `
        <section class="board-game">
            ${$htmlCards}
        </section>`;

}

export default BoardGame;