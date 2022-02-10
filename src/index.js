import BoardGame from './objects/BoardGame/index'
import './styles/settings/colours.css';
import './styles/elements/base.css';
import './styles/generic/reset.css';

const $root = document.getElementById('root');
const $htmlBoardGame = BoardGame(1);

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);

