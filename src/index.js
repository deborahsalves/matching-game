import './styles/generic/reset.css';
import './styles/settings/colours.css';
import './styles/elements/base.css';
import BoardGame from './objects/BoardGame/index'
import PlayerName from './components/PlayerName';

const $root = document.getElementById('root');

$root.insertAdjacentHTML(
    'beforeend', 
    `
        ${PlayerName('Player 1')}
        ${PlayerName('Player 2')}
        ${BoardGame(6)}
    `
);

