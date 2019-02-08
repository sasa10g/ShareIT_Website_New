import React from 'react';
import SubHeading from '../../../SubHeading';
import Section from '../../../common/Section';
import Graphic from './Graphic';
import { innerFlexContainerStyles } from '../../section-styles';
import styles from '../../../../utils/styles';
import Container from '../../../common/Container';

const CaseStudiesSection = () => (
  <Section background={styles.colors.containerGray}>
    <Container>
      <SubHeading text="Case" boldedText="Studies" />
      <ul css={innerFlexContainerStyles}>
        <Graphic text="Case Study Title" imgSrc="/static/ic1.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic2.png" href="#" />
        <Graphic text="Case Study Title" imgSrc="/static/ic3.png" href="#" />
      </ul>
    </Container>
  </Section>
);

export default CaseStudiesSection;
