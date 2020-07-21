import React, { useState, createContext } from 'react';
import { ITimer } from './ITimer';

type TimerStateUpdate = React.SetStateAction<ITimer[]>;
type TimerDispatch = React.Dispatch<TimerStateUpdate>;

export const TimerContext = createContext<[ITimer[], TimerDispatch]>([
    [],
    () => {},
]);

export const TimerProvider: React.FunctionComponent = (props) => {
    const state = useState<ITimer[]>([
        {
            id: 1,
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
