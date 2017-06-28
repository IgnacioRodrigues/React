//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import logo from './imagenes/logo.svg';
import './css/Header.css';

class Header extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const { title, items } = this.props;
    
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>

          <ul className="Menu">
            {items && items.map((items, key) => <li key={key}>{items.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
