import React, { Fragment } from "react";

import "../../assets/css/Webapps.css";

const WebCard = ({ ID, IMG, ALT, TITLE, SUBTITLE, MODAL }) => {
  return (
    <Fragment>
      <div id={ID} className="col-4 webapp">
        <div className="card">
          <button className="noPBM" data-toggle="modal" data-target={MODAL}>
            <img
              className="card-img img-fluid text-center"
              src={IMG}
              alt={ALT}
            ></img>
            <div className="card-img-overlay no-pad d-flex flex-column justify-content-between">
              <div className="overlay">
                <h4 className="card-title pt-2">{TITLE}</h4>
              </div>
              <div className="overlay">
                <p className="card-subtitle py-2">{SUBTITLE}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default WebCard;
