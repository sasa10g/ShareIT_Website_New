import React from 'react';
import PropTypes from 'prop-types';
import {
  sideDrawerCloseStyle,
  sectionStyles,
  menuxStyle,
  barStyle,
} from './back-drop-style';

// :TODO check selection element two-elements style

const BackDrop = props => (
  <div css={sideDrawerCloseStyle} onClick={props.click}>
    <section css={sectionStyles}>
      <div css={menuxStyle}>
        <div css={barStyle} />
        <div css={barStyle} />
      </div>
    </section>
  </div>
);

BackDrop.propTypes = {
  click: PropTypes.bool,
};

export default BackDrop;
