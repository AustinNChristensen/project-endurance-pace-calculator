interface ITime {
    hours: number;
    minutes: number;
    seconds: number;
}

export const parseTime = (input: string): ITime => {
    const time = input.split(':');

    if (time.length === 3) {
        return {
            hours: Number(time[0]),
            minutes: Number(time[1]),
            seconds: Number(time[2])
        };
    } else {
        return {
            hours: 0,
            minutes: Number(time[0]),
            seconds: Number(time[1])
        };
    }
};

export const convertTimeToString = (input: ITime): string => {
    return `${input.hours > 9 ? input.hours : `0${input.hours}`}:${input.minutes > 9 ? input.minutes : `0${input.minutes}`}:${input.seconds > 9 ? input.seconds : `0${input.seconds}`}`;
};

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

export const calcAverageSwimPace = (time: ITime, distance: number): ITime => {
    const seconds = convertTimeToSeconds(time);

    const secondsPerHundred = seconds / distance * 100;

    return convertSecondsToTime(secondsPerHundred);
};

export const calcTotalSwimTime = (pace: ITime, distance: number): ITime => {
    const seconds = convertTimeToSeconds(pace);

    const totalTime = seconds * distance / 100;

    return convertSecondsToTime(totalTime);
};

export const calcTotalSwimDistance = (time: ITime, pace: ITime): string => {
    const timeInSeconds = convertTimeToSeconds(time);
    const paceInSeconds = convertTimeToSeconds(pace);

    return (Math.floor(timeInSeconds / paceInSeconds * 100)).toString();
};