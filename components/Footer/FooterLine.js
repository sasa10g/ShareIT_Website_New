/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import Logo from '../Header/Logo';
import { footIn, fLogo, social, container } from './footer-style';
import Social from './Social';
import socialItem from './socialItems';

class FooterLine extends Component {
  state = {
    socialItem,
  };

  render() {
    return (
      /* Test */
      <footer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div css={footIn}>
          <div css={container}>
            <div className="col-lg-9 col-md-9">
              <a href="/" css={fLogo}>
                <Logo src={'/static/footerLogo.png'} />
              </a>
              <span>Copyright © 2019 Share IT. All rights reserved.</span>
            </div>
            <div className="col-lg-3 col-md-3">
              <div css={social}>
                <p>Social Networks:</p>
                {this.state.socialItem.map(link => (
                  <Social
                    key={link.text}
                    href={link.href}
                    imgSrc={link.src}
                    alt={link.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterLine;

/*
<a href="https://www.facebook.com/Share-IT-doo-1990128854600049/">
<img src="./static/social-facebook.png" alt="Facebook" />
</a>
<a href="https://twitter.com/stevabebic/">
<img src="./static/social-twitter.png" alt="Twitter" />
</a>
<a href="https://www.linkedin.com/company/shareit/">
<img src="./static/social-linkedin.png" alt="LinkedIn" />
</a>
 */
