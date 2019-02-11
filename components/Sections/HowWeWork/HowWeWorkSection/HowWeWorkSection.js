import React from 'react';
import { css } from '@emotion/core';
import Container from '../../../common/Container';
import Graphic from '../../Index/CaseStudiesSection/Graphic';
import Input from '../../../Input';
import Select from '../../../Select';
import Section from '../../../common/Section';
import styles from '../../../../utils/styles';
import { innerFlexContainerStyles } from '../../section-styles';

const inputFields = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 6%;
`;

const searchInput = css`
  position: relative;
  input[type='text'] {
    height: 50px;
    border: 0;
    width: 98%;
    padding-left: 2%;
    border-bottom: 1px solid #c9cece;
    border-radius: 0; //Safari rounded edges fix
    font-family: ${styles.fonts.openSans};
    font-size: 14px;
    outline: none;
    color: ${styles.colors.black};
    background: ${styles.colors.white};
  }
  button {
    position: absolute;
    top: 15px;
    right: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
  }
`;

const caseStudiesLine = css`
  margin: 70px 0 50px 0;
  border-bottom: 2px solid #c9cece;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const HowWeWorkSection = () => (
  <Section background={styles.colors.containerGray}>
    <Container>
      <div className="how-we-work-desc">
        <h1>
          Two Constructual <span>Models:</span>
        </h1>
        <p className="how-we-work-blue-p">1. Time &amp; Materials</p>
        <p className="how-we-work-blue-p">2. Fixed Price</p>
        <p>
          Сompare your project needs with the models described below to select
          the most appropriate contract type. We work using both Agile and
          non-Agile methodologies, and can combine them to get the most out of
          each methodology to the benefit of your project. We work in full
          compliance with GDPR.
        </p>
      </div>
    </Container>
  </Section>
);

export default HowWeWorkSection;
