/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Logo from './Logo';
import NavItem from './NavItem';
import HamburgerButton from '../SideDrawer/HamburgerButton';
import SideDrawer from '../SideDrawer/SideDrawer';
import { headerStyles, navStyles, navListStyles } from './header-styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,

      links: [
        {
          href: '/',
          text: 'Home',
        },
        {
          href: '/services',
          text: 'Services',
        },
        {
          href: '/case-studies',
          text: 'Case Studies',
        },
        {
          href: '/how-we-work',
          text: 'How We work',
        },
        {
          href: '/about-us',
          text: 'About Us',
        },
        {
          href: '/contact-us',
          text: 'Contact Us',
        },
      ],
    };
  }

  static propTypes = {
    hamburgerButtonClickHandler: PropTypes.func.isRequired,
    router: PropTypes.shape({
      pathname: PropTypes.object,
    }),
  };

  hamburgerButtonClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  setActiveLink = id => {
    this.setState(state => ({
      sideDrawerOpen: false,
      links: state.links.map((link, index) => {
        if (index === id) {
          return { ...link, active: true };
        } else {
          return { ...link, active: false };
        }
      }),
    }));
  };

  closeSideDrawer = () => {
    this.setState(state => ({
      sideDrawerOpen: !state.sideDrawerOpen,
    }));
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
              {this.state.links.map((link, index) => (
                <NavItem
                  key={link.text}
                  href={link.href}
                  text={link.text}
                  active={link.active}
                  onClick={() => this.setActiveLink(index)}
                />
              ))}
            </ul>
          </div>

          <HamburgerButton click={this.hamburgerButtonClickHandler} />
        </nav>

        <SideDrawer
          show={this.state.sideDrawerOpen}
          onClick={this.closeSideDrawer}
        />
      </header>
    );
  }
}

export default withRouter(Header);
