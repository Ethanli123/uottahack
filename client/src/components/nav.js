import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import '../style/App.css';
import profile from '../images/santatrump.jpg';


function NavBar(props) {
    return (
        <div className="nav">
          <div className="nav-back" />
          <Link className="explore-challenges" style={{ textDecoration: 'none' }} to='/'> Explore Challenges
              <hr className="nav-hr-ec" />
          </Link>

          <div className="profile">
            <Link className="profile" to ='./profile'>
              <img className="nav-profile" src={profile}></img>
            </Link>
          </div>
          <Link to='/add-challenges' className="add-challenges" style={{ textDecoration: 'none' }}> Add Challenges
              <hr className="nav-hr-ac" />
          </Link>
        </div>
    );
}

export default NavBar;
