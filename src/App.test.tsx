import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders Swim Pace Calculator Heading', () => {
  render(<App />);

  expect(screen.getByText('Swim Pace Calculator')).toBeInTheDocument();

});
