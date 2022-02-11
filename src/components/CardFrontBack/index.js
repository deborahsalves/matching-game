import './index.css';
import CardGame from '../CardGame/index'

const CardFrontBack = () => {
    /* in order to NOT overwrite it with the handleClick of another function
    we create a NAMESPACE in the global scope to store this handleClick */
    window.cardFrontBack = {};
    // then just place the function in that namespace
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        $cardFrontBack.classList.toggle('-active');
    }

    return `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame('javascript', 'Logo do JS')}
            </div>
        </article>
    `
}

export default CardFrontBack;