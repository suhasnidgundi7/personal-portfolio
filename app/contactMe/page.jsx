import React from "react";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: 'Contact Me',
  description: '',
}

const contact = () => {
  return (
    <>
      {/* <!-- Contact Subpage --> */}

      <div className="page-title">
        <h2>Contact</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <ContactInfo/>
          <ContactForm/>
        </div>
      </div>

      {/* <!-- End of Contact Subpage --> */}
    </>
  );
};

export default contact;
