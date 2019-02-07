import React from 'react';
import PropTypes from 'prop-types';
import {
  slideStyles,
  slideCompanyStyles,
  slideContentStyles,
  slideReviewStyles,
  slideReviewerStyles,
} from './slider-styles';

const Slide = ({ slide, slideRef }) => {
  return (
    <div css={slideStyles} ref={slideRef}>
      <div css={slideContentStyles}>
        <div css={slideReviewStyles}>{slide.review}</div>
        <div css={slideReviewerStyles}>{slide.reviewer}</div>
        <div css={slideCompanyStyles}>{slide.company}</div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  slideRef: PropTypes.shape({
    current: PropTypes.object,
  }),
  slide: PropTypes.shape({
    review: PropTypes.string.isRequired,
    reviewer: PropTypes.string.isRequired,
    company: PropTypes.string,
  }),
};

export default Slide;
