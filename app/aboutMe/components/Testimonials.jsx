import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Testimonials</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="testimonials owl-carousel">
            {/* <!-- Testimonial 1 --> */}
            <div className="testimonial">
              <div className="img">
                <Image width={100} height={100}
                  src="/assets/images/testimonials/testimonial-1.jpg"
                  alt="Alex Smith"
                />
              </div>
              <div className="text">
                <p>
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
                  dolor. Nulla condimentum nunc sit amet urna tempus finibus.
                  Duis mollis leo id ligula pellentesque, at vehicula dui
                  ultrices.
                </p>
              </div>

              <div className="author-info">
                <h4 className="author">Julia Hickman</h4>
                <h5 className="company">Omni Source</h5>
                <div className="icon">
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            {/* <!-- End of Testimonial 1 --> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
