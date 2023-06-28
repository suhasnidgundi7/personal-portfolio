import React from "react";
import PersonalInformation from "./components/PersonalInformation";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import FunFacts from "./components/FunFacts";

export const metadata = {
  title: "Personal Portfolio | About Me",
  description: "",
};

const aboutMe = () => {
  return (
    <>
      <div className="page-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="section-content">
        {/* <!-- Personal Information --> */}
        <PersonalInformation />
        {/* <!-- End of Personal Information --> */}

        <div className="white-space-50"></div>

        {/* <!-- Services --> */}
        <Services />
        {/* <!-- End of Services --> */}

        <div className="white-space-30"></div>

        {/* <!-- Testimonials --> */}
        <Testimonials />
        {/* <!-- End of Testimonials --> */}

        <div className="white-space-50"></div>

        {/* <!-- Clients --> */}
        <Clients />
        {/* <!-- End of Clients --> */}

        <div className="white-space-50"></div>

        {/* <!-- Pricing --> */}
        <Pricing />
        {/* <!-- End of Pricing --> */}

        <div className="white-space-50"></div>

        {/* <!-- Fun Facts --> */}
        <FunFacts />
        {/* <!-- End of Fun Facts --> */}
      </div>

      {/* <!-- End of About Me Subpage --> */}
    </>
  );
};

export default aboutMe;
