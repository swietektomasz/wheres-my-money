import React from 'react';
import ReactDOM from 'react-dom';
import styles from './app.module.scss';

function App() {
  return <div className={styles.app}>Hello there!</div>;
}

const DocumentNode = document.getElementById('app');
ReactDOM.render(<App />, DocumentNode);
