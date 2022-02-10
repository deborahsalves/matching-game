import './index.css';
import CardGame from '../CardGame/index'

const CardFrontBack = () => {
    return `
        <article class="card-front-back">
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