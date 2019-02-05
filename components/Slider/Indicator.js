/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { barStyles } from './slider-styles';

const Indicator = ({ invisible }) => (
  <span css={barStyles} className={invisible ? 'invisible' : ''.trim()}>
    |
  </span>
);

Indicator.propTypes = {
  invisible: PropTypes.bool.isRequired,
};

export default Indicator;
