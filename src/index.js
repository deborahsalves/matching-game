import './styles/generic/reset.css';
import './styles/settings/colours.css';
import './styles/elements/base.css';
import BoardGame from './objects/BoardGame/index'
import ScoreBoard from './objects/ScoreBoard/index';

const $root = document.getElementById('root');

$root.insertAdjacentHTML(
    'beforeend', 
    `
        ${ScoreBoard()}
        ${BoardGame(2)}
    `
);

