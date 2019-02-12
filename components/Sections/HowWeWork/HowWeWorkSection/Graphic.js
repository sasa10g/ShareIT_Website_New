import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const imgStyles = css`
  width: 24px;
`;

const hwwGraphicStyle = css`
  display: flex;
  align-items: center;
`;

const Graphic = ({ imgSrc, text }) => (
  <div css={hwwGraphicStyle}>
    <img css={imgStyles} src={imgSrc} />
    {text}
  </div>
);
Graphic.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
};

export default Graphic;
