"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouteAnimationContext } from "@/context/RouteAnimationContext";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import ContactMap from "./ContactMap";
import ContactReCAPTCHA from "./ContactReCAPTCHA";

const ContactForm = () => {
  const form = useRef();
  const [theme, setTheme] = useState("light");
  const { userTheme } = useRouteAnimationContext(); // Accessing userTheme from the context

  useEffect(() => {
    setTheme(userTheme);
  }, [userTheme]);

  return (
    <>
      {/* <!-- Contact Form --> */}
      <div className="col-xs-12 col-sm-8">
        <ContactMap />
        <div className="block-title">
          <h3>
            How Can I <span>Help You?</span>
          </h3>
        </div>
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().required("Message is required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(form.current);
            emailjs
              .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUB_KEY
              )
              .then((result) => {
                alert(result.text);
                toast.success(
                  "🎉 Your message has been sent! We will get back to you soon.",
                  {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: theme,
                  }
                );
                setSubmitting(false);
                resetForm();
              })
              .catch((error) => {
                alert(error);
                toast.error(
                  "⚠️ Oops! Something went wrong. Please try again later.",
                  {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: theme,
                  }
                );
                setSubmitting(false);
                resetForm();
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              {Object.keys(errors).some(
                (field) => touched[field] && errors[field]
              ) && (
                <div className="alert alert-danger" role="alert">
                  <div className="container">
                    <ul>
                      {touched.name && errors.name && <li>{errors.name}</li>}
                      {touched.email && errors.email && <li>{errors.email}</li>}
                      {touched.subject && errors.subject && (
                        <li>{errors.subject}</li>
                      )}
                      {touched.message && errors.message && (
                        <li>{errors.message}</li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
              <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className="controls two-columns">
                  <div className="fields clearfix">
                    <div className="left-column">
                      <div className="form-group form-group-with-icon">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          style={
                            errors.name && touched.name && errors.name != ""
                              ? { borderColor: "red" }
                              : null
                          }
                        />
                        <label htmlFor="name">Full Name</label>
                        <div className="form-control-border"> </div>
                      </div>

                      <div className="form-group form-group-with-icon">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          style={
                            errors.email && touched.email && errors.email != ""
                              ? { borderColor: "red" }
                              : null
                          }
                        />
                        <label htmlFor="email">Email Address</label>
                        <div className="form-control-border"></div>
                      </div>
                      <div className="form-group form-group-with-icon">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.subject}
                          style={
                            errors.subject &&
                            touched.subject &&
                            errors.subject != ""
                              ? { borderColor: "red" }
                              : null
                          }
                        />
                        <label htmlFor="subject">Subject</label>
                        <div className="form-control-border"></div>
                      </div>
                    </div>
                    <div className="right-column">
                      <div className="form-group form-group-with-icon">
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          rows="7"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          style={
                            errors.message &&
                            touched.message &&
                            errors.message != ""
                              ? { borderColor: "red" }
                              : null
                          }
                        ></textarea>
                        <label htmlFor="message">Message</label>
                        <div className="form-control-border"></div>
                      </div>
                    </div>
                  </div>

                  <ContactReCAPTCHA />

                  <input
                    disabled={isSubmitting}
                    type="submit"
                    className="button btn-send"
                    value="Send message"
                  />
                </div>
              </form>
            </>
          )}
        </Formik>
      </div>
      {/* <!-- End of Contact Form --> */}
    </>
  );
};

export default ContactForm;
