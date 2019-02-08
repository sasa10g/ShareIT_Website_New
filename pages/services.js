import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Flex from '../components/common/Flex';
import Section from '../components/common/Section';
import Container from '../components/common/Container';

const Index = () => (
  <Layout title="Services - Share IT Web Development">
    <Hero imgSrc="#fff" title="Our Services" textColor="dark">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </Hero>
    <Section>
      <Container
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(auto-fill, minmax(300px, auto));
          align-items: center;
          grid-gap: 100px 6%;
          padding: 0 15px;
        `}
      >
        <Flex justify="center" align="center">
          <img
            src="/static/icon1.png"
            css={css`
              display: inline-block;
            `}
          />
        </Flex>
        <Flex direction="column">
          <h2>
            Enterprise Software <b>Development</b>
          </h2>
          <ul>
            <li>Intranets and Portals (SharePoint & Office 365 Based)</li>
            <li>Enterprise Applications (Azure and on-premise Applications)</li>
            <li>Cloud Infrastructure (Azure Infrastructure Solutions)</li>
            <li>
              Upgrades and Migrations (Migrate and Upgrade to the latest
              Microsoft Platforms)
            </li>
          </ul>
        </Flex>

        <Flex direction="column">
          <h2>
            Mobile <b>Apps</b>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </Flex>
        <Flex justify="center" align="center">
          <img src="/static/icon2.png" />
        </Flex>
        <Flex justify="center" align="center">
          <img src="/static/icon3.png" />
        </Flex>

        <Flex direction="column">
          <h2>
            Web Site <b>Development</b>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </Flex>
        <Flex direction="column">
          <h2>
            Research & <b>Development</b>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </Flex>
        <Flex justify="center" align="center">
          <img src="/static/icon4.png" />
        </Flex>
      </Container>
    </Section>
  </Layout>
);

export default Index;
