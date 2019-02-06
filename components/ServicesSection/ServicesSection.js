/** @jsx jsx */
import React from 'react';
import ButtonLink from '../ButtonLink';
import GraphicsContainer from './GraphicsContainer';
import SubHeading from '../SubHeading';
import { css, jsx } from '@emotion/core';

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5%;
  margin-top: 170px;
`;

const ServicesSection = () => (
  <section css={sectionStyles}>
    <SubHeading text="Our" boldedText="Services" />
    <GraphicsContainer />
    <ButtonLink href="/service" text="About Services" />
  </section>
);

export default ServicesSection;
