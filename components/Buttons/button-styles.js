import { css } from '@emotion/core';
import styles from '../../utils/styles';

export const buttonStyles = css`
  box-sizing: border-box;
  display: block;
  margin-top: 70px;
  height: 51px;
  width: 179px;
  border: none;
  border-radius: 25.5px;
  line-height: 51px;
  letter-spacing: 0.8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  color: ${styles.colors.white};
  background-image: linear-gradient(to right, #49c2f5, #2788ff);

  &:hover {
    border: 2px solid ${styles.colors.borderBlue};
    line-height: 48px;
    text-decoration: none;
    color: ${styles.colors.black};
    background: none;
    background-color: #fff;
    transition: border-color 0.3s ease-out;
  }
`;
