import './App.css';
import React from 'react';
import Poll from './Poll';

const options = [
  { response: 'React' },
  { response: 'Vue' },
  { response: 'Angular' },
  { response: 'Svelte' },
];

const App = () => {
  return (
    <div className="App">
      <Poll options={options} />
    </div>
  );
};

export default App;
