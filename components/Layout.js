import React from 'react';

import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

export default Layout;
