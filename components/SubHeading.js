/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import styles from '../utils/styles';

const headingStyles = css`
  margin: 0;
  font-weight: 500;
  color: ${styles.colors.textColor};
  font-size: 48px;
  letter-spacing: 0.2px;
  text-align: center;
`;

const SubHeading = ({ text, boldedText }) => (
  <h2 css={headingStyles}>
    {text} {boldedText && <b>{boldedText}</b>}
  </h2>
);

SubHeading.propTypes = {
  text: PropTypes.string.isRequired,
  boldedText: PropTypes.string,
};

export default SubHeading;
