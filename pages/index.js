/**
 * Next.js doesn't require for us to import react, although we
 * will import it everywhere because of eslint errors.
 */
import React from 'react';
import Header from '../components/Header/';

const Index = () => (
  <div>
    <Header />
  </div>
);
export default Index;
