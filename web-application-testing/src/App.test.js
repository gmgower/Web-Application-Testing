import React from 'react';

import {render} from '@testing-library/react';

import App from './App';

import {scoreStrike} from './App'



it('App renders without crashing', () => {

  render(<App />)
});

test('scoreStrike adds 1 to the strike button and resets to 0 when it reaches 3 ', () => {
  expect(scoreStrike(0)).toBe(1);
  expect(scoreStrike(1)).toBe(2);
  // expect(scoreStrike(2)).toBe(3);
  // expect(scoreStrike(3)).toBe(4);
})

test("Contains STRIKE button", () => {
  const {getByTestId} = render(<App />)

  getByTestId(/strike/i);
})

