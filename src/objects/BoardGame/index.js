import CardGame from '../../components/CardGame/index'

const BoardGame = (amountCards) => {
    const $htmlBoardGame = CardGame().repeat(amountCards);
    return $htmlBoardGame;

}

export default BoardGame;