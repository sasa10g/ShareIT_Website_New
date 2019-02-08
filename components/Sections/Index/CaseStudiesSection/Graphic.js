import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../../../utils/styles';

const textStyles = css`
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 45px;
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${styles.colors.textColor};
  cursor: pointer;

  &:hover {
    color: ${styles.colors.borderBlue};
  }
`;

const imgStyles = css`
  max-width: 100%;
`;

const containerStyles = css`
  flex-basis: 33%;
  padding: 0 20px;
`;

const arrowStyles = css`
  display: inline-block;
  margin-left: 20px;
`;

const Graphic = ({ href, text, imgSrc, alt = '' }) => (
  <li css={containerStyles}>
    <div>
      <img src={imgSrc} alt={alt} css={imgStyles} />
    </div>
    <Link href={href}>
      <a css={textStyles}>
        {text} <img css={arrowStyles} src="/static/arrow.png" alt={alt} />
      </a>
    </Link>
  </li>
);

Graphic.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Graphic;
