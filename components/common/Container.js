import styled from '@emotion/styled';
import styles from '../../utils/styles';

const Container = styled.div`
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  padding: 15px 15px;

  @media only screen and (max-width: ${styles.breakpoints.min}) {
    max-width: 360px;
    padding: 10px;
  }

  @media only screen and (max-width: ${styles.breakpoints.md}) {
    max-width: 640px;
    padding: 10px;
  }
`;

export default Container;
