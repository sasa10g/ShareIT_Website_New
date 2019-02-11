import React from 'react';
import { css } from '@emotion/core';
import Container from '../../../common/Container';
import Graphic from '../HowWeWorkSection/Graphic';
import Section from '../../../common/Section';
import styles from '../../../../utils/styles';

const twoConstructualModelsContainer = css`
  padding-bottom: 100px;
`;

const containerBackStyles = css`
  background-color: #e2e2e2;
  width: 100%;
  padding: 150px 0 90px 0;
`;

const IntroContainer = css`
  margin: 0 auto;
  h1 {
    margin: 0px 0 50px 0;
    letter-spacing: 0.2px;
    font-size: 48px;
    font-weight: 500;
    font-family: ${styles.fonts.raleway};
    color: ${styles.colors.textColor};
    span {
      font-weight: bold;
    }
  }
  p {
    font-size: 20px;
    line-height: 1.9;
    letter-spacing: 0.1px;
    font-family: ${styles.fonts.openSans};
    font-weight: normal;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      line-height: 1.36;
      letter-spacing: 0.1px;
      font-family: ${styles.fonts.openSans};
      font-size: 24px;
      font-weight: bold;
      font-style: normal;
      color: #2a8dfb;
      padding: 5px 0;
    }
  }
`;

const implementationAndPaymentContainer = css`
  padding-top: 130px;

  h1 {
    padding-bottom: 50px;
    letter-spacing: 0.2px;
    font-weight: 500;
    font-size: 48px;
    font-family: ${styles.fonts.raleway};
    color: ${styles.colors.textColor};
    text-align: center;
  }
  span {
    font-weight: bold;
  }
  p {
    line-height: 1.9;
    letter-spacing: 0.1px;
    font-family: ${styles.fonts.openSans};
    font-size: 20px;
    font-weight: normal;
    text-align: center;
    color: ${styles.colors.textColor};
  }
`;

const HowWeWorkSection = () => (
  <Section background={styles.colors.containerGray}>
    <Container css={twoConstructualModelsContainer}>
      <div css={IntroContainer}>
        <h1>
          Two Constructual <span>Models:</span>
        </h1>
        <ul>
          <li>1. Time &amp; Materials</li>
          <li>2. Fixed Price</li>
        </ul>
        <p>
          Сompare your project needs with the models described below to select
          the most appropriate contract type. We work using both Agile and
          non-Agile methodologies, and can combine them to get the most out of
          each methodology to the benefit of your project. We work in full
          compliance with GDPR.
        </p>
      </div>
    </Container>
    <div css={containerBackStyles}>
      <Container>
        <Graphic
          text="Project Size"
          imgSrc="/static/how-we-work-icons/project-size.png"
        />
        <Graphic
          text="Project Duration"
          imgSrc="/static/how-we-work-icons/project-duration.png"
        />
        <Graphic
          text="Requirements for project start"
          imgSrc="/static/how-we-work-icons/requirements-for-project-start.png"
        />
        <Graphic
          text="Project scope"
          imgSrc="/static/how-we-work-icons/project-scope.png"
        />
        <Graphic
          text="Change requests"
          imgSrc="/static/how-we-work-icons/change-requests.png"
        />

        <Graphic
          text="Project start"
          imgSrc="/static/how-we-work-icons/project-start.png"
        />
        <Graphic
          text="Client control of the progress"
          imgSrc="/static/how-we-work-icons/client-control-of-the-progress.png"
        />
        <Graphic
          text="Project cost"
          imgSrc="/static/how-we-work-icons/project-cost.png"
        />
        <Graphic
          text="Reports"
          imgSrc="/static/how-we-work-icons/reports.png"
        />
        <Graphic
          text="Methodology"
          imgSrc="/static/how-we-work-icons/methodology.png"
        />
      </Container>
    </div>
    <Container css={implementationAndPaymentContainer}>
      <div css={IntroContainer}>
        <h1>
          Implementation and <br />
          <span>Payment Process</span>
        </h1>
        <p>This can be like Comparison Chart:</p>
        <br />
        <p> Ilustracija ...</p>
        <br />
        <br />
        <br />
      </div>
    </Container>
  </Section>
);

export default HowWeWorkSection;
