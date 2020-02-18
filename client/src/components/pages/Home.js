import React, { Fragment } from "react";
import Introduction from "../layouts/Introduction";

import "../../assets/css/Landing.css";

const Home = () => {
  return (
    <Fragment>
      <div className="landing">
        <Introduction />
      </div>
    </Fragment>
  );
};

export default Home;
