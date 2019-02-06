/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { sideDrawerLogo } from './side-drawer-style';
import NavItem from '../Header/NavItem';
import BackDrop from '../BackDrop/BackDrop';
import menuItems from '../Header/menuItems';
import Logo from '../Header/Logo';

class SideDrawer extends Component {
  state = {
    sideDrawerOpen: true,
    menuItems,
  };

  static propTypes = {
    show: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    show: false,
  };

  setActiveLink = id => {
    this.setState(state => ({
      menuItems: state.menuItems.map((link, index) => {
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
      <nav
        className={`side-drawer ${
          this.props.show && this.state.sideDrawerOpen ? 'open' : ''
        }`}
      >
        {this.props.show && <BackDrop click={() => this.props.onClick()} />}
        <ul>
          {this.state.menuItems.map((link, index) => (
            <NavItem
              key={link.text}
              href={link.href}
              text={link.text}
              active={link.active}
              onClick={() => this.setActiveLink(index)}
            />
          ))}
          <Logo src={'./static/sideLogo.png'} style={sideDrawerLogo} />
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
