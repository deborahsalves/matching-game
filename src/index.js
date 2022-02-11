import './styles/generic/reset.css';
import './styles/settings/colours.css';
import './styles/elements/base.css';
import BoardGame from './objects/BoardGame/index'
import ScoreBoard from './objects/ScoreBoard/index';
import PlayerTurn from './components/PlayerTurn';

const $root = document.getElementById('root');

$root.insertAdjacentHTML(
    'beforeend', 
    `
        ${PlayerTurn()}
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);

