import React from 'react'
import { Link } from 'react-router-dom';



const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Coinvest</Link>
            </div>
            <ul className="nav">
                <li><Link className="navlink" to="/watchlist">Watchlist</Link></li>
                <li><Link className="navlink" to="/create/watchlist">Create watchlist</Link></li>
                <li><Link className="navlink" to="/">Dashboard</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
