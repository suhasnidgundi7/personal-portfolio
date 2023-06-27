import React from "react";

const Pricing = () => {
  return (
    <>
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="block-title">
            <h3>Pricing</h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="fw-pricing clearfix row">
            <div class="fw-package-wrap col-md-6">
              <div class="fw-package">
                <div class="fw-heading-row">
                  <span>Silver</span>
                </div>

                <div class="fw-pricing-row">
                  <span>$64</span>
                  <small>per month</small>
                </div>

                <div class="fw-button-row">
                  <a
                    href="index.html#"
                    target="_self"
                    class="btn btn-secondary"
                  >
                    Free Trial
                  </a>
                </div>

                <div class="fw-default-row">Lorem ipsum dolor</div>
                <div class="fw-default-row">Pellentesque scelerisque</div>
                <div class="fw-default-row">Morbi eu sagittis</div>
              </div>
            </div>

            <div class="fw-package-wrap col-md-6 highlight-col">
              <div class="fw-package">
                <div class="fw-heading-row">
                  <span>Gold</span>
                </div>

                <div class="fw-pricing-row">
                  <span>$128</span>
                  <small>per month</small>
                </div>

                <div class="fw-button-row">
                  <a href="index.html#" target="_self" class="btn btn-primary">
                    Free Trial
                  </a>
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
    </>
  );
};

export default Pricing;
