import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Flex from '../../../common/Flex';

const imgStyles = css`
  width: 292px;
`;

const Graphic = ({ imgSrc }) => (
  <Flex justify="center" align="center">
    <img css={imgStyles} src={imgSrc} />
  </Flex>
);

Graphic.propTypes = {
  imgSrc: PropTypes.string,
};

export default Graphic;
