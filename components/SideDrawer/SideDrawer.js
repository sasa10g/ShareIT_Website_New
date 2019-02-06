/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import {} from './side-drawer-style';
import NavItem from '../Header/NavItem';
import SideLogo from '../SideDrawer/SideLogo';
import BackDrop from '../BackDrop/BackDrop';
import menuItems from '../Header/menuItems';

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
          <SideLogo />
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
