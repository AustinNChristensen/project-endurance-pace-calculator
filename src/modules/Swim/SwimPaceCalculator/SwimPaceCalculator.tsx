import React, { ChangeEvent, ReactElement, useState } from 'react';

export const SwimPaceCalculator = (): ReactElement => {
    const [distance, setDistance] = useState('0');
    const [time, setTime] = useState('00:00:00');
    const [pace, setPace] = useState('00:00');
    return (
        <div>
            <h1>Pace Calculator</h1>
            <label>
                Distance
                <input
                    type='text'
                    value={distance}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setDistance(e.target.value)}
                />
            </label>
            <label>
                Time
                <input
                    type='text'
                    value={time}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setTime(e.target.value)}
                />
            </label>
            <label>
                Pace
                <input
                    type='text'
                    value={pace}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setPace(e.target.value)}
                />
            </label>
        </div>
    );
};