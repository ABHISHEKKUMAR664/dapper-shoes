import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from './Context'

export class Header extends Component {
    static contextType= DataContext;
    state={
        toggle: false
    }
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const {toggle} = this.state;
        // const {cart} = this.context;
        return (
            <header>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src="" alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <Link to="/cart">
                            <img src={""} alt="" width="20" />
                        </Link>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Header
