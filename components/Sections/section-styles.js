import { css } from '@emotion/core';
import styled from '@emotion/styled';
import styles from '../../utils/styles';

export const Section = styled.section`
  display: flex;
  background-color: ${({ background }) => background || styles.colors.white};
  flex-direction: column;
  align-items: center;
  align-items: center;
  padding: 0 5%;
  padding-top: 170px;
  margin-top: 110px;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? '110px' : '0')};
`;

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
