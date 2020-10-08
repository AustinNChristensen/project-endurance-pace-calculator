import {
    calcAverageSwimPace, calcTotalSwimDistance,
    calcTotalSwimTime,
    convertSecondsToTime,
    convertTimeToSeconds,
    convertTimeToString,
    parseTime
} from '../utils';

describe('SwimUtils', () => {
    describe('parseTime', () => {
        test('returns time object when given string', () => {
            expect(parseTime('01:02:03')).toEqual({
                hours: 1,
                minutes: 2,
                seconds: 3
            });
        });
    });

    describe('convertTimeToString', () => {
        test('returns string when given time object', () => {
            expect(convertTimeToString({
                hours: 2,
                minutes: 3,
                seconds: 4
            })).toEqual('02:03:04');
        });
    });

    describe('calcSwimPace', () => {
        test('handles 100 yard distance', () => {
            expect(calcAverageSwimPace(
                {
                    hours: 0,
                    minutes: 1,
                    seconds: 30
                },
                100)).toEqual(
                {
                    hours: 0,
                    minutes: 1,
                    seconds: 30
                }
            );
        });

        test('handles 500 yard distance', () => {
            expect(calcAverageSwimPace(
                {
                    hours: 0,
                    minutes: 10,
                    seconds: 0
                },
                500)).toEqual(
                {
                    hours: 0,
                    minutes: 2,
                    seconds: 0
                }
            );
        });

        test('handles 1000 yard distance', () => {
            expect(calcAverageSwimPace(
                {
                    hours: 0,
                    minutes: 8,
                    seconds: 30
                },
                1000)).toEqual(
                {
                    hours: 0,
                    minutes: 0,
                    seconds: 51
                }
            );
        });

        test('handles 2000 yard distance', () => {
            expect(calcAverageSwimPace(
                {
                    hours: 1,
                    minutes: 0,
                    seconds: 0
                },
                2000)).toEqual(
                {
                    hours: 0,
                    minutes: 3,
                    seconds: 0
                }
            );
        });
    });

    describe('calcSwimTime', () => {
        test('handles seconds responses', () => {
            expect(calcTotalSwimTime({
                hours: 0,
                minutes: 0,
                seconds: 4
            },
            100)).toEqual((
                {
                    hours: 0,
                    minutes: 0,
                    seconds: 4
                }
            ));
        });

        test('handles minutes responses', () => {
            expect(calcTotalSwimTime({
                hours: 0,
                minutes: 2,
                seconds: 8
            },
            1500)).toEqual((
                {
                    hours: 0,
                    minutes: 32,
                    seconds: 0
                }
            ));
        });

        test('handles hours responses', () => {
            expect(calcTotalSwimTime({
                hours: 0,
                minutes: 2,
                seconds: 8
            },
            4000)).toEqual((
                {
                    hours: 1,
                    minutes: 25,
                    seconds: 20
                }
            ));
        });
    });

    describe('calcSwimDistance', () => {
        test('Handles less than 100', () => {
            expect(calcTotalSwimDistance(
                {
                    hours: 0,
                    minutes: 0,
                    seconds: 45
                },
                {
                    hours: 0,
                    minutes: 1,
                    seconds: 30
                }
            )).toEqual('50');
        });

        test('Handles less than 1000', () => {
            expect(calcTotalSwimDistance(
                {
                    hours: 0,
                    minutes: 10,
                    seconds: 0
                },
                {
                    hours: 0,
                    minutes: 1,
                    seconds: 58
                }
            )).toEqual('508');
        });

        test('Handles less than 100000', () => {
            expect(calcTotalSwimDistance(
                {
                    hours: 1,
                    minutes: 15,
                    seconds: 30
                },
                {
                    hours: 0,
                    minutes: 1,
                    seconds: 58
                }
            )).toEqual('3838');
        });
    });

    describe('convertTimeToSeconds', () => {
        test('Handles hours to seconds', () => {
            expect(convertTimeToSeconds({
                hours: 1,
                minutes: 0,
                seconds: 0
            })).toEqual(3600);

            expect(convertTimeToSeconds({
                hours: 2,
                minutes: 0,
                seconds: 0
            })).toEqual(7200);

            expect(convertTimeToSeconds({
                hours: 3,
                minutes: 0,
                seconds: 0
            })).toEqual(10800);
        });

        test('Handles minutes to seconds', () => {
            expect(convertTimeToSeconds({
                hours: 0,
                minutes: 1,
                seconds: 0
            })).toEqual(60);

            expect(convertTimeToSeconds({
                hours: 0,
                minutes: 5,
                seconds: 0
            })).toEqual(300);

            expect(convertTimeToSeconds({
                hours: 0,
                minutes: 59,
                seconds: 0
            })).toEqual(3540);
        });

        test('Handles seconds to seconds', () => {
            expect(convertTimeToSeconds({
                hours: 0,
                minutes: 0,
                seconds: 0
            })).toEqual(0);

            expect(convertTimeToSeconds({
                hours: 0,
                minutes: 0,
                seconds: 31
            })).toEqual(31);

            expect(convertTimeToSeconds({
                hours: 0,
                minutes: 0,
                seconds: 48
            })).toEqual(48);

            expect(convertTimeToSeconds({
                hours: 0,
                minutes: 0,
                seconds: 60
            })).toEqual(60);
        });

        test('Handles complex input to seconds', () => {
            expect(convertTimeToSeconds({
                hours: 2,
                minutes: 30,
                seconds: 35
            })).toEqual(9035);
        });
    });

    describe('convertSecondsToTime', () => {
        test('Handles times less than a minute', () => {
            expect(convertSecondsToTime(30)).toEqual({
                hours: 0,
                minutes: 0,
                seconds: 30
            });

            expect(convertSecondsToTime(59)).toEqual({
                hours: 0,
                minutes: 0,
                seconds: 59
            });
        });

        test('Handles times less than an hour', () => {
            expect(convertSecondsToTime(91)).toEqual({
                hours: 0,
                minutes: 1,
                seconds: 31
            });

            expect(convertSecondsToTime(2500)).toEqual({
                hours: 0,
                minutes: 41,
                seconds: 40
            });
        });

        test('Handles times over an hour', () => {
            expect(convertSecondsToTime(7200)).toEqual({
                hours: 2,
                minutes: 0,
                seconds: 0
            });
            expect(convertSecondsToTime(7199)).toEqual({
                hours: 1,
                minutes: 59,
                seconds: 59
            });
        });
    });
});