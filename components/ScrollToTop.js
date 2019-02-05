/** @jsx jsx */
import React from 'react';
import ScrollUp from 'react-scroll-up';
import { jsx, css } from '@emotion/core';

const scrollStyles = css`
  display: inline-block;
  position: fixed;
  width: 48px;
  height: 48px;
  right: 80px;
  bottom: 127px;
  cursor: pointer;
  border: none;
  outline: none;
  opacity: 0.8;
`;

const ScrollToTop = () => (
  <ScrollUp showUnder={300} style={{ zIndex: 99 }}>
    <img css={scrollStyles} src="/static/ar.png" className="scroll" />
  </ScrollUp>
);

export default ScrollToTop;
