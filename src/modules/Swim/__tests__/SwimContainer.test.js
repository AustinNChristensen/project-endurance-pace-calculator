import React from 'react';
import { render, screen } from '@testing-library/react';
import { SwimContainer } from '../SwimContainer';

describe('SwimContainer', () => {
    const setupRTL = () => {
        return render(<SwimContainer />);
    };

    test('Renders Swim Pace Calculator Module', () => {
        setupRTL();

        expect(screen.getByRole('heading', { name: 'Swim Pace Calculator' })).toBeInTheDocument();
    });
});