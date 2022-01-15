import React from 'react';
import ReactDOM from 'react-dom';
import App from './root/App';
import './index.css'

ReactDOM.render(
  <React.StrictMode style={{padding:'0px',margin:'0px' ,boxSizing:'border-box'}}>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


