import React from 'react';
import Head from 'next/head';
import Header from './Header/';
import ScrollToTop from '../components/ScrollToTop';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <ScrollToTop />
    <Header />
    {children}
    {/* FOOTER GOES HERE */}
  </>
);

export default Layout;
