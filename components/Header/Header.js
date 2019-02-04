/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Logo from './Logo';
import NavItem from './NavItem';
import { headerStyles, navStyles, navListStyles } from './header-styles';

class Header extends Component {
  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.object,
    }),
  };

  componentDidMount() {
    const { pathname } = this.props.router;
    if (pathname === '/') {
      // set styling for home page
    }
  }

  componentDidUpdate() {
    const { pathname } = this.props.router;
    if (pathname !== '/') {
      // set styling for non-home pages
    } else {
      // set styling for home page
    }
  }

  render() {
    return (
      <header css={headerStyles}>
        <nav css={navStyles}>
          <Logo />
          <div className="spacer" />
          <div className="toolbar_navigation-items menu">
            <ul css={navListStyles}>
              <NavItem href="/" text="Home" />
              <NavItem href="/services" text="Services" />
              <NavItem href="/case-studies" text="Case Studies" />
              <NavItem href="/how-we-work" text="How We work" />
              <NavItem href="/about-us" text="About Us" />
              <NavItem href="/contact-us" text="Contact Us" />
            </ul>
          </div>

          {/* HAMBURGER MENU */}
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
