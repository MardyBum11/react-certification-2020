import React from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import './css/HomeView.css';

function Main(){
    return(
        <div className="container">
            <div>
                <Header/>
            </div>
            <div>
            <Body/>
            </div>
        </div>
        
       
    )
}

export default Main;