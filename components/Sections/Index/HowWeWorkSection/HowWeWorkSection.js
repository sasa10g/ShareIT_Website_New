import React from 'react';
import Container from '../../../common/Container';
import Section from '../../../common/Section';
import Card from './Card';

const HowWeWorkSection = () => (
  <Container>
    <Section direction="row">
      <Card
        href="/how-we-work"
        title="How We Work"
        text="We work using both Agile and non-Agile methodologies, and can combine them to get the most out of each methodology to the benefit of your project. We work in full compliance with GDPR."
      />
      <Card
        href="/how-we-work"
        title="Technology Stack"
        text="We work using both Agile and non-Agile methodologies, and can combine them to get the most out of each methodology to the benefit of your project. We work in full compliance with GDPR."
      />
    </Section>
  </Container>
);

export default HowWeWorkSection;
