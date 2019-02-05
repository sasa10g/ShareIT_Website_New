/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Indicator from './Indicator';
import { indicatorStyles } from './slider-styles';

class IndicatorsList extends Component {
  state = {
    indicators: [],
  };

  static propTypes = {
    current: PropTypes.number.isRequired,
    indicatorsCount: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.loadIndicators();
  }

  componentDidUpdate = prevProps => {
    if (this.props.current !== prevProps.current) {
      this.loadIndicators();
    }
  };

  loadIndicators = () => {
    const indicators = [];
    for (let i = 0; i < this.props.indicatorsCount + 1; i++) {
      indicators.push(
        <Indicator
          key={i}
          invisible={this.props.current + 1 === i ? true : false}
        />
      );
    }
    this.setState({
      indicators,
    });
  };

  render() {
    return <div css={indicatorStyles}>{this.state.indicators}</div>;
  }
}

export default IndicatorsList;
