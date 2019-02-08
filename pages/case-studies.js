import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CaseStudiesSection from '../components/Sections/CaseStudies/CaseStudiesSection';

const CaseStudies = () => (
  <Layout title="Case Studies - Share IT Web Development">
    <Hero imgSrc="#fff" title="Case Studies" textColor="dark">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </Hero>
    <CaseStudiesSection />
  </Layout>
);

export default CaseStudies;
