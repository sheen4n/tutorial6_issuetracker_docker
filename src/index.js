import React from 'react';
import ReactDOM from 'react-dom/client';
import IssueList from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IssueList />
  </React.StrictMode>,
);
