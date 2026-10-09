import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Today } from './today/today';
import { Week } from './week/week';
import { Groups } from './groups/groups';
import { Inbox } from './inbox/inbox';

export default function App() {
    return (
        <BrowserRouter>
            <div className='body'>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className='container'>
                            <NavLink className='navbar-brand fw-bold' to=''>Doable</NavLink>
                            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navLinks' aria-controls='navLinks' aria-expanded='false' aria-label='Toggle nav'>
                                <span className='navbar-toggler-icon'></span>
                            </button>
                        </div>
                    </nav>
                </header>
            </div>
        </BrowserRouter>
    );
}