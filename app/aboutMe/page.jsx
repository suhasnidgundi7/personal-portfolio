import React from 'react';
import styles from './about.module.css';

const about = () => {
  return (
    <>
      {/* <!-- About Me Subpage --> */}
      <section class="animated-section animated-section-moveFromTop">
        <div class="page-title">
          <h2>About <span>Me</span></h2>
        </div>

        <div class="section-content">
          {/* <!-- Personal Information --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-7">
              <p>Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet
                tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
                hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa.
                Ut in imperdiet dolor, vel consectetur dui.</p>
            </div>

            <div class="col-xs-12 col-sm-5">
              <div class="info-list">
                <ul>
                  <li>
                    <span class="title">Age</span>
                    <span class="value">32</span>
                  </li>

                  <li>
                    <span class="title">Residence</span>
                    <span class="value">USA</span>
                  </li>

                  <li>
                    <span class="title">Address</span>
                    <span class="value">88 Some Street, Some Town</span>
                  </li>

                  <li>
                    <span class="title">e-mail</span>
                    <span class="value"><a href="https://lmpixels.com/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="197c74787075597c61787469757c377a7674">[email&#160;protected]</a></span>
                  </li>

                  <li>
                    <span class="title">Phone</span>
                    <span class="value">+0123 123 456 789</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- End of Personal Information --> */}

          <div class="white-space-50"></div>

          {/* <!-- Services --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12">
              <div class="block-title">
                <h3>What <span>I Do</span></h3>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <div class="col-inner">
                <div class="info-list-w-icon">
                  <div class="info-block-w-icon">
                    <div class="ci-icon">
                      <i class="lnr lnr-store"></i>
                    </div>
                    <div class="ci-text">
                      <h4>Ecommerce</h4>
                      <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
                        amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                    </div>
                  </div>
                  <div class="info-block-w-icon">
                    <div class="ci-icon">
                      <i class="lnr lnr-laptop-phone"></i>
                    </div>
                    <div class="ci-text">
                      <h4>Web Design</h4>
                      <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
                        amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6">
              <div class="col-inner">
                <div class="info-list-w-icon">
                  <div class="info-block-w-icon">
                    <div class="ci-icon">
                      <i class="lnr lnr-pencil"></i>
                    </div>
                    <div class="ci-text">
                      <h4>Copywriting</h4>
                      <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
                        amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                    </div>
                  </div>
                  <div class="info-block-w-icon">
                    <div class="ci-icon">
                      <i class="lnr lnr-flag"></i>
                    </div>
                    <div class="ci-text">
                      <h4>Management</h4>
                      <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
                        amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End of Services --> */}

          <div class="white-space-30"></div>

          {/* <!-- Testimonials --> */}
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
                    <img src="assets/images/testimonials/testimonial-1.jpg" />
                  </div>
                  <div class="text">
                    <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc
                      sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui
                      ultrices.</p>
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
                    <img src="assets/images/testimonials/testimonial-2.jpg" />
                  </div>
                  <div class="text">
                    <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc
                      sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui
                      ultrices.</p>
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
                    <img src="assets/images/testimonials/testimonial-3.jpg" />
                  </div>
                  <div class="text">
                    <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc
                      sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui
                      ultrices.</p>
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
          {/* <!-- End of Testimonials --> */}

          <div class="white-space-50"></div>

          {/* <!-- Clients --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12">
              <div class="block-title">
                <h3>Cilents</h3>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12">
              <div class="clients owl-carousel">

                <div class="client-block">
                  <a href="index.html#" target="_blank" title="Logo">
                    <img src="assets/images/clients/client-1.png" />
                  </a>
                </div>

                <div class="client-block">
                  <a href="index.html#" target="_blank" title="Logo">
                    <img src="assets/images/clients/client-2.png" />
                  </a>
                </div>

                <div class="client-block">
                  <a href="index.html#" target="_blank" title="Logo">
                    <img src="assets/images/clients/client-3.png" />
                  </a>
                </div>

                <div class="client-block">
                  <a href="index.html#" target="_blank" title="Logo">
                    <img src="assets/images/clients/client-4.png" />
                  </a>
                </div>

                <div class="client-block">
                  <a href="index.html#" target="_blank" title="Logo">
                    <img src="assets/images/clients/client-5.png" />
                  </a>
                </div>

                <div class="client-block">
                  <a href="index.html#" target="_blank" title="Logo">
                    <img src="assets/images/clients/client-6.png" />
                  </a>
                </div>

                <div class="client-block">
                  <a href="index.html#" target="_blank" title="Logo">
                    <img src="assets/images/clients/client-7.png" />
                  </a>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- End of Clients --> */}

          <div class="white-space-50"></div>

          {/* <!-- Pricing --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12">

              <div class="block-title">
                <h3>Pricing</h3>
              </div>
            </div>
          </div>

          <div class="row">
            <div class=" col-xs-12 col-sm-12 ">
              <div class="fw-pricing clearfix row">

                <div class="fw-package-wrap col-md-6 ">
                  <div class="fw-package">
                    <div class="fw-heading-row">
                      <span>Silver</span>
                    </div>

                    <div class="fw-pricing-row">
                      <span>$64</span>
                      <small>per month</small>
                    </div>

                    <div class="fw-button-row">
                      <a href="index.html#" target="_self" class="btn btn-secondary">Free Trial</a>
                    </div>

                    <div class="fw-default-row">Lorem ipsum dolor</div>
                    <div class="fw-default-row">Pellentesque scelerisque</div>
                    <div class="fw-default-row">Morbi eu sagittis</div>
                  </div>
                </div>

                <div class="fw-package-wrap col-md-6 highlight-col ">
                  <div class="fw-package">
                    <div class="fw-heading-row">
                      <span>Gold</span>
                    </div>

                    <div class="fw-pricing-row">
                      <span>$128</span>
                      <small>per month</small>
                    </div>

                    <div class="fw-button-row">
                      <a href="index.html#" target="_self" class="btn btn-primary">Free Trial</a>
                    </div>

                    <div class="fw-default-row">Lorem ipsum dolor</div>
                    <div class="fw-default-row">Pellentesque scelerisque</div>
                    <div class="fw-default-row">Morbi eu sagittis</div>
                    <div class="fw-default-row">Donec non diam</div>
                    <div class="fw-default-row"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- End of Pricing --> */}

          <div class="white-space-50"></div>

          {/* <!-- Fun Facts --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12">

              <div class="block-title">
                <h3>Fun <span>Facts</span></h3>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="fun-fact gray-default">
                <i class="lnr lnr-heart"></i>
                <h4>Happy Clients</h4>
                <span class="fun-fact-block-value">578</span>
                <span class="fun-fact-block-text"></span>
              </div>
            </div>

            <div class="col-xs-12 col-sm-4">
              <div class="fun-fact gray-default">
                <i class="lnr lnr-clock"></i>
                <h4>Working Hours</h4>
                <span class="fun-fact-block-value">4,780</span>
                <span class="fun-fact-block-text"></span>
              </div>
            </div>

            <div class="col-xs-12 col-sm-4 ">
              <div class="fun-fact gray-default">
                <i class="lnr lnr-star"></i>
                <h4>Awards Won</h4>
                <span class="fun-fact-block-value">15</span>
                <span class="fun-fact-block-text"></span>
              </div>
            </div>
          </div>
          {/* <!-- End of Fun Facts --> */}

        </div>
      </section>
      {/* <!-- End of About Me Subpage --> */}
    </>
  );
};

export default about;
