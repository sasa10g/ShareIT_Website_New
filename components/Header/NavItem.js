import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { navItemStyles } from './header-styles';

const NavItem = ({ href, text, onClick, active }) => (
  <li onClick={onClick} css={navItemStyles}>
    <Link href={href}>
      <a className={active && 'active-link'}>{text}</a>
    </Link>
  </li>
);

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default NavItem;
