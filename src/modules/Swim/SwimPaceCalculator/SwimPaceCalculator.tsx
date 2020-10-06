import React, { ChangeEvent, ReactElement, useState } from 'react';
import TimeField from 'react-simple-timefield';
import styles from './SwimPaceCalculator.module.scss';
import { calcSwimPace, convertTimeToString, parseTime } from './utils';

export const SwimPaceCalculator = (): ReactElement => {
    const [distance, setDistance] = useState('0');
    const [time, setTime] = useState('00:00:00');
    const [pace, setPace] = useState('00:00:00');

    const calculateSwimPace = (): void => {
        setPace(convertTimeToString(calcSwimPace(parseTime(time), Number(distance))));
    };

    return (
        <div className={styles.swimPaceContainer}>
            <h1>Swim Pace Calculator</h1>
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
                <TimeField
                    showSeconds={true}
                    value={time}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setTime(e.target.value)}
                />
            </label>
            <label>
                Pace
                <TimeField
                    showSeconds={true}
                    value={pace}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setPace(e.target.value)}
                />
            </label>
            <button onClick={(): void => calculateSwimPace()}>
                Calculate Pace
            </button>
        </div>
    );
};