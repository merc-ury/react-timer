import React, { useState, createContext } from 'react';
import { ITimer } from './Timer';

type TimerState = ITimer[];
type TimerStateUpdate = React.SetStateAction<TimerState>;
type TimerDispatch = React.Dispatch<TimerStateUpdate>;

export const TimerContext = createContext<[TimerState, TimerDispatch]>([
    [],
    () => {},
]);

export const TimerProvider: React.FunctionComponent = (props) => {
    const state = useState<ITimer[]>([
        {
            title: 'Initial Timer',
            description: 'Your first timer!',
            interval: 60,
            isActive: false
        }
    ]);
    
    return (
        <TimerContext.Provider value={state}>
            { props.children }
        </TimerContext.Provider>
    );
};
