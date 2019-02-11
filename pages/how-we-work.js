import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HowWeWorkSection from '../components/Sections/HowWeWork/HowWeWorkSection';

const HowWeWork = () => (
  <Layout title="How We Work - Share IT Web Development">
    <Hero imgSrc="#fff" title="How We Work" textColor="dark">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </Hero>
    <HowWeWorkSection />
  </Layout>
);

export default HowWeWork;
