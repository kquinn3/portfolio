import React, { Fragment } from "react";

import "../../assets/css/Webapps.css";
import imgUbci from "../../assets/img/ubroadcastit.PNG";
import imgCoin from "../../assets/img/coininv.PNG";
import imgBlanda from "../../assets/img/blanda.PNG";
import imgSandbox from "../../assets/img/sandbox.PNG";

const AppBlock = ({ ID, TITLE, IMG, ALT }) => {
  return (
    <div id={ID} className="col-4">
      <div className="card bg-img">
        <div className="card-title bg-color fg-color">{TITLE}</div>
        <img
          className="card-img img-fluid text-center"
          src={IMG}
          alt={ALT}
        ></img>
        <div className="row">
          <button className="col-4">Details</button>
          <button className="col-4">Website</button>
          <button className="col-4">Code</button>
        </div>
      </div>
    </div>
  );
};

const Webapps = () => {
  return (
    <Fragment>
      <div className="webapps">
        <div className="container">
          <div className="h-10v"></div>
          <div className="text-center mb-5">
            <h1>Web Applications</h1>
          </div>
          <div className="row h-25v mb-5 text-center">
            <AppBlock
              ID="ubci"
              TITLE="U Broadcast-It"
              IMG={imgUbci}
              ALT="U-Broadcast-It landing page"
            ></AppBlock>
            <AppBlock
              ID="coininv"
              TITLE="Coin Inventory"
              IMG={imgCoin}
              ALT="Coin Inventory landing page"
            ></AppBlock>
            <AppBlock
              ID="blanda"
              TITLE="Bell, Lewis & Assoc"
              IMG={imgBlanda}
              ALT="Bell, Lewis & Associates landing page"
            ></AppBlock>
          </div>
          <div className="row h-25v">
            <AppBlock ID="kpqsol" TITLE="KPQ Solutions, LLC"></AppBlock>
            <AppBlock ID="inprogress" TITLE="In Progress"></AppBlock>
            <AppBlock
              ID="sandbox"
              TITLE="Sandbox"
              IMG={imgSandbox}
              ALT="Sandbox landing page"
            ></AppBlock>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Webapps;
