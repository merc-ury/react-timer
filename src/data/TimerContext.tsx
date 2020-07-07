import React, { useState, createContext } from 'react';
import { ITimer } from './timer';

export const TimerContext = createContext<ITimer[]>([]);

export const TimerProvider: React.FunctionComponent = (props) => {
    const [timerList, setTimerList] = useState<ITimer[]>([
        {
            title: 'Bacon',
            interval: 5000
        },
        {
            title: 'Eggs',
            interval: 3000
        },
        {
            title: 'Bread',
            description: 'Just the right amount of toast',
            interval: 4000
        }
    ]);
    
    return (
        <TimerContext.Provider value={ timerList }>
            { props.children }
        </TimerContext.Provider>
    );
};