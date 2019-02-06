/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Graphic from './Graphic';
import { innerFlexContainerStyles } from '../section-styles';

const GraphicsContainer = () => (
  <ul css={innerFlexContainerStyles}>
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
