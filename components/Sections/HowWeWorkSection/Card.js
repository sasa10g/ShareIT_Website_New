import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import styles from '../../../utils/styles';
import ButtonLink from '../../Buttons/ButtonLink';
import { sectionHeading } from '../section-styles';

const cardContainerStyles = css`
  display: inline-block;
  padding: 50px 80px 110px;
  margin-right: 30px;
  border: 1px solid ${styles.colors.sliderBorder};
  box-shadow: 0 0 15.7px 0.3px hsla(0, 2%, 64%, 0.1);
  border-radius: 9px;
`;

const textStyles = css`
  font-family: ${styles.fonts.openSans};
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.1px;
  color: ${styles.colors.textColor};
  margin-bottom: 63px;
`;

const Card = ({ title, text, href }) => (
  <div css={cardContainerStyles}>
    <h2 css={sectionHeading}>{title}</h2>
    <p css={textStyles}>{text}</p>
    <ButtonLink text="Read More" href={href} />
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default Card;
