import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import styles from '../../utils/styles';
/**
 * This section is intended to be a flex container.
 *
 * We can pass it 'direction', 'justify', 'align', to order the positioning
 * of elements inside of it.
 *
 * We can also pass 'background' represeting a color value, the default being
 * the white themed color defined in '/utils/styles.js'.
 */
const Section = styled.section`
  display: flex;
  background-color: ${({ background }) => background || styles.colors.white};
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-column: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  padding: 0 5%;
  padding-top: 170px;
  padding-bottom: 110px;
`;

Section.propTypes = {
  background: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
};

export default Section;
