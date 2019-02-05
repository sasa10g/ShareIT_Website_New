/**
 * Next.js doesn't require for us to import react, although we
 * will import it everywhere because of eslint errors.
 */
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title="Share IT Web Development">
    <Hero
      imgSrc="/static/banner.jpg"
      title="Enterprise<br/> Software<br/> Development"
      textColor="light"
      uppercase
    />
  </Layout>
);

export default Index;
