import React, {useState} from 'react';
import './App.css';

import  Button from './components/Button.jsx'
import  ScoreBoard from './components/ScoreBoard.jsx'

// isolated function
export const scoreStrike = (strike) => {
  if(strike === 2) {
    return 0;

  }
  return strike + 1;
}


function App() {
const [strike, setStrike] = useState(0);
const [ball, setBall] = useState(0);

// const scoreStrike = () => {
  // if (strike === 2){
  //   setStrike(0);
  //   setBall(0);
  // } else {
  //   setStrike(strike + 1)
  // }
// } 

// const scoreBall = () => {
  // if (ball === 3){
  //   setStrike(0);
  //   setBall(0);
  // } else {
  //   setBall(ball + 1)
  // }
// }

// const scoreFoul = () => {
  // if(strike !== 2) {
  //   setStrike(strike + 1)
  // }
// }

// const scoreHit = () => {
  // setStrike(0)
  // setBall(0)
// }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Baseball App</h1>
        
        <ScoreBoard 
          strike={strike} 
          ball={ball}

          />

        <Button 
          ball={ball}
          strike={strike}
          setStrike={setStrike}
          setBall={setBall}

          /* setStrike={scoreStrike} */
          /* setBall={scoreBall} */

          /* setFoul={scoreFoul}
          setHit={scoreHit} */
          />
      
      </header>
    </div>
  );
}

export  default App;
