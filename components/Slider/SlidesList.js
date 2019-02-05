import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';

/* TODO: slides should come from API */
const SlidesList = ({ slides, slideRef }) =>
  slides.map((slide, index) => (
    <Slide key={index} slide={slide} slideRef={slideRef} />
  ));

SlidesList.propTypes = {
  translateValue: PropTypes.number.isRequired,
  slides: PropTypes.array.isRequired,
};

SlidesList.defaultProps = {
  slides: [],
};

export default SlidesList;
