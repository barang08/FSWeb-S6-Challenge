import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Karakter from './components/Karakter';

const App = () => {

  const [characters, setCharacters] = useState([])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(' https://swapi.dev/api/people/')
      .then(function (response) {
        setCharacters(response.data)

        console.log(response);
      })
      .catch(function (error) {

        console.log(error);
      })
      .finally(function () {

      })
  }, [])





  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      {
        characters.map((karakter, index) => (
          <Karakter key={index} karakter={karakter} />
        ))}




    </div>
  );
}

export default App;
