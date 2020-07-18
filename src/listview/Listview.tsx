import React, { FunctionComponent, useContext } from 'react';
import { TimerContext } from '../data/TimerContext';
import { ITimer } from '../data/Timer';
import './Listview.css';

export const Listview: FunctionComponent = () => {
    const [timers, setTimers] = useContext(TimerContext);

    const updateStatus = (timer: ITimer) => {
        timers.map(t => {
            if (t === timer)
                t.isActive = !timer.isActive;

            return t;
        });

        setTimers([...timers]);
    };

    const deleteTimer = (timer: ITimer) => {
        setTimers(timers.filter(t => t !== timer));
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
                                    <button className={ timer.isActive ? 'btn btn-danger' : 'btn btn-success' }
                                            onClick={ () => updateStatus(timer) }>
                                        { timer.isActive ? 'Stop' : 'Start' }
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-primary"
                                            onClick={ () => deleteTimer(timer) }>
                                        Delete
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