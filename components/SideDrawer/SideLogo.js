/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Link from 'next/link';
import { sideDrawerLogo } from './side-drawer-style';

const SideLogo = () => (
  <div css={sideDrawerLogo}>
    <Link href="/">
      <a>
        <img src="/static/sideLogo.png" />
      </a>
    </Link>
  </div>
);

export default SideLogo;
