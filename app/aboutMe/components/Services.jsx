import React from "react";

const Services = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>
              What <span>I Do</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="col-inner">
            <div className="info-list-w-icon">
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-store"></i>
                </div>
                <div className="ci-text">
                  <h4>Ecommerce</h4>
                  <p>
                    Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                    odio tortor bibendum massa, sit amet ultricies ex lectus
                    scelerisque nibh. Ut non sodales.
                  </p>
                </div>
              </div>
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-laptop-phone"></i>
                </div>
                <div className="ci-text">
                  <h4>Web Design</h4>
                  <p>
                    Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                    odio tortor bibendum massa, sit amet ultricies ex lectus
                    scelerisque nibh. Ut non sodales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6">
          <div className="col-inner">
            <div className="info-list-w-icon">
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-pencil"></i>
                </div>
                <div className="ci-text">
                  <h4>Copywriting</h4>
                  <p>
                    Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                    odio tortor bibendum massa, sit amet ultricies ex lectus
                    scelerisque nibh. Ut non sodales.
                  </p>
                </div>
              </div>
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-flag"></i>
                </div>
                <div className="ci-text">
                  <h4>Management</h4>
                  <p>
                    Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                    odio tortor bibendum massa, sit amet ultricies ex lectus
                    scelerisque nibh. Ut non sodales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
