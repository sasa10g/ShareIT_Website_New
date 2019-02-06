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
    footerText: 'Copyright © 2019 Share IT. All rights reserved.',
    footerSocialTitle: 'Social Networks:',
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
          <div className="container">
            <div className="">
              <a href="/" css={fLogo}>
                <Logo src={'/static/footerLogo.png'} />
              </a>
              <span>{this.state.footerText}</span>

              <div css={social}>
                <p>{this.state.footerSocialTitle}</p>
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
