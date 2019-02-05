import { css } from '@emotion/core';

export const sideDrawerCloseStyle = css`
  position: fixed;
  z-index: 200;
  right: 20px;
  top: 20px;
`;

export const sectionStyles = css`
  position: fixed;
  z-index: 200;
  margin-top: 0px;
  right: 25px;
`;

export const menuxStyle = css`
  position: relative;
  margin: auto;
  border: 1px solid transparent;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
`;

export const barStyle = css`
  height: 3px;
  width: 40px;
  display: block;
  margin: 10px auto;
  position: relative;
  background-color: #3a3a3a;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  -webkit-transition: 0.4s;
  transition: 0.4s;
`;
