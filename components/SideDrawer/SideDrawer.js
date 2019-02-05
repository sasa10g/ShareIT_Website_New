/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import {} from './side-drawer-style';
import NavItem from '../Header/NavItem';
import SideLogo from '../SideDrawer/SideLogo';

class SideDrawer extends Component {
  state = {
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

  static propTypes = {
    show: PropTypes.bool,
  };

  static defaultProps = {
    show: false,
  };

  setActiveLink = id => {
    this.setState(state => ({
      links: state.links.map((link, index) => {
        if (index === id) {
          return { ...link, active: true };
        } else {
          return { ...link, active: false };
        }
      }),
    }));
  };

  render() {
    return (
      <nav className={`side-drawer ${this.props.show ? 'open' : ''}`}>
        <ul>
          {this.state.links.map((link, index) => (
            <NavItem
              key={link.text}
              href={link.href}
              text={link.text}
              active={link.active}
              onClick={() => this.setActiveLink(index)}
            />
          ))}
          <SideLogo />
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
