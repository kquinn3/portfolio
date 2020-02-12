import React, { Fragment } from "react";
import PROFILE_PIC from "./assets/img/kevinquinn.jpg";
import "./assets/css/App.css";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <div className="d-flex flex-column">
            <h1 className="my-3 text-center">Kevin Quinn's Future Portfolio</h1>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <img
                  className="img-responsive m-2"
                  src={PROFILE_PIC}
                  alt="Myself"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-9">
                <h3 className="mx-3 my-2 align-start">
                  I provide web based solutions
                </h3>
                <h3 className="mx-3 my-2 align-start">
                  My home is in Greensboro, NC
                </h3>
                <h3 className="mx-3 my-2 align-start">
                  My email addess is kevinquinn1918@gmail.com
                </h3>
                <h3 className="mx-3 my-2 align-start">
                  I hope to have this completed soon
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
