import React, { Fragment } from "react";

import "../../assets/css/Information.css";

const InfoModal = ({ TITLE, MODAL, BODY }) => {
  return (
    <Fragment>
      <div className="modal" id={MODAL}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header header-color">
              <h5 className="modal-title">{TITLE}</h5>
            </div>
            <div className="modal-body modal-background">
              <div className="text-center my-3">{BODY}</div>
            </div>
            <div className="d-flex justify-content-between p-2 modal-background">
              <button className="btn outline" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoModal;
