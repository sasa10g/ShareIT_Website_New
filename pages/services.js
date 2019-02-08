import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ServicesSection from '../components/Sections/Services/ServicesSection';

const Services = () => (
  <Layout title="Services - Share IT Web Development">
    <Hero imgSrc="#fff" title="Our Services" textColor="dark">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </Hero>
    <ServicesSection />
  </Layout>
);

export default Services;
