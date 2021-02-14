import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const loader = document.querySelector('.loader');

const show_loader = () => loader.classList.remove('loader--hide');
const hide_loader = () => loader.classList.add('loader--hide');

ReactDOM.render(<App hide_loader={hide_loader} show_loader={show_loader}/>, document.getElementById('root'));