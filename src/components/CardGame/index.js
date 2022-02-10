import './index.css'

const CardGame = (cardContent = 'alura-pixel', cardAlt = 'Logo da Alura') => {
    return `
        <article class="card-game">
            <img src="images/${cardContent}.png" class="card-image" alt="${cardAlt}">
        </article>
    `
}

export default CardGame;