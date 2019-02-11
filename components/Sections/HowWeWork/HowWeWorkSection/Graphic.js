import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const imgStyles = css`
  width: 24px;
`;

const Graphic = ({ imgSrc }) => <img css={imgStyles} src={imgSrc} />;

Graphic.propTypes = {
  imgSrc: PropTypes.string,
};

export default Graphic;
