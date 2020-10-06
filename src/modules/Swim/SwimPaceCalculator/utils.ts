interface ITime {
    hours: number;
    minutes: number;
    seconds: number;
}

export const convertTimeToSeconds = ({ hours, minutes, seconds }: ITime): number => {
    return (hours * 3600) + (minutes * 60) + seconds;
};

export const convertSecondsToTime = (secondsInput: number): ITime => {
    let seconds = secondsInput;
    let hours = 0;
    let minutes = 0;

    if (secondsInput > 3600) {
        hours = Math.floor(seconds / 3600);
        seconds %= 3600;
    }

    if (seconds > 60) {
        minutes = Math.floor(seconds / 60);
        seconds %= 60;
    }

    return {
        hours,
        minutes,
        seconds
    };
};

export const calcSwimPace = (time: ITime, distance: number): ITime => {
    const seconds = convertTimeToSeconds(time);

    const secondsPerHundred = seconds / distance * 100;

    return convertSecondsToTime(secondsPerHundred);
};