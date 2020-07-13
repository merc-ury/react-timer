import React, { FunctionComponent, useEffect, useContext } from 'react';
import { TimerContext } from '../data/TimerContext';
import { ITimer } from '../data/Timer';
import './Listview.css';

export const Listview: FunctionComponent = () => {
    let x: string = 'btn btn-success';
    const timers = useContext(TimerContext)[0];

    const getStatus = (timer: ITimer): boolean => {
        return timer.isActive;
    };

    const changeButtonClass = (timer: ITimer): void => {
        timer.isActive = !timer.isActive;
    };

    const buttonClass = (active: boolean): string => {
        return (active ? 'btn btn-danger' : 'btn btn-success');
    };

    useEffect(() => {
        
    }, [timers]);

    return (
        <div>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Interval (sec.)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // This iterates through every ITimer object and prints it out
                        timers.map(timer => (
                            <tr>
                                <td>{ timer.title }</td>
                                <td>{ timer.description }</td>
                                <td>{ timer.interval }</td>
                                <td>
                                    <button className={ buttonClass(timer.isActive) }
                                            onClick={ () => changeButtonClass(timer) }>
                                        { getStatus(timer) ? "Stop" : "Start" }
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="float-right">
                Tasks: { timers.length }
            </div>
        </div>
    );
};