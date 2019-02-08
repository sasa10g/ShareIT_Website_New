import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../../../utils/styles';
import { graphicContainerStyles } from '../section-styles';

const imgStyles = css`
  display: inline-block;
  flex-grow: 0;
`;

const textStyles = css`
  margin: 0;
  margin-top: 10px;
  display: block;
  font-weight: 500;
  color: ${styles.colors.textColor};
  font-size: 28px;
  letter-spacing: 0.1px;
  padding-top: 0;
`;

const Graphic = ({ href, imgSrc, text, alt = '' }) => (
  <li css={graphicContainerStyles}>
    <div>
      <Link href={href}>
        <img src={imgSrc} alt={alt} css={imgStyles} />
      </Link>
    </div>
    <p css={textStyles}>{text}</p>
  </li>
);

Graphic.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Graphic;
