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
    background: ${styles.colors.blue};
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
  @media only screen and (max-width: ${styles.breakpoints.md}) {
    float: unset;
  }
  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    display: block;
  }
`;

/** FooterContact */

export const contactFooter = css`
  padding: 100px 0 50px 0;
  h3 {
    font-weight: 500;
    font-family: ${styles.fonts.raleway};
    font-size: 48px;
    letter-spacing: 0.2px;
    padding-bottom: 30px;
    margin-bottom: 18px;
    color: ${styles.colors.textColor};
    text-align: left;
  }
  p {
    font-weight: normal;
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 20px;
    letter-spacing: 0.1px;
    text-align: left;
    line-height: normal;
  }
  .con-h3 {
    padding-left: 25px;
  }
`;

export const footerContactHalf = css`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-areas: 'left right';
  grid-column-gap: 100px;
  grid-row-gap: 20px;

  @media only screen and (max-width: ${styles.breakpoints.md}) {
    display: block;
  }

  //Mixi

  .footer-contact-half-left {
    grid-area: left;
  }

  .footer-contact-half-right {
    grid-area: right;
  }

  .footer-contact-half-right-half {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas: 'con-left con-right';
    grid-column-gap: 30px;
  }

  .con-left {
    float: left;
  }

  .con-right {
    float: right;
  }

  .form-con {
    margin-bottom: 10px;
    padding: 15px 0 20px 25px;
    label {
      font-weight: normal;
      font-family: ${styles.fonts.openSans};
      color: ${styles.colors.formLabel};
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1px;
      display: block;
      padding-bottom: 20px;
    }
    input[type='text'],
    input[type='email'] {
      margin-bottom: 10px;
      font-weight: 400;
      font-family: ${styles.fonts.openSans};
      color: ${styles.colors.formInput};
      padding-left: 10px;
      font-size: 14px;
      letter-spacing: 1.1px;
      width: 95%;
      border: 0;
      outline: none;
      border-bottom: 1px solid #c9cece;
      border-radius: 0; //Safari rounded edges fix
      height: 52px;
      background: ${styles.colors.white};
      //box-shadow: 0 0 0 30px white inset;
      &:hover {
        //background: #f5f5f5;
        border-bottom: 1px solid ${styles.colors.borderBlue};
        -webkit-transition: border-color 0.3s ease-out;
        -moz-transition: border-color 0.3s ease-out;
        -o-transition: border-color 0.3s ease-out;
        transition: border-color 0.3s ease-out;
      }
    }
  }

  .form-con-error {
    margin-bottom: 0;
    padding: 0 0 0 25px;
    span {
      margin-bottom: 0;
      padding: 0x;
      font-weight: normal;
      font-family: ${styles.fonts.openSans};
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1px;
      display: block;
    }
  }

  .form-con:focus-within {
    background: #f5f5f5;
    -webkit-transition: background-color 0.3s ease-out;
    -moz-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
    transition: background-color 0.3s ease-out;
    color: ${styles.colors.formInput};
  }

  .ctch {
    //reCAPTCHA
    float: left;
    //width: 292px;
    padding-bottom: 10px;
    padding-right: 34px;
  }

  .form-con-s {
    margin-bottom: 10px;
    padding: 15px 0 20px 25px;
  }

  .form-con-s button {
    float: right;
    font-family: ${styles.fonts.raleway};
    font-weight: 600;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    width: 140px;
    display: block;
    border-radius: 25.5px;
    height: 51px;
    color: ${styles.colors.black};
    line-height: 51px;
    border: 0;
    outline: 0;
    cursor: pointer;
    border: 2px solid ${styles.colors.borderBlue};
    background: ${styles.colors.white};
    margin-top: 15px;
    &:hover {
      background: ${styles.colors.borderBlue};
      line-height: 51px;
      -webkit-transition: background-color 0.3s ease-out;
      -moz-transition: background-color 0.3s ease-out;
      -o-transition: background-color 0.3s ease-out;
      transition: background-color 0.3s ease-out;
      color: ${styles.colors.white};
    }
  }

  .map {
    padding-top: 65px;
  }

  .mapouter {
    width: 100%;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    iframe {
      left: 0;
      top: 0;
      width: 100%;
    }
  }

  @media only screen and (max-width: ${styles.breakpoints.lg}) {
    .footer-contact-half-right-half {
      display: block;
    }

    .con-left {
      float: unset;
    }

    .con-right {
      float: unset;
    }
  }

  @media only screen and (max-width: ${styles.breakpoints.md}) {
    .footer-contact-half-right {
      display: block;
    }
  }

  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    .con-left {
      float: none;
      width: auto;
    }
    .con-right {
      float: none;
      width: auto;
      margin-top: 15px;
    }
    .contact h3 {
      padding-bottom: 13px;
    }
    .ctch img {
      width: 100%;
    }
    .flogo {
      margin-bottom: 15px;
    }
  }
`;
