import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import styles from '../utils/styles';

const HeroContainer = styled.div`
  padding-top: 17%;
  padding-bottom: 14%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-image: ${({ imgSrc }) => `url('${imgSrc}')`};
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 72px;
  font-stretch: normal;
  line-height: 1;
  padding-bottom: 70px;
  letter-spacing: 0.4px;
  margin-bottom: 70px;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'capitalized')};
  color: ${props =>
    (props.color === 'light' && styles.colors.white) ||
    (props.color === 'dark' && styles.colors.textColor)};
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
