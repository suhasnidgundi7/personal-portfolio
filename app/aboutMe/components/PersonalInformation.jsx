import React from "react";

const PersonalInformation = () => {
  return (
    <>
      <div class="row">
        <div class="col-xs-12 col-sm-7">
          <p>
            Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
            elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
            justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
            hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
            condimentum dictum et vel massa. Ut in imperdiet dolor, vel
            consectetur dui.
          </p>
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
                <span class="value">
                  <a
                    href="https://lmpixels.com/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="f7929a969e9bb7928f969a879b92d994989a"
                  >
                    [email&#160;protected]
                  </a>
                </span>
              </li>

              <li>
                <span class="title">Phone</span>
                <span class="value">+0123 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
