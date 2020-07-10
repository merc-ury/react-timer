import React, { FunctionComponent, useContext, useState, FormEvent } from 'react';
import { TimerContext } from '../data/TimerContext';
import { ITimer } from '../data/Timer';
import './CreateTimer.css';

export const CreateTimer: FunctionComponent = () => {

    const [timerList, setTimerList] = useContext(TimerContext);
    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [int, setInterval] = useState<number>(0);

    const updateName = (e: FormEvent<HTMLInputElement>): void => {
        setName(e.currentTarget.value);
    };

    const updateDesc = (e: FormEvent<HTMLInputElement>): void => {
        setDesc(e.currentTarget.value);
    };

    const updateInterval = (e: FormEvent<HTMLInputElement>): void => {
        setInterval(Number(e.currentTarget.value));
    };

    const addTimer = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const t: ITimer = {
            title: name,
            description: desc,
            interval: int,
            isActive: false
        };

        setTimerList(prev => [...prev, t]);
    };
    
    return (
        <div>
            <br />
            <form onSubmit={ addTimer }>
                <div className="form-group">
                    <label className="centered" htmlFor="timer-name">Name: </label>
                    <input type="text" className="form-control" id="timer-name" placeholder="A name for your task!"
                           value={ name }
                           onChange={ updateName } 
                           required />
                    <br />
                    <label className="centered" htmlFor="timer-description">Description: </label>
                    <input type="text" className="form-control" id="timer-description" placeholder="A description for your task!" 
                           value={ desc }
                           onChange={ updateDesc } />
                    <br />
                    <label className="centered" htmlFor="timer-interval">Interval: </label>
                    <input type="text" className="form-control" id="timer-interval" placeholder="An interval for your task!" 
                           value={ int }
                           onChange={ updateInterval }
                           required />
                    <br />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};