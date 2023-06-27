import React, { Suspense } from "react";

const ContactReCAPTCHA = () => {
  return (
    <>
      <Suspense fallback={<p>Loading reCAPTCHA...</p>}>
        <div
          className="g-recaptcha"
          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUB_KEY}
        ></div>
      </Suspense>
    </>
  );
};

export default ContactReCAPTCHA;
