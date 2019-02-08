import React from 'react';
import Container from '../../common/Container';
import ButtonLink from '../../Buttons/ButtonLink';
import GraphicsContainer from './GraphicsContainer';
import SubHeading from '../../SubHeading';
import Section from '../../common/Section';

const ServicesSection = () => (
  <Section>
    <Container>
      <SubHeading text="Our" boldedText="Services" />
      <GraphicsContainer />
      <ButtonLink href="/service" text="About Services" />
    </Container>
  </Section>
);

export default ServicesSection;
