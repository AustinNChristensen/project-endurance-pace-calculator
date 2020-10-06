import { render, screen } from '@testing-library/react';
import React from 'react';
import { SwimPaceCalculator } from '../SwimPaceCalculator';

describe('PaceCalculator', () => {
    const setupRTL = () => {
        return render(<SwimPaceCalculator />);
    };

    test('Renders Pace Calculator Header', () => {
        setupRTL();

        expect(screen.getByRole('heading', { name: 'Pace Calculator' })).toBeInTheDocument();
    });

    describe('Renders 3 inputs', () => {
        test('Distance field is rendered', () => {
            setupRTL();

            const input = screen.getByRole('textbox', { name: /Distance/i });

            expect(input).toHaveValue('0');
        });

        test('Time field is rendered', () => {
            setupRTL();

            const input = screen.getByRole('textbox', { name: /Time/i });

            expect(input).toHaveValue('00:00:00');
        });

        test('Pace field is rendered', () => {
            setupRTL();

            const input = screen.getByRole('textbox', { name: /Pace/i });

            expect(input).toHaveValue('00:00');
        });
    });
});