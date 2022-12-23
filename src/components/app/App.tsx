import React, { useState } from 'react';
import './App.scss';
import HomePage from '../pages/homePage/HomePage';
import GamePage from '../pages/gamePage/GamePage';

const App = (): JSX.Element => {
  const [gameBegun, setGameBegun] = useState<boolean>(false);
  const [theEndedGame, setTheEndedGame] = useState<boolean>(false);
  const [remuneration, setRemuneration] = useState<string>('');

  return (
    <main>
      {gameBegun ? (
        <GamePage setTheEndedGame={setTheEndedGame} setRemuneration={setRemuneration} setGameBegun={setGameBegun} />
      ) : (
        <HomePage theEndedGame={theEndedGame} remuneration={remuneration} setGameBegun={setGameBegun} />
      )}
    </main>
  );
};

export default App;
