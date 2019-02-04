/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { navItemStyles } from './header-styles';

const NavItem = ({ href, text, onClick }) => (
  <li onClick={onClick} css={navItemStyles}>
    <Link href={href}>
      <a>{text}</a>
    </Link>
  </li>
);

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
