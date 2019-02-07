import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { buttonStyles } from './button-styles';

const ButtonLink = ({ href, text }) => (
  <Link href={href}>
    <a css={buttonStyles}>{text}</a>
  </Link>
);

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLink;
