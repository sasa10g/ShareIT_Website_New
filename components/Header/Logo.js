import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Logo = ({ src, style }) => (
  <div css={style}>
    <Link href="/">
      <a>
        <img src={src} />
      </a>
    </Link>
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Logo;
