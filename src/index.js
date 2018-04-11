import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDwKnd7CQEy4mqsRzyzpece4UIrIQbo788",
    authDomain: "host-6f10c.firebaseapp.com",
    databaseURL: "https://host-6f10c.firebaseio.com",
    projectId: "host-6f10c",
    storageBucket: "host-6f10c.appspot.com",
    messagingSenderId: "1053355341337"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
