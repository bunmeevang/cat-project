import React from 'react';
import './Header.css';
import { Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header-main">
            <h1 className="cats">Cats</h1>
            <Link to="/" className="homeLink">Home</Link>
            <Link to="/breed" className="breedLink">Breeds</Link>
        </div>
    )
}

export default Header