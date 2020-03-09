import React, { Fragment } from "react";

import "../../assets/css/Webapps.css";

const WebCard = ({ ID, IMG, ALT, TITLE, MODAL }) => {
  return (
    <Fragment>
      <div id={ID} className="m-2 webapp">
        <div className="card">
          <button className="noPBM" data-toggle="modal" data-target={MODAL}>
            <div>
              <h4 className="card-title nom t-color p-2">{TITLE}</h4>
              <img
                className="card-img img-fluid text-center"
                src={IMG}
                alt={ALT}
              ></img>
              {/* <p className="card-subtitle t-color p-2">{SUBTITLE}</p> */}
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default WebCard;
