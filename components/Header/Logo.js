/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Logo = ({ src, style }) => (
  <div css={style}>
    <Link href="/">
      <a>
        <img src={src} />
      </a>
    </Link>
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default Logo;
