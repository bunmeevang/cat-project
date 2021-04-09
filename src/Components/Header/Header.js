import React from 'react';
import './Header.css';
import { Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header-main">
            <h1>Cats</h1>
            <Link to="/">Home</Link>
            <Link to="/breed">Breeds</Link>
        </div>
    )
}

export default Header