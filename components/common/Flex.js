import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

Flex.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start',
};

Flex.propTypes = {
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
};

export default Flex;
