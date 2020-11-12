import './App.css';
import React from 'react';
import Poll from './Poll';

const options = [
  { reponse: 'React' },
  { reponse: 'Vue' },
  { reponse: 'Angular' },
  { reponse: 'Svelte' },
];

const App = () => {
  return (
    <div className="App">
      <Poll options={options} />
    </div>
  );
};

export default App;
