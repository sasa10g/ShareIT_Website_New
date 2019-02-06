/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import Graphic from './Graphic';
import styles from '../../utils/styles';

const flex = css`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding: 0;

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`;

const GraphicsContainer = () => (
  <ul css={flex}>
    <Graphic
      href="/services"
      imgSrc="/static/icon1.png"
      text="Enterprise Software Development"
      alt=""
    />
    <Graphic
      href="/services"
      imgSrc="/static/icon2.png"
      text="Mobile Apps"
      alt=""
    />
    <Graphic
      href="/services"
      imgSrc="/static/icon3.png"
      text="Web Site Development"
      alt=""
    />
    <Graphic
      href="/services"
      imgSrc="/static/icon4.png"
      text="Research and Development"
    />
  </ul>
);

export default GraphicsContainer;
