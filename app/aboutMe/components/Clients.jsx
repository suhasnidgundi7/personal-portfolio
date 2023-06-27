import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <>
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
                <Image className="customImg" width={100} height={100} src="/assets/images/clients/client-1.png" alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
