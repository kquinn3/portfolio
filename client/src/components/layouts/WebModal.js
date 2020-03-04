import React, { Fragment } from "react";

import "../../assets/css/Webapps.css";

const WebModal = ({ TITLE, MODAL, WEBSITE, CODE, P1, P2, P3 }) => {
  return (
    <Fragment>
      <div className="modal" id={MODAL}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header header-color">
              <h5 className="modal-title">{TITLE}</h5>
            </div>
            <div className="modal-body modal-background">
              <div className="text-center my-3">
                <h4>Motivation</h4>
              </div>
              <div className="just-word mx-2">
                <p className="modal-font">{P1}</p>
              </div>
              <div className="text-center my-3">
                <h4>Skills</h4>
              </div>
              <div className="just-word mx-2">
                <p className="modal-font">{P2}</p>
              </div>
              <div className="text-center my-3">
                <h4>New Feature Ideas</h4>
              </div>
              <div className="just-word mx-2">
                <p className="modal-font">{P3}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between p-2 modal-background">
              {WEBSITE !== "NA" ? (
                <a
                  className="btn outline"
                  href={WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              ) : (
                <span>In Progress</span>
              )}
              {CODE !== "NA" ? (
                <a
                  className="btn outline"
                  href={CODE}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              ) : (
                <span>Unavailable</span>
              )}
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

export default WebModal;
