/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../../utils/styles';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  list-style: none;
  width: 25%;
  max-width: 25%;
`;

const imgStyles = css`
  display: inline-block;
  flex-grow: 0;
`;

const textStyles = css`
  display: block;
  font-weight: 500;
  color: ${styles.colors.textColor};
  font-size: 28px;
  letter-spacing: 0.1px;
  padding-top: 0;
`;

const Graphic = ({ href, imgSrc, text }) => (
  <li css={containerStyles}>
    <div>
      <Link href={href} css={imgStyles}>
        <img src={imgSrc} alt="" />
      </Link>
    </div>
    <p css={textStyles}>{text}</p>
  </li>
);

Graphic.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Graphic;
