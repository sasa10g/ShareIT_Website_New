import { css } from '@emotion/core';
import styles from '../../utils/styles';

export const toggleButton = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  padding-right: 40px;
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${styles.breakpoints.lg}) {
    display: none;
  }
`;

export const toggleButtonLine = css`
  width: 30px;
  height: 2px;
  background: #fff;
`;

export const but = css`
  position: relative;
  top: 50px;
  float: right;
  z-index: 10;
}
`;

export const sideDrawerLogo = css`
  img {
    display: block;
    width: 82px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0%;
    opacity: 0.7;
    margin-top: 40px;
  }
`;
