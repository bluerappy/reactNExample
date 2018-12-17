import ReactDOM from 'react-dom';
import React, { setGlobal } from 'reactn';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

setGlobal({
    monstersCards: [
        {"name": "Slime",
         "power": 1,
         "element": "Normal",
         "img": "http://image.noelshack.com/fichiers/2018/45/3/1541587423-slime.png"},
         {"name": "Meta Slime",
          "power": 2,
          "element": "Abnormal",
          "img": "http://image.noelshack.com/fichiers/2018/45/3/1541598143-feralslime.png"},
    ],
    items: [],
    CurrentLevel: 1,
  });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
