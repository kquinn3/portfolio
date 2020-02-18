import React, { Fragment } from "react";

const Kevbot = ({ ID, IMG, ALT, TXT }) => {
  return (
    <Fragment>
      <div className="kevbot-container">
        <div id={ID} className="kevbot-intro card w-max-400">
          <img
            height="200px"
            className="card-img img-fluid"
            src={IMG}
            alt={ALT}
          />
          <div className="text-left h-250px card-body text-color bg-color">
            <p>{TXT}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Kevbot;
