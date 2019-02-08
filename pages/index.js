/**
 * Next.js doesn't require for us to import react, although we
 * will import it everywhere because of eslint errors.
 */
import React from 'react';
import Header from '../components/Header/';
import Footer from '../components/Footer/Footer';

const Index = () => (
  <div>
    <Header />
    <Footer />
  </div>
);
export default Index;
