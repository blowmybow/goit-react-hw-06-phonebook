import React from 'react';
import { HeaderTitle } from './Header.styled';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return <HeaderTitle>{title}</HeaderTitle>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
