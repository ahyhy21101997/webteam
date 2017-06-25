import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <h1 id="title"><a href="#">Team Name</a></h1>
                <nav id="nav">
                    <ul>
                        <li><a href="#banner">Home</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a className="btnLogin">Login</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
