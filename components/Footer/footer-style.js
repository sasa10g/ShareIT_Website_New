import { css } from '@emotion/core';
import styles from '../../utils/styles';

export const container = css`
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
`;

export const footIn = css`
  background: url(/static/footerLineBg.png) repeat-y left top;
  background-size: contain;
  padding: 54px 0 54px 0;
  a {
    display: inline-block;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    margin-left: 20px;
    font-weight: normal;
    font-family: ${styles.fonts.montserrat};
    letter-spacing: 1.1px;
    color: ${styles.colors.white};
    font-size: 14px;
    vertical-align: middle;
  }

  @media only screen and (max-width: 900px) {
    background: #00448f;
    background-size: contain;
    padding: 40px 0 30px 0;
    text-align: center;
  }
`;

export const fLogo = css`
  @media only screen and (max-width: 471px) {
    margin-bottom: 15px;
  }
`;

export const social = css`
  padding-top: 10px;
  padding-right: 0;
  float: right;
  p {
    display: inline-block;
    margin-right: 14px;
    font-weight: normal;
    font-family: ${styles.fonts.montserrat};
    color: ${styles.colors.white};
    font-size: 14px;
    letter-spacing: 1.1px;
    vertical-align: middle;
    margin-bottom: 0;
    margin: 0 30px 0 0;
  }
  a {
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px;
  }
`;
