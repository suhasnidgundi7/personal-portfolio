import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>
              Fun <span>Facts</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <div className="fun-fact gray-default">
            <i className="lnr lnr-heart"></i>
            <h4>Happy Clients</h4>
            <span className="fun-fact-block-value">578</span>
            <span className="fun-fact-block-text"></span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4">
          <div className="fun-fact gray-default">
            <i className="lnr lnr-clock"></i>
            <h4>Working Hours</h4>
            <span className="fun-fact-block-value">4,780</span>
            <span className="fun-fact-block-text"></span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4">
          <div className="fun-fact gray-default">
            <i className="lnr lnr-star"></i>
            <h4>Awards Won</h4>
            <span className="fun-fact-block-value">15</span>
            <span className="fun-fact-block-text"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
