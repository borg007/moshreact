import React, { Component } from 'react';

//Lifecycle hooks can only be used in class components
//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
        return (  
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    NavBar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span>
                </a>
            </nav>
        );
    };
    
export default NavBar;