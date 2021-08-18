import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ImageState from './ContextAPI/ImageState';

ReactDOM.render(
  <ImageState>
    <App />
  </ImageState>,
  document.getElementById('root')
);

