import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Indicator from './Indicator';
import { indicatorStyles } from './slider-styles';

export default function IndicatorsList(props) {
  const [indicators, setIndicators] = useState([]);

  function loadIndicators() {
    const newIndicators = [];
    for (let i = 0; i < props.indicatorsCount + 1; i++) {
      newIndicators.push(
        <Indicator key={i} invisible={props.current + 1 === i ? true : false} />
      );
    }
    setIndicators(newIndicators);
  }

  useEffect(() => {
    loadIndicators();
  });

  return <div css={indicatorStyles}>{indicators}</div>;
}

IndicatorsList.propTypes = {
  current: PropTypes.number.isRequired,
  indicatorsCount: PropTypes.number.isRequired,
};
