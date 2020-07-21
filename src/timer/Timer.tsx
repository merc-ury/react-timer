import React from 'react';
import { ITimer } from '../data/ITimer';

interface IProps {
    timer: ITimer;
    updateStatus: (timer: ITimer) => void;
    deleteTimer: (timer: ITimer) => void;
}

export const Timer: React.FunctionComponent<IProps> = ({ timer, updateStatus, deleteTimer }) => {
    return (
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
    );
};