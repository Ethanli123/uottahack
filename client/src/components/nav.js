import React from 'react';
import { Link } from 'react-router-dom'
import '../style/App.css';

function NavBar(props) {
    return (
        <div className="nav">
            <Link className='link' to='/'>Explore |</Link> 
            <Link className='link' to='/profile'>| Profile</Link>
        </div>
    );  
}

export default NavBar;