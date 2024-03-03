import React, { useState } from 'react';
import './App.css';

function App() {
  const [moduleDescription, setModuleDescription] = useState('');

  function fetchModuleDescription() {
    const moduleCode = document.getElementById('textboxModName').value.toUpperCase();
    const url = `https://api.nusmods.com/v2/2022-2023/modules/${moduleCode}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setModuleDescription(data.description);
      })
      .catch((error) => {
        console.error('Error fetching module description:', error);
        setModuleDescription('Error fetching module description.');
      });
  }

  return (
    <div className="App">
      <div><input id="textboxModName" type="text"/></div>
      <input
        id="clickMe"
        type="button"
        value="Get Module Description"
        onClick={fetchModuleDescription}
      />
      <p>{moduleDescription}</p>
    </div>
  );
}

export default App;