/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import FooterLine from './FooterLine';
import FooterContact from './FooterContact';

const Footer = () => (
  <div>
    <FooterContact />
    <FooterLine />
  </div>
);

export default Footer;
