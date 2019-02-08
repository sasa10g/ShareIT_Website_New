import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import styles from '../utils/styles';

const Heading = styled.h2`
  margin: 0;
  font-weight: 500;
  color: ${styles.colors.textColor};
  font-size: 48px;
  letter-spacing: 0.2px;
  text-align: ${({ align }) => align};
`;

Heading.defaultProps = {
  align: 'center',
};

const SubHeading = ({ text, boldedText, align }) => (
  <Heading align={align}>
    {text} {boldedText && <b>{boldedText}</b>}
  </Heading>
);

SubHeading.propTypes = {
  text: PropTypes.string.isRequired,
  boldedText: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default SubHeading;
