"use client"

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, "wIIDAt33JVhuGoGPP")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      {/* <!-- Contact Form --> */}
      <div className="col-xs-12 col-sm-8">
        <div id="map" className="map">
          <div className="lmpixels-map">
            <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;amp;t=m&amp;amp;z=16&amp;amp;output=embed&amp;amp;iwloc=near&amp;output=embed"></iframe>
          </div>
        </div>
        <div className="block-title">
          <h3>How Can I <span>Help You?</span></h3>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>

          <div className="messages"></div>

          <div className="controls two-columns">
            <div className="fields clearfix">
              <div className="left-column">
                <div className="form-group form-group-with-icon" >
                  <input id="form_name" type="text" name="name" className="form-control" placeholder="" required="required" data-error="Name is required." />
                  <label>Full Name</label>
                  <div className="form-control-border"></div>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group form-group-with-icon">
                  <input id="form_email" type="email" name="email" className="form-control" placeholder="" required="required" data-error="Valid email is required." />
                  <label>Email Address</label>
                  <div className="form-control-border"></div>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group form-group-with-icon">
                  <input id="form_subject" type="text" name="subject" className="form-control" placeholder="" required="required" data-error="Subject is required." />
                  <label>Subject</label>
                  <div className="form-control-border"></div>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="right-column">
                <div className="form-group form-group-with-icon">
                  <textarea id="form_message" name="message" className="form-control" placeholder="" rows="7" required="required" data-error="Please, leave me a message."></textarea>
                  <label>Message</label>
                  <div className="form-control-border"></div>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>

            <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>

            <input type="submit" className="button btn-send" value="Send message" />
          </div>
        </form>
      </div>
      {/* <!-- End of Contact Form --> */}
    </>
  )
}

export default ContactForm