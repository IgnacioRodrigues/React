//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Footer extends Component {
   static PropTypes = {
    Copyright: PropTypes.string
  };

  render() {
      const { copyright = '&copy; Ignacio Rodrigues 2017' } = this.props;

    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;
