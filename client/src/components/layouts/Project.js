import React, { Fragment, useState, useEffect } from "react";
import imgChain from "../../assets/img/chain_cropped.jpg";
import imgTreasure from "../../assets/img/treasure_cropped2.jpg";
import "../../assets/css/KPQsolutions.css";

const Project = ({ projectId, IMG }) => {
  return (
    <Fragment>
      <div id={projectId}>
        {/* Chain */}
        <div className="chain">
          <img src={imgChain} alt="chain" />
          <img src={imgChain} alt="chain" />
          <img src={imgChain} alt="chain" />
          <img src={imgChain} alt="chain" />
          <img src={imgChain} alt="chain" />
          <img src={imgChain} alt="chain" />
        </div>
        {/* Treasure */}
        <div className="card project-card">
          <img className="img" src={IMG} alt="web project" />
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
