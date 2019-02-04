/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Link from 'next/link';
import { logoStyles } from './header-styles';

const Logo = () => (
  <div css={logoStyles}>
    <Link href="/">
      <a>
        <img src="/static/logo.png" />
      </a>
    </Link>
  </div>
);

export default Logo;
