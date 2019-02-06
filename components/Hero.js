import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import styles from '../utils/styles';

const HeroContainer = styled.div`
  padding: 17% 20% 14% 20%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-image: ${({ imgSrc }) => `url('${imgSrc}')`};

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    padding: calc(17% + 100px) 5% 28px 5%;
    font-size: 4em;
    line-height: 50px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: ${styles.breakpoints.md}) {
    padding-bottom: 45%;
    background: 0 0;
    background-position: 50%;
    background-image: ${({ imgSrc }) => `url('${imgSrc}')`};
  }

  @media only screen and (max-width: ${styles.breakpoints.md}) {
    padding: calc(17% + 170px) 15% 45% 15%;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding-bottom: 70px;
  font-weight: 600;
  font-size: 72px;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 0.4px;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'capitalized')};
  color: ${props =>
    (props.color === 'light' && styles.colors.white) ||
    (props.color === 'dark' && styles.colors.textColor)};

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    font-size: 40px;
  }

  @media only screen and (max-width: ${styles.breakpoints.md}) {
    font-size: 60px;
    margin-bottom: 0;
  }
`;

const Hero = ({ title, imgSrc, textColor, uppercase, children }) => (
  <HeroContainer imgSrc={imgSrc}>
    <Title
      color={textColor}
      uppercase={uppercase}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {children}
  </HeroContainer>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  textColor: PropTypes.oneOf(['light', 'dark']),
  uppercase: PropTypes.bool,
};

Hero.defaultProps = {
  textColor: 'light',
};

export default Hero;
