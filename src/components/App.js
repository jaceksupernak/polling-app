import './App.css';
import React from 'react';
import Poll from './Poll';

const pollOptions = [
  { reponse: 'React' },
  { reponse: 'Vue' },
  { reponse: 'Angular' },
  { reponse: 'Svelte' },
];

const App = () => {
  return (
    <div className="App">
      <Poll options={pollOptions} />
    </div>
  );
};

export default App;
