import React, { FunctionComponent, useContext } from 'react';
import { TimerContext } from '../data/TimerContext';
import { ITimer } from '../data/Timer';
import './Listview.css';

export const Listview: FunctionComponent = () => {
    const timers = useContext(TimerContext)[0];

    const getStatus = (timer: ITimer): boolean => {
        return timer.isActive;
    };

    const startTimer = (timer: ITimer): void => {
        timer.isActive = true;
    };

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
                                    <button className={ getStatus(timer) ? "btn btn-danger" : "btn btn-success" }
                                            onClick={ () => startTimer(timer) }>
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