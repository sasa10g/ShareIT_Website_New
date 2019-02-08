/**
 * Next.js doesn't require for us to import react, although we
 * will import it everywhere because of eslint errors.
 */
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Container from '../components/common/Container';
import ButtonLink from '../components/Buttons/ButtonLink';
import CaseStudiesSection from '../components/Sections/Index/CaseStudiesSection';
import HowWeWorkSection from '../components/Sections/Index/HowWeWorkSection';
import ServicesSection from '../components/Sections/Index/ServicesSection';
import SubscribeSection from '../components/Sections/Index/SubscribeSection';

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
    <HowWeWorkSection />
    <Container>
      <Slider />
    </Container>
    <SubscribeSection />
  </Layout>
);

export default Index;
