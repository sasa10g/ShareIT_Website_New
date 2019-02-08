import React from 'react';
import PropTypes from 'prop-types';

const Social = ({ href, imgSrc, alt }) => (
  <a href={href}>
    <img src={imgSrc} alt={alt} />
  </a>
);

Social.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Social;
