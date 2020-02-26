import React, { Fragment } from "react";

const SkillsCard = ({ ID, IMG, ALT, TXT }) => {
  return (
    <Fragment>
      <div id={ID} className="card bg-color fg-color">
        {IMG !== "NoImage" && (
          <img className="card-img img-fluid" src={IMG} alt={ALT}></img>
        )}
        <div className="card-body">
          <p>{TXT}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default SkillsCard;
