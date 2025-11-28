// src/index.js

import './styles/main.css';
import App from './app';

const rootElement = document.getElementById('root');
const app = new App(rootElement);
app.init();