import { useSelector } from 'react-redux';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {AuthContext} from '../../AuthContext';

import './menu.css';

function Menu () {

    let {user} = useContext(AuthContext);
    const menu = useSelector((state) => state.menu);
 
    return (
        <ul className="menu-main">
            {menu.map((item, index) => (
                <li key={index}><NavLink to={item.url}>{item.name}</NavLink></li>
            ))}
            {user && (<li>{user.login}</li>)}
        </ul>
    );
}

export default Menu;