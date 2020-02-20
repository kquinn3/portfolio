import React, { Fragment } from "react";

const KevbotCustom = ({ ID, IMG, ALT, TXT0, TXT1 }) => {
  const skill1 = () => (
    <Fragment>
      <p className="my-2">{TXT0}</p>
      <p className="my-2">{TXT1}</p>
    </Fragment>
  );
  return (
    <Fragment>
      <div id={ID}>
        {/* Extra Small <576px */}
        <div className="bot-card card">
          <img className="card-img" src={IMG} alt={ALT} />
          <div className="text-div">
            <ul className="nav nav-tabs nav-justified justify-content-around">
              <li>
                <button id="btn1" onClick={skill1}>
                  Intro
                </button>
              </li>
              <li>
                <button id="btn2" onClick={skill1}>
                  Core
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default KevbotCustom;
