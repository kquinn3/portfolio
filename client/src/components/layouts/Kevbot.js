import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Kevbot = ({ ID, IMG, ALT, TXT, LINK }) => {
  return (
    <Fragment>
      <div className="kevbot-container">
        <Link to={LINK}>
          {/* Extra Small <576px */}
          <div id={ID} className="kevbot-intro card d-sm-none">
            <img className="card-img" src={IMG} alt={ALT} />
            <div className="p-2 text-left text-div text-color bg-color">
              <p>{TXT}</p>
            </div>
          </div>

          {/* Small 576px < x < 768 */}
          <div
            id={ID}
            className="kevbot-intro card d-none d-sm-block d-md-none"
          >
            <img className="card-img" src={IMG} alt={ALT} />
            <div className="p-2 text-left  text-div text-color bg-color">
              <p>{TXT}</p>
            </div>
          </div>

          {/* Medium 768px < x < 992 */}
          <div
            id={ID}
            className="kevbot-intro card d-none d-md-block d-lg-none"
          >
            <img className="card-img" src={IMG} alt={ALT} />
            <div className="p-2 text-left  text-div text-color bg-color">
              <p>{TXT}</p>
            </div>
          </div>

          {/* Large 992px < x < 1200 */}
          <div
            id={ID}
            className="kevbot-intro card d-none d-lg-block d-xl-none"
          >
            <img className="card-img" src={IMG} alt={ALT} />
            <div className="p-2 text-left  text-div text-color bg-color">
              <p>{TXT}</p>
            </div>
          </div>

          {/* Xtra Large > 1200px */}
          <div id={ID} className="kevbot-intro card d-none d-xl-block">
            <img className="card-img" src={IMG} alt={ALT} />
            <div className="p-2 text-left  text-div text-color bg-color">
              <p>{TXT}</p>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Kevbot;
