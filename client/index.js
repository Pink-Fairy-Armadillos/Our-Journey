import React from 'react'
//const React = require('react')
import { render } from 'react-dom';
//const { render } = require('react-dom');
import App from './components/Map';
//const App = require('./client/App');

render(<App />, document.querySelector('#app'));