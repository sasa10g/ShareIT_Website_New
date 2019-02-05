import { css } from '@emotion/core';
import styles from '../../utils/styles';

export const sliderStyles = css`
  position: relative;
  width: 98%;
  margin: 0 auto;
  height: 700px !important;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 9px;
  border: 1px solid ${styles.colors.sliderBorder};
  box-shadow: 0 0 15.7px 0.3px rgba(164, 161, 161, 0.1);
`;

export const slideStyles = css`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: ${styles.colors.white};
`;

export const slideWrapperStyles = css`
  position: relative;
  height: 100%;
  width: 100%;
  transform: ${({ translateValue }) => `translateX(${translateValue};`};
  transition: transform ease-out 0.45s;
`;

export const slideContentStyles = css`
  width: 86%;
  margin-top: 140px;
  padding: 40px;

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    margin-right: 80px;
    padding: 15px;
  }
`;

export const slideReviewStyles = css`
  font-weight: 400;
  font-family: ${styles.fonts.openSans};
  color: ${styles.colors.textColor};
  font-size: 20px;
  letter-spacing: 0.1px;
  word-break: break-word;
  white-space: normal;

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    font-weight: 400;
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 18px;
    word-break: break-all;
    white-space: normal;
  }

  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    font-weight: 400;
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 14px;
    word-break: break-word;
    white-space: normal;
  }
`;

export const slideReviewerStyles = css`
  margin-top: 100px;
  font-weight: bold;
  font-family: ${styles.fonts.openSans};
  color: ${styles.colors.textColor};
  letter-spacing: 0.1px;
  font-size: 24px;

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    margin-top: 20px;
    font-weight: 700;
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 18px;
  }

  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    margin-top: 20px;
    font-weight: 700;
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 14px;
  }
`;

export const slideCompanyStyles = css`
  font-weight: normal;
  font-family: ${styles.fonts.openSans};
  color: ${styles.colors.textColor};
  letter-spacing: 0.1px;
  font-size: 16px;

  @media only screen and (max-width: ${styles.breakpoints.sm}) {
    font-weight: 400;
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 12px;
  }

  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    font-weight: 400;
    font-family: ${styles.fonts.openSans};
    color: ${styles.colors.textColor};
    font-size: 9px;
  }
`;

export const counterStyles = css`
  position: absolute;
  top: 30%;
  right: 45px;
  color: ${styles.colors.textColor};
  font-size: 14px;
  font-weight: 600;
  font-family: ${styles.fonts.montserrat};
  z-index: 150;
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);

  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    right: 15px;
  }
`;

export const indicatorStyles = css`
  position: absolute;
  top: 50%;
  right: 29px;
  color: #3a3a3a;
  z-index: 150;
  line-height: 0.1;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);

  .invisible {
    visibility: hidden;
  }

  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    right: 0;
  }
`;

export const barStyles = css`
  color: ${styles.colors.textColor};
  font-size: 16px;
  font-weight: 800;
  font-family: ${styles.fonts.openSans};
`;

export const arrowStyles = css`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  right: 75px;
  width: 50px;
  cursor: pointer;
  transition: transform ease-in 0.1s;
  z-index: 150;
  color: ${styles.colors.textColor};
  font-family: ${styles.fonts.montserrat};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1px;

  img {
    padding-left: 12px;
  }

  &.top-arrow {
    bottom: 50px !important;
  }

  &.bottom-arrow {
    bottom: 75px;
  }

  &:hover {
    transition: transform ease-in 0.2s;
    transform: scale(1.03);
  }

  @media only screen and (max-width: ${styles.breakpoints.md}) {
    height: 100px;
  }

  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    height: 0;
  }
`;
