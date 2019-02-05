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
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Open+Sans|Raleway"
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
            `}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
