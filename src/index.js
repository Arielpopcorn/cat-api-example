import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import Api from './APIpractice/Api';


ReactDOM.render(<Router>
    <div>
        <Route path="/api" component={Api}/>
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
