import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { printString, delay } from "../utils/utilities";
import "../../assets/css/Home.css";

const Home = () => {
  const [intro0, setIntro0] = useState("");
  const [intro1, setIntro1] = useState("");
  const [intro2, setIntro2] = useState("");
  const [intro3, setIntro3] = useState("");
  const [intro4, setIntro4] = useState("");
  const introTxt = [
    "Hello, my name is Kevin Quinn ",
    "I am a problem solver ",
    "My solutions typically involve",
    "web applications ",
    "but there is more..."
  ];

  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = async () => {
    // for (const [i, v] of introTxt.entries()) await printString(i, v, 900);
    await printString(introTxt[0], setIntro0, 30);
    await printString(introTxt[1], setIntro1, 30);
    await printString(introTxt[2], setIntro2, 30);
    await printString(introTxt[3], setIntro3, 30);
    await printString(introTxt[4], setIntro4, 30);
    await showButton();
  };

  const showButton = async () => {
    await delay(100);
    document.querySelector("#intro-button").style.opacity = "1";
  };

  return (
    <Fragment>
      <div className="landing">
        <div className="card">
          <div className="card-body">
            <p className="m-2 intro-text">{intro0}</p>

            <p className="m-2 intro-text">{intro1}</p>

            <p className="m-2 intro-text">{intro2}</p>
            <p className="m-2 intro-text">{intro3}</p>
            <p className="m-2 intro-text">{intro4}</p>
            <Link to="/skills">
              <button id="intro-button" class="btn btn-sm btn-block">
                Click to Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
