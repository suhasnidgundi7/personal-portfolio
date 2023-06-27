import React, { Suspense } from "react";

const ContactMap = () => {
  return (
    <>
      <div id="map" className="map">
        <div className="lmpixels-map">
          <Suspense fallback={<p>Loading Map...</p>}>
            <iframe
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="400px"
              src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near&amp;output=embed"
            ></iframe>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
