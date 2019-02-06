/**
 * Next.js doesn't require for us to import react, although we
 * will import it everywhere because of eslint errors.
 */
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ButtonLink from '../components/ButtonLink';
import ServicesSection from '../components/Sections/ServicesSection';
import CaseStudiesSection from '../components/Sections/CaseStudiesSection';

const Index = () => (
  <Layout title="Share IT Web Development">
    <Hero
      imgSrc="/static/banner.jpg"
      title="Enterprise<br/> Software<br/> Development"
      textColor="light"
      uppercase
    >
      <ButtonLink href="/about-us" text="Read More" />
    </Hero>
    <ServicesSection />
    <CaseStudiesSection />
  </Layout>
);

export default Index;
