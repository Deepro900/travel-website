import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { MenuItem } from './MenuItems';


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (

            <div>
                <nav className="NavbarItems">
                    <h1 className="Navbar-logo">Trips</h1>
                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>


                        {/* <i className='fas fa-bars'></i>
                        <i className='fas fa-times'></i> */}
                    </div>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {/* <ul className="nav-menu"> */}
                        {MenuItem.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        <i className={item.icon}></i>{item.title}
                                    </Link>
                                </li>
                            )
                        })}
                        <button>Sign up</button>

                    </ul>

                </nav >
            </div >
        )
    }
}

export default Navbar;