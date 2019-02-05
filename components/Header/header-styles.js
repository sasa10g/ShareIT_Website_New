import { css } from '@emotion/core';
import styles from '../../utils/styles';

export const headerStyles = css`
  padding: 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${styles.colors.blue};
  height: 56px;
  z-index: 9;

  .spacer {
    flex: 1;
  }

  @media only screen and (max-width: ${styles.breakpoints.lg}) {
    .toolbar_navigation-items {
      display: none;
    }
  }
  @media only screen and (min-width: ${styles.breakpoints.lg}) {
    .toolbar__toggle-button {
      display: none;
    }
  }
`;

export const navStyles = css`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 30px;
`;

export const logoStyles = css`
  float: left;
  margin-left: 0.5rem;
  width: 150px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5em;
  }
`;

export const navListStyles = css`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0;
  }
`;

export const navItemStyles = css`
  a {
    color: #fff;

    &:hover,
    &:active {
      color: #45baf6;
    }
  }
`;

export const hamburgerStyles = css`
  ${({ visible }) => !visible && `visibility: hidden;`};
`;
