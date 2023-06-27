import React from "react";

const FunFacts = () => {
  return (
    <>
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="block-title">
            <h3>
              Fun <span>Facts</span>
            </h3>
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

        <div class="col-xs-12 col-sm-4">
          <div class="fun-fact gray-default">
            <i class="lnr lnr-star"></i>
            <h4>Awards Won</h4>
            <span class="fun-fact-block-value">15</span>
            <span class="fun-fact-block-text"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
