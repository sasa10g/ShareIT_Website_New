import React from 'react';
import Recaptcha from 'react-recaptcha';
import FooterContact from '../Footer/FooterContact';

const ReCap = () => (
  <div className="ctch">
    <br />
    <Recaptcha
      sitekey="6LfTYnMUAAAAAGMndpaHhgUMDietd3e_kTWDidX4"
      render="explicit"
      verifyCallback={FooterContact.verifyCallback}
      onloadCallback={FooterContact.recaptchaLoaded}
    />
    <br />
  </div>
);

export default ReCap;
