import React from 'react'

const ContactInfo = () => {
    return (
        <>
            {/* <!-- Contact Info --> */}
            <div className="col-xs-12 col-sm-4">
                <div className="lm-info-block gray-default">
                    <i className="lnr lnr-map-marker"></i>
                    <h4>San Francisco</h4>
                    <span className="lm-info-block-value"></span>
                    <span className="lm-info-block-text"></span>
                </div>

                <div className="lm-info-block gray-default">
                    <i className="lnr lnr-phone-handset"></i>
                    <h4>415-832-2000</h4>
                    <span className="lm-info-block-value"></span>
                    <span className="lm-info-block-text"></span>
                </div>

                <div className="lm-info-block gray-default">
                    <i className="lnr lnr-envelope"></i>
                    <h4><a href="https://lmpixels.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="22434e475a62475a434f524e470c414d4f">[email&#160;protected]</a></h4>
                    <span className="lm-info-block-value"></span>
                    <span className="lm-info-block-text"></span>
                </div>

                <div className="lm-info-block gray-default">
                    <i className="lnr lnr-checkmark-circle"></i>
                    <h4>Freelance Available</h4>
                    <span className="lm-info-block-value"></span>
                    <span className="lm-info-block-text"></span>
                </div>


            </div>
            {/* <!-- End of Contact Info --> */}
        </>
    )
}

export default ContactInfo