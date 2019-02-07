/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import styles from '../../../utils/styles';

const cardContainerStyles = css`
  display: inline-block;
  padding: 50px 80px 110px;
  margin-right: 30px;
  border: 1px solid ${styles.colors.sliderBorder};
  box-shadow: 0 0 15.7px 0.3px hsla(0, 2%, 64%, 0.1);
  border-radius: 9px;
`;

const Card = ({ title, text }) => (
  <div css={cardContainerStyles}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
