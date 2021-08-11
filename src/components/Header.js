import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                    </ul>
                </nav>

            </header>
        )
    }
}

export default Header
