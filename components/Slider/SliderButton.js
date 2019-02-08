import React from 'react';
import PropTypes from 'prop-types';
import { arrowStyles } from './slider-styles';

const SliderButton = ({ imgSrc, text, onClick, className }) => (
  <div css={arrowStyles} onClick={() => onClick()} className={className}>
    {text} <img src={imgSrc} alt="" />
  </div>
);

SliderButton.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SliderButton;
