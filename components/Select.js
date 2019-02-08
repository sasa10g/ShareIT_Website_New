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

const selectStyles = css`
  font-family: ${styles.fonts.openSans};
  color: ${styles.colors.formInput};
  font-size: 14px;
  background: url('./static/selectDropIcon.png') no-repeat right
    ${styles.colors.white};
  -webkit-appearance: none;
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-bottom: 1px solid #c9cece;
  border-radius: 0; //Safari rounded edges fix
  padding-left: 5px;
`;

const Select = ({ dataList, value, onChange, id, label, type }) => (
  <>
    <label htmlFor={id} css={labelStyles}>
      {label}
    </label>
    <select
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      css={selectStyles}
    >
      {dataList.map(link => (
        <option key={link.key}> {link.text}</option>
      ))}
    </select>
  </>
);

Select.defaultProps = {
  type: 'text',
  dataList: [],
};

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  dataList: PropTypes.string,
};

export default Select;
