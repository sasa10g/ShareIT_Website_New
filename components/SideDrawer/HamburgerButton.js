import React from 'react';
import PropTypes from 'prop-types';
import { toggleButton, toggleButtonLine } from './side-drawer-style';

const HamburgerButton = props => (
  <button css={toggleButton} onClick={props.click}>
    <div css={toggleButtonLine} />
    <div css={toggleButtonLine} />
    <div css={toggleButtonLine} />
  </button>
);

HamburgerButton.propTypes = {
  click: PropTypes.func,
};

export default HamburgerButton;
