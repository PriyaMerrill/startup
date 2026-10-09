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
                            <div className='collapse navbar-collapse' id='navLinks'>
                                <ul className='navbar-nav ms-auto'>
                                    <li className='nav-item'><NavLink className='nav-link' to='today'>Today</NavLink></li>
                                    <li className='nav-item'><NavLink className='nav-link' to='week'>Week</NavLink></li>
                                    <li className='nav-item'><NavLink className='nav-link' to='groups'>Groups</NavLink></li>
                                    <li className='nav-item'><NavLink className='nav-link' to='inbox'>Inbox</NavLink></li>
                                    <li className='nav-item'><NavLink className='nav-link' to=''>Login</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Login />} exact />
                    <Route path="/today" element={<Today />} />
                    <Route path="/week" element={<Week />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer className='bg-dark text-light text-center py-3 mt-auto'>
                    <p className='mb-1'>Priya Merrill</p>
                    <a className='link-light' href="https://github.com/PriyaMerrill/startup">GitHub Repository</a>
                </footer>

            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container py-4 text-center">404: That page does not exist.</main>;
}