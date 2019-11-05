import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello there!</div>;
}

const DocumentNode = document.getElementById('app');
ReactDOM.render(<App />, DocumentNode);
