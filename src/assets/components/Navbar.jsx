import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#0d0d0d' }}>
            <div className="container">
                <NavLink className="navbar-brand fw-bold" to="/">
                    Kodigo <span className="text-success">Music</span>
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    aria-controls="mainNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/library" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Mi Biblioteca</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Registrarse</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
