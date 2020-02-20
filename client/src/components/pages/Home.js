import React, { Fragment } from "react";
import Introduction from "../layouts/Introduction";

import "../../assets/css/Home.css";
import "../../assets/css/Home-sm.css";
import "../../assets/css/Home-md.css";
import "../../assets/css/Home-lg.css";
import "../../assets/css/Home-xl.css";

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
