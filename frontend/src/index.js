import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import { AuthProvider } from './context/authcontext.js';
import { LeagueProvider } from './context/leaguecontext.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LeagueProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </LeagueProvider>
    </React.StrictMode>
);
