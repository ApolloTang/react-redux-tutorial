import React from 'react';
import reactDOM from 'react-dom';
import App from './app';

const reactContainer = document.getElementById('react-container');
reactDOM.render(<App data={['1','2','3','4']} />, reactContainer);

