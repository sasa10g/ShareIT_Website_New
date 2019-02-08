import React from 'react';
import PropTypes from 'prop-types';
import { counterStyles } from './slider-styles';

const Counter = ({ current, total }) => {
  return (
    <div css={counterStyles}>
      <span>
        {current}/{total}
      </span>
    </div>
  );
};

Counter.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Counter;
