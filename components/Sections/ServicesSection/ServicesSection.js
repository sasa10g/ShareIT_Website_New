import React from 'react';
import ButtonLink from '../../ButtonLink';
import GraphicsContainer from './GraphicsContainer';
import SubHeading from '../../SubHeading';
import { Section } from '../section-styles';

const ServicesSection = () => (
  <Section>
    <SubHeading text="Our" boldedText="Services" />
    <GraphicsContainer />
    <ButtonLink href="/service" text="About Services" />
  </Section>
);

export default ServicesSection;
