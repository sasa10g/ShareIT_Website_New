import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/core';
import styles from '../utils/styles';

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta key="charset" charSet="UTF-8" />
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta
            key="siteName"
            property="og:site_name"
            content="Share IT Web Development"
          />
          <meta
            key="description"
            property="og:description"
            content="Share IT is small consulting company that is founded in 2012. We are mainly concentrated on Web Development and infrastructure. We have years of experience working on Sharepoint platform."
          />
          <meta
            key="title"
            property="og:title"
            content="Share IT Web Development"
          />
          <meta key="type" property="og:type" content="website" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Raleway"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Global
            styles={css`
              body {
                margin: 0;
                padding: 0;
                font-family: ${styles.fonts.raleway};
              }

              .menu {
                float: right;
                padding-top: 13px;
                li {
                  display: inline-block;
                  a {
                    color: $white;
                    font-size: 16px;
                    font-weight: 600;
                    padding: 0 0 0 0px;
                    display: block;
                    margin-left: 30px;
                    text-decoration: none;
                    &:hover {
                      color: #45baf6;
                      @include fade-out(color);
                    }
                  }
                }
              }

              .active-link {
                color: #45baf6 !important;
              }

              .side-drawer {
                height: 100%;
                background: rgba(255, 255, 255, 0.98);
                box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 200;
                transform: translateX(-102%);
                transition-duration: 0.3s;
                transition-timing-function: ease-in;
                a {
                  color: #3a3a3a !important;
                  text-decoration: none !important;
                  font-size: 20px;
                  line-height: 3.5em;
                  &:hover,
                  &:active {
                    color: #45baf6;
                    text-decoration: none;
                    -webkit-transition: color 0.2s ease-out;
                    -moz-transition: color 0.2s ease-out;
                    -o-transition: color 0.2s ease-out;
                    transition: color 0.2s ease-out;
                  }
                }
                &.open {
                  transform: translateX(0);
                }
                ul {
                  list-style: none;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin-bottom: 50px;
                  padding-left: 0;
                  li {
                    a {
                      text-decoration: none;
                    }
                  }
                }
                li {
                  margin: 0.4rem auto 0 auto;
                  text-transform: uppercase;
                  height: 4em;
                  display: block;
                  width: 80%;
                  text-align: center;
                }
                ul li::after {
                  content: '';
                  display: block;
                  border: 0;
                  height: 1px;
                  background-image: -webkit-linear-gradient(
                    left,
                    #f0f0f0,
                    #8c8b8b,
                    #f0f0f0
                  );
                  background-image: -moz-linear-gradient(
                    left,
                    #f0f0f0,
                    #8c8b8b,
                    #f0f0f0
                  );
                  background-image: -ms-linear-gradient(
                    left,
                    #f0f0f0,
                    #8c8b8b,
                    #f0f0f0
                  );
                  background-image: -o-linear-gradient(
                    left,
                    #f0f0f0,
                    #8c8b8b,
                    #f0f0f0
                  );
                }
              }
            `}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
