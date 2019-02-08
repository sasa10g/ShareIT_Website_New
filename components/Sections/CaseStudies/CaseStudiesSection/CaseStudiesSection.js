import React from 'react';
import { css } from '@emotion/core';
import Container from '../../../common/Container';
import Flex from '../../../common/Flex';
import Graphic from './Graphic';
import Section from '../../../common/Section';
import styles from '../../../../utils/styles';
import { innerFlexContainerStyles } from '../../section-styles';

const CaseStudiesSection = () => (
  <Section background={styles.colors.containerGray}>
    <Container>
      <ul css={innerFlexContainerStyles}>
        <Graphic text="Case Study Title" imgSrc="/static/ic1.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic2.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic3.png" href="#" />
      </ul>
      <ul css={innerFlexContainerStyles}>
        <Graphic text="Case Study Title" imgSrc="/static/ic1.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic2.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic3.png" href="#" />
      </ul>
      <ul css={innerFlexContainerStyles}>
        <Graphic text="Case Study Title" imgSrc="/static/ic1.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic2.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic3.png" href="#" />
      </ul>
    </Container>
  </Section>
);

export default CaseStudiesSection;
