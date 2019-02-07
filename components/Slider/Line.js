import { css } from '@emotion/core';
import styles from '../../utils/styles';

const lineStyles = css`
  position: absolute;
  border-right: 1px solid ${styles.colors.textColor};
  opacity: 0.5;
  padding: 0px;
  top: 36%;
  right: 56px;
  height: 50px;

  @media only screen and (max-width: ${styles.breakpoints.xs}) {
    right: 25px;
  }
`;

const Line = () => <div css={lineStyles} />;

export default Line;
