import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-157140327-1');
ReactGA.pageview(window.location.pathname + window.location.search);

WebFont.load({
    google: {
      families: [
        'Open Sans:300,300i,400,400i,600,600i',
        'Zhi Mang Xing: 400',
        'Overpass:200,300,400,500,600,700,900'
      ]
    }
  });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
