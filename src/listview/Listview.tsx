import React, { FunctionComponent, useContext } from 'react';
import { TimerContext } from '../data/TimerContext';
import { ITimer } from '../data/ITimer';
import './Listview.css';
import { Timer } from '../timer/Timer';

export const Listview: FunctionComponent = () => {
    const [timers, setTimers] = useContext(TimerContext);

    const updateStatus = (timer: ITimer) => {
        timers.map(t => {
            if (t.id === timer.id)
                t.isActive = !timer.isActive;

            return t;
        });

        setTimers([...timers]);
    };

    const deleteTimer = (timer: ITimer) => {
        setTimers(timers.filter(t => t.id !== timer.id));
    };

    const clearTimers = () => {
        setTimers([]);
    };

    return (
        <div>
            <br />
            <button className="float-right btn btn-info"
                    onClick={ () => clearTimers() }>
                Clear
            </button>
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
                        // This iterates through every ITimer object and prints out a row
                        // TODO: separate into Timer components to avoid capturing closures
                        timers.map(timer => (
                            <Timer timer={ timer } updateStatus={ updateStatus } deleteTimer={ deleteTimer }/>
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