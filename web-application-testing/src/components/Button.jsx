import React from 'react';

const Button = props => {
  console.log('button', props);
  const { strike, setStrike, ball, setBall, setFoul, setHit } = props;
  return (
    <div className='container'>
      <button
      data-testid="strikeText"
        className='button'
        onClick={() => {
          if (strike === 3) {
            setStrike(0);
            setBall(0);
          } else {
            setStrike(strike + 1);
          }
          
            /* setStrike() */
          
        }}
      >
        STRIKE
      </button>

      <button
        className='button'
        onClick={() => {
          if (ball === 4) {
            setStrike(0);
            setBall(0);
          } else {
            setBall(ball + 1);
          }
          
            /* setBall() */
          
        }}
      >
        BALL
      </button>

      <button
        className='button'
        onClick={() => {
          if (strike !== 2) {
            setStrike(strike + 1);
          }

          
            /* setFoul() */
          
        }}
      >
        FOUL
      </button>
      <button
        className='button'
        onClick={() => {
          setStrike(0);
          setBall(0);

          
            /* setHit() */
          
        }}
      >
        HIT
      </button>
    </div>
  );
};

export default Button;
