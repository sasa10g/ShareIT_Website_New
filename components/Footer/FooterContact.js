/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import { contactFooter, footerContactHalf } from './footer-style';
import GMap from './GMap';

class FooterContact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    recaptcha: '',

    errorRecaptcha: '',
    errorName: '',
    errorEmail: '',
    errorSubject: '',
    errorMessage: '',

    mobile: 'Mobile: 123-456 -789',
    tel: 'Tel: 123-456-7890',
    fax: 'Fax: 123-456-7890',
    address: 'Narodnog Fronta 55A,',
    zip: '21000 Novi Sad,',
    country: 'Serbia',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, subject, message, recaptcha } = this.state;
    if (
      name !== '' &&
      email !== '' &&
      subject !== '' &&
      message !== '' &&
      recaptcha !== ''
    ) {
      var json = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        recaptcha: recaptcha,
      };
      contactService
        .sendInquiry(json)
        .then(resp => {
          alert('Message Sent');
        })
        .catch(e => {
          alert(e);
        });
    } else {
      if (recaptcha === '') {
        this.setState({ errorRecaptcha: "Please accept that you're hooman" });
      }
      if (message === '') {
        this.setState({ errorMessage: 'Please fill in the message' });
      }
      if (subject === '') {
        this.setState({ errorSubject: 'Please fill in the subject' });
      }
      if (email === '') {
        this.setState({ errorEmail: 'Please fill in the email' });
      }
      if (name === '') {
        this.setState({ errorName: 'Please fill in the name' });
      }

      if (recaptcha !== '') {
        this.setState({ errorRecaptcha: '' });
      }
      if (message !== '') {
        this.setState({ errorMessage: '' });
      }
      if (subject !== '') {
        this.setState({ errorSubject: '' });
      }
      if (email !== '') {
        this.setState({ errorEmail: '' });
      }
      if (name !== '') {
        this.setState({ errorName: '' });
      }
    }
  };

  onChange(response) {
    this.setState({
      recaptcha: response,
    });
  }
  render() {
    return (
      <div css={contactFooter}>
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
        <div className="container">
          <div css={footerContactHalf}>
            <div className="footer-contact-half-left">
              <h3 className="con-h3">Contact Us</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="form-con">
                  <label
                    htmlFor="name"
                    style={this.state.errorName !== '' ? { color: 'red' } : {}}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    spellCheck="false"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </div>

                <div className="form-con">
                  <label
                    htmlFor="email"
                    style={this.state.errorEmail !== '' ? { color: 'red' } : {}}
                  >
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    spellCheck="false"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>

                <div className="form-con">
                  <label
                    htmlFor="subject"
                    style={
                      this.state.errorSubject !== '' ? { color: 'red' } : {}
                    }
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    spellCheck="false"
                    value={this.state.subject}
                    onChange={e => this.setState({ subject: e.target.value })}
                  />
                </div>

                <div className="form-con">
                  <label
                    htmlFor="message"
                    style={
                      this.state.errorMessage !== '' ? { color: 'red' } : {}
                    }
                  >
                    I am writing about
                  </label>
                  <input
                    id="message"
                    type="text"
                    name="message"
                    spellCheck="false"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                  />
                </div>
                {this.state.errorRecaptcha !== '' && (
                  <div className="form-con-error">
                    <span style={{ color: 'red' }}>
                      {this.state.errorRecaptcha}
                    </span>
                  </div>
                )}

                <div className="form-con-s">
                  <div className="ctch">
                    <br />
                    ReCAPTCHA
                    <br />
                  </div>
                  <button type="submit" onClick={this.handleSubmit}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="footer-contact-half-right">
              <div className="footer-contact-half-right-half">
                <div className="con-left">
                  <h3>Call Us</h3>
                  <p>
                    {this.state.mobile}
                    <br />
                    {this.state.tel}
                    <br />
                    {this.state.fax}
                  </p>
                </div>
                <div className="con-right">
                  <h3>Our Address</h3>
                  <p>
                    {this.state.address}
                    <br />
                    {this.state.zip}
                    <br />
                    {this.state.country}
                  </p>
                </div>
              </div>
              <GMap width="663" height="380" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterContact;
