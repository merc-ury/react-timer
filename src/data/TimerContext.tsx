import React, { useState, createContext } from 'react';
import { ITimer } from './Timer';

//export const TimerContext = createContext<[ITimer[], (newVal: ITimer[]) => void]>([[], () => {}]);
export const TimerContext = createContext<[ITimer[], React.Dispatch<React.SetStateAction<ITimer[]>>]>([[], () => {}]);

export const TimerProvider: React.FunctionComponent = (props) => {
    const [timerList, setTimerList] = useState<ITimer[]>([
        {
            title: 'Initial Timer',
            description: 'Your first timer!',
            interval: 60,
            isActive: false
        }
    ]);
    
    return (
        <TimerContext.Provider value={ [timerList, setTimerList] }>
            { props.children }
        </TimerContext.Provider>
    );
};