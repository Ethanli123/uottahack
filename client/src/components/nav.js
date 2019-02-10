import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import '../style/App.css';

function NavBar(props) {
    return (
        <div className="nav">
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <Link className='link' to='/'>Explore Challenges</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link className='link' to='/profile'>Profile</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link className='link' to='/add-challenges'>Add Challenges</Link>
                </Menu.Item>
            </Menu>
        </div>
    );  
}

export default NavBar;