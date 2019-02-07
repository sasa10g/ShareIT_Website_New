import { css } from '@emotion/core';
import styles from '../../utils/styles';

export const innerFlexContainerStyles = css`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding: 0;
  list-style: none;

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const graphicContainerStyles = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  width: 25%;
  max-width: 25%;

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    flex: 1 1 320px;
    width: none;
    max-width: none;
  }
`;

export const sectionHeading = css`
  color: ${styles.colors.textColor};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding-bottom: 50px;
  margin-bottom: 0;
`;
