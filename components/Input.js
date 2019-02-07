import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styles from '../utils/styles';

const labelStyles = css`
  font-weight: 400;
  font-family: ${styles.fonts.openSans};
  color: ${styles.colors.blue};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  margin-bottom: 0;
`;

const inputStyles = css`
  font-weight: 400;
  font-family: ${styles.fonts.openSans};
  color: ${styles.colors.formInput};
  font-size: 14px;
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 2px solid #c9cece;
  border-radius: 0;
  height: 71px;
  background: 0 0;
`;

const Input = ({ value, onChange, id, label, type }) => (
  <>
    <label htmlFor={id} css={labelStyles}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      css={inputStyles}
    />
  </>
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
