"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouteAnimationContext } from "@/context/RouteAnimationContext";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [theme, setTheme] = useState("light")
  const form = useRef();

  const { userTheme } = useRouteAnimationContext(); // Accessing userTheme from the context

  useEffect(() => {
    setTheme(userTheme);
  }, [userTheme]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("personal_portfolio", "portfolio_template", form.current, "wIIDAt33JVhuGoGPP")
      .then((result) => {
        toast.success('🎉 Your message has been sent! We will get back to you soon.', {
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme,
        });
      }, (error) => {
        toast.error('⚠️ Oops! Something went wrong. Please try again later.', {
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme,
        });
      });
  };

  return (
    <>
      {/* <!-- Contact Form --> */}
      <div className="col-xs-12 col-sm-8">
        <div id="map" className="map">
          <div className="lmpixels-map">
            <iframe
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="400px"
              src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near&amp;output=embed"
            ></iframe>

          </div>
        </div>
        <div className="block-title">
          <h3>
            How Can I <span>Help You?</span>
          </h3>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="messages"></div>

          <div className="controls two-columns">
            <div className="fields clearfix">
              <div className="left-column">
                <div className="form-group form-group-with-icon">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder=""
                    required="required"
                    data-error="Name is required."
                  />
                  <label htmlFor="name">Full Name</label>
                  <div className="form-control-border"></div>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group form-group-with-icon">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder=""
                    required="required"
                    data-error="Valid email is required."
                  />
                  <label htmlFor="email">Email Address</label>
                  <div className="form-control-border"></div>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group form-group-with-icon">
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder=""
                    required="required"
                    data-error="Subject is required."
                  />
                  <label htmlFor="subject">Subject</label>
                  <div className="form-control-border"></div>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="right-column">
                <div className="form-group form-group-with-icon">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder=""
                    rows="7"
                    required="required"
                    data-error="Please, leave me a message."
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div className="form-control-border"></div>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>

            <div
              className="g-recaptcha"
              data-sitekey="6Lee9dMmAAAAABSl8VYMo_w7isu19-Ada794SH9t"
            ></div>

            <input
              type="submit"
              className="button btn-send"
              value="Send message"
            />
          </div>
        </form>
      </div>
      {/* <!-- End of Contact Form --> */}
    </>
  );
};

export default ContactForm;
