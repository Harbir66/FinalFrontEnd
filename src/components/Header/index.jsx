import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

function Header({ heading }) {
  return <header className="header">{heading}</header>;
}

export default Header;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
