import { SwimContainer } from '../SwimContainer';
import React from 'react';
import { render, screen } from '@testing-library/react';


describe('SwimContainer', () => {
    const setupRTL = () => {
        return render(<SwimContainer />);
    }

    test('Renders Swim Pace Calculator Module', () => {
        setupRTL();

        expect(screen.getByRole('heading', { name: 'Pace Calculator'})).toBeInTheDocument();
    });
});