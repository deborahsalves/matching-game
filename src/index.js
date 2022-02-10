import CardGame from './CardGame';
import './styles/settings/colours.css';
import './styles/elements/base.css';
import './styles/generic/reset.css';

const $root = document.getElementById('root');
const cardGame = CardGame();

$root.insertAdjacentHTML('beforeend', cardGame);

