import { css, keyframes } from '@emotion/core';

export const rotateR = keyframes`
from {
  -moz-transform: translateY(0px) rotate(0);
  -ms-transform: translateY(0px) rotate(0);
  -webkit-transform: translateY(0px) rotate(0);
  transform: translateY(0px) rotate(0);
}
to {
  -moz-transform: translateY(15px) rotate(45deg);
  -ms-transform: translateY(15px) rotate(45deg);
  -webkit-transform: translateY(15px) rotate(45deg);
  transform: translateY(15px) rotate(45deg);
}
`;

export const rotateL = keyframes`
from {
  -moz-transform: translateY(0px) rotate(0);
  -ms-transform: translateY(0px) rotate(0);
  -webkit-transform: translateY(0px) rotate(0);
  transform: translateY(0px) rotate(0);
}
to {
  -moz-transform: translateY(-15px) rotate(-45deg);
  -ms-transform: translateY(-15px) rotate(-45deg);
  -webkit-transform: translateY(-15px) rotate(-45deg);
  transform: translateY(-15px) rotate(-45deg);
}
`;

export const fade = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

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

export const model2 = css`
  background-color: 0;
  .menux .bar {
    &:nth-of-type(1) {
      -moz-transform: translateY(15px) rotate(45deg);
      -ms-transform: translateY(15px) rotate(45deg);
      -webkit-transform: translateY(15px) rotate(45deg);
      transform: translateY(15px) rotate(45deg);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      -moz-transform: translateY(-15px) rotate(-45deg);
      -ms-transform: translateY(-15px) rotate(-45deg);
      -webkit-transform: translateY(-15px) rotate(-45deg);
      transform: translateY(-15px) rotate(-45deg);
    }
  }
  .bar {
    &:nth-of-type(1) {
      -moz-animation: rotateR 1.5s cubic-bezier(0.5, 0.2, 0.2, 1);
      -webkit-animation: rotateR 1.5s cubic-bezier(0.5, 0.2, 0.2, 1);
      animation: rotateR 1.5s cubic-bezier(0.5, 0.2, 0.2, 1);
      animation-fill-mode: forwards;
    }
    &:nth-of-type(2) {
      -moz-animation: fade 1.5s cubic-bezier(0.1, 0.8, 0.1, 1);
      -webkit-animation: fade 1.5s cubic-bezier(0.1, 0.8, 0.1, 1);
      animation: fade 1.5s cubic-bezier(0.1, 0.8, 0.1, 1);
      animation-fill-mode: forwards;
    }
    &:nth-of-type(3) {
      -moz-animation: rotateL 1.5s cubic-bezier(0.5, 0.2, 0.2, 1);
      -webkit-animation: rotateL 1.5s cubic-bezier(0.5, 0.2, 0.2, 1);
      animation: rotateL 1.5s cubic-bezier(0.5, 0.2, 0.2, 1);
      animation-fill-mode: forwards;
    }
  }
`;
