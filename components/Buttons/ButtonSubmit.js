import React from 'react';
import PropTypes from 'prop-types';
import { buttonStyles } from './button-styles';

const ButtonSubmit = ({ text, onClick }) => (
  <button type="submit" css={buttonStyles} onClick={onClick}>
    {text}
  </button>
);

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.string,
};

export default ButtonSubmit;
