import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: FunctionComponent = () => {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <Link className="nav-link" to="/">Timers</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>
    );
};