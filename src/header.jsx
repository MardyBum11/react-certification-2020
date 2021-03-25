import React from 'react';
import {Input, Head} from './components/header.js';
import ToggleSwitch from './components/toggleswitch.js';
import Menu from './components/menu.js';
import  Login from './components/login.js';


function Header() {
    return (

        
            <Head >
            <Menu></Menu>
            <Input  placeholder="Search..."   />
            <ToggleSwitch></ToggleSwitch>
            <Login></Login>
            </Head>

        

    )
};

export default Header;