import { css } from '@emotion/core';

export const sideDrawerCloseStyle = css`
  position: fixed;
  z-index: 200;
  right: 20px;
  top: 40px;
`;

export const sectionStyles = css`
  position: fixed;
  z-index: 200;
  margin-top: 0px;
  right: 40px;
`;

export const menuxStyle = css`
  position: relative;
  margin: auto;
  border: 1px solid transparent;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  cursor: pointer;
`;

export const barStyle = css`
  height: 3px;
  width: 30px;
  display: block;
  margin: 6px auto;
  position: relative;
  background-color: #5e5e5e;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;

  &:first-child {
    transform: rotate(45deg);
    top: 9px;
  }

  &:last-child {
    transform: rotate(135deg);
  }
`;
