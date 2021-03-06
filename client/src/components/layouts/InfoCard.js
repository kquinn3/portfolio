import React, { Fragment } from "react";

import "../../assets/css/Webapps.css";

const InfoCard = ({ ID, TITLE, IMG, ALT, MODAL }) => {
  return (
    <Fragment>
      <div id={ID} className="m-2 otherapp">
        <div className="card">
          <button className="noPBM" data-toggle="modal" data-target={MODAL}>
            <div className="card-title nom p-2 t-color">{TITLE}</div>
            <img
              className="card-img img-fluid text-center"
              src={IMG}
              alt={ALT}
            ></img>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoCard;
