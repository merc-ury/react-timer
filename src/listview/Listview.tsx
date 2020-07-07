import React, { FunctionComponent, useContext } from 'react';
import { TimerContext } from '../data/TimerContext';
import { ITimer } from '../data/timer';
import './Listview.css';

export const Listview: FunctionComponent = () => {
    const timers: ITimer[] = useContext<ITimer[]>(TimerContext);

    return (
        <div>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Interval</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        timers.map(timer => (
                            <tr>
                                <td>{ timer.title }</td>
                                <td>{ timer.description }</td>
                                <td>{ timer.interval }</td>
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