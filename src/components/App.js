import './App.css';
import React from 'react';
import Poll from './Poll';

const options = [
  { response: 'React', itemId: 1 },
  { response: 'Vue', itemId: 2 },
  { response: 'Angular', itemId: 3 },
  { response: 'Svelte', itemId: 4 },
];

const App = () => {
  return (
    <div className="App">
      <Poll options={options} />
    </div>
  );
};

export default App;
