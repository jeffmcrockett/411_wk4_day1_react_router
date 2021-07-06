import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import Router from './Router';

import * as serviceWorker from './serviceWorker';

const Main = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);


serviceWorker.unregister();
