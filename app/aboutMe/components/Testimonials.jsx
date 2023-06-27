import React from "react";

const Testimonials = () => {
  return (
    <>
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="block-title">
            <h3>Testimonials</h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="testimonials owl-carousel">
            {/* <!-- Testimonial 1 --> */}
            <div class="testimonial">
              <div class="img">
                <img
                  src="assets/images/testimonials/testimonial-1.jpg"
                  alt="Alex Smith"
                />
              </div>
              <div class="text">
                <p>
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
                  dolor. Nulla condimentum nunc sit amet urna tempus finibus.
                  Duis mollis leo id ligula pellentesque, at vehicula dui
                  ultrices.
                </p>
              </div>

              <div class="author-info">
                <h4 class="author">Julia Hickman</h4>
                <h5 class="company">Omni Source</h5>
                <div class="icon">
                  <i class="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            {/* <!-- End of Testimonial 1 --> */}

            {/* <!-- Testimonial 2 --> */}
            <div class="testimonial">
              <div class="img">
                <img
                  src="assets/images/testimonials/testimonial-2.jpg"
                  alt="Alex Smith"
                />
              </div>
              <div class="text">
                <p>
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
                  dolor. Nulla condimentum nunc sit amet urna tempus finibus.
                  Duis mollis leo id ligula pellentesque, at vehicula dui
                  ultrices.
                </p>
              </div>

              <div class="author-info">
                <h4 class="author">Robert Watkins</h4>
                <h5 class="company">Endicott Shoes</h5>
                <div class="icon">
                  <i class="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            {/* <!-- End of Testimonial 2 --> */}

            {/* <!-- Testimonial 3 --> */}
            <div class="testimonial">
              <div class="img">
                <img
                  src="assets/images/testimonials/testimonial-3.jpg"
                  alt="Alex Smith"
                />
              </div>
              <div class="text">
                <p>
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
                  dolor. Nulla condimentum nunc sit amet urna tempus finibus.
                  Duis mollis leo id ligula pellentesque, at vehicula dui
                  ultrices.
                </p>
              </div>

              <div class="author-info">
                <h4 class="author">Kristin Carroll</h4>
                <h5 class="company">Helping Hand</h5>
                <div class="icon">
                  <i class="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            {/* <!-- End of Testimonial 3 --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
