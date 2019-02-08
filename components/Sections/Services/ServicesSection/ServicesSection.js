import React from 'react';
import { css } from '@emotion/core';
import Container from '../../../common/Container';
import Flex from '../../../common/Flex';
import Graphic from './Graphic';
import Section from '../../../common/Section';
import SubHeading from '../../../SubHeading';
import styles from '../../../../utils/styles';

const containerStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, minmax(300px, auto));
  align-items: center;
  grid-gap: 100px 6%;
  padding: 0 15px;

  p {
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 20px;
    letter-spacing: 0.1px;
    font-weight: 400;
  }

  li {
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 20px;
    letter-spacing: 0.1px;
    font-weight: 400;
  }
`;

const ServicesSection = () => (
  <Section background={styles.colors.containerGray}>
    <Container css={containerStyles}>
      <Graphic imgSrc="/static/icon1.png" />
      <Flex direction="column" justify="flex-start">
        <SubHeading text="Enterprise Software" boldedText="Development" />
        <ul>
          <li>Intranets and Portals (SharePoint & Office 365 Based)</li>
          <li>Enterprise Applications (Azure and on-premise Applications)</li>
          <li>Cloud Infrastructure (Azure Infrastructure Solutions)</li>
          <li>
            Upgrades and Migrations (Migrate and Upgrade to the latest Microsoft
            Platforms)
          </li>
        </ul>
      </Flex>
      <Flex direction="column">
        <SubHeading text="Mobile" boldedText="Apps" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </Flex>
      <Graphic imgSrc="/static/icon2.png" />
      <Graphic imgSrc="/static/icon3.png" />
      <Flex direction="column" justify="flex-start">
        <SubHeading text="Web Site" boldedText="Development" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </Flex>
      <Flex direction="column">
        <SubHeading text="Research &" boldedText="Development" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </Flex>
      <Graphic imgSrc="/static/icon4.png" />
    </Container>
  </Section>
);

export default ServicesSection;
