/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import SubHeading from '../../SubHeading';
import { Section, innerFlexContainerStyles } from '../section-styles';
import Graphic from './Graphic';
import styles from '../../../utils/styles';

const CaseStudiesSection = () => (
  <Section background={styles.colors.containerGray} paddingBottom>
    <SubHeading text="Case" boldedText="Studies" />
    <ul css={innerFlexContainerStyles}>
      <Graphic text="Case Study Title" imgSrc="/static/ic1.png" href="#" />
      <Graphic text="Case Study Title" imgSrc="/static/ic2.png" href="#" />
      <Graphic text="Case Study Title" imgSrc="/static/ic3.png" href="#" />
    </ul>
  </Section>
);

export default CaseStudiesSection;
