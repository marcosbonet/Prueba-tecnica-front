import React from 'react';
import './index.css';
import { App } from './feature/components/app';
import { Provider } from 'react-redux';
import { appStore } from './feature/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
window.React = React;
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={appStore}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);
