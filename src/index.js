import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/root/App';
import './public/css/bootstrap.min.css';
import './public/css/animate.css';

const Index = () =>
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

ReactDOM.render(<Index />, document.getElementById('index'));
