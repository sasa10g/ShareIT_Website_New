import React from 'react';
import { css } from '@emotion/core';
import { sectionHeading } from '../section-styles';
import Container from '../../common/Container';
import Flex from '../../common/Flex';
import Section from '../../common/Section';
import ButtonSubmit from '../../Buttons/ButtonSubmit';
import Input from '../../Input';
import styles from '../../../utils/styles';

const textStyles = css`
  display: block;
  font-size: 38px;
  line-height: 38px;
  padding-bottom: 68px;
  font-weight: 400;
  font-family: ${styles.fonts.openSans};
  letter-spacing: 0.2px;
`;

const SubscribeSection = () => (
  <Section background={styles.colors.containerGray}>
    <Container>
      <Flex align="center">
        <Flex
          direction="column"
          css={css`
            margin-right: 120px;
          `}
        >
          <h2 css={sectionHeading}>Subscribe</h2>
          <p css={textStyles}>Sign up for updates on all our future events</p>
          <Input label="Your E-mail" id="subscribe" />
          <ButtonSubmit text="Subscribe" />
        </Flex>
        <img src="/static/img1.png" alt="" />
      </Flex>
    </Container>
  </Section>
);

export default SubscribeSection;
