import React, { Fragment } from "react";
import WebCard from "../layouts/WebCard";
import WebModal from "../layouts/WebModal";
import "../../assets/css/Webapps.css";
import imgUbci from "../../assets/img/ubroadcastit.PNG";
import imgCoin from "../../assets/img/coininv.PNG";
import imgBlanda from "../../assets/img/blanda.PNG";
import imgKPQsol from "../../assets/img/coininv.PNG";
import imgInprogress from "../../assets/img/coininv.PNG";
import imgSandbox from "../../assets/img/sandbox.PNG";

const WebApps = () => {
  const modalUbci = "modalUbci";
  const modalIdUbci = `#${modalUbci}`;
  const modalCoin = "modalCoin";
  const modalIdCoin = `#${modalCoin}`;
  const modalBlanda = "modalBlanda";
  const modalIdBlanda = `#${modalBlanda}`;
  const modalKPQsol = "modalKPQsol";
  const modalIdKPQsol = `#${modalKPQsol}`;
  const modalInprogress = "modalInprogress";
  const modalIdInprogress = `#${modalInprogress}`;
  const modalSandbox = "modalSandbox";
  const modalIdSandbox = `#${modalSandbox}`;
  const pUbci = [
    "I wanted to make a live professional sports tracker but all the API subscriptions were too expensive. I decided to make my own tracker for non professional sports. The drawback is that somebody must attend the game and type in the updates. I will like to use my skills to find a sporting scoreboard company that has IoT capability in their scoreboards. ",
    "This is my first full MERN stack application. I also used socket-IO for the web sockets. ",
    "Email verification, additional sports, league creation and team pages."
  ];
  const pCoin = [
    "I wanted to make a live professional sports tracker but all the API subscriptions were too expensive. I decided to make my own tracker for non professional sports. The drawback is that somebody must attend the game and type in the updates. I will like to use my skills to find a sporting scoreboard company that has IoT capability in their scoreboards. ",
    "This is my first full MERN stack application. I also used socket-IO for the web sockets. ",
    "Email verification, additional sports, league creation and team pages."
  ];
  const pBlanda = [
    "I wanted to make a live professional sports tracker but all the API subscriptions were too expensive. I decided to make my own tracker for non professional sports. The drawback is that somebody must attend the game and type in the updates. I will like to use my skills to find a sporting scoreboard company that has IoT capability in their scoreboards. ",
    "This is my first full MERN stack application. I also used socket-IO for the web sockets. ",
    "Email verification, additional sports, league creation and team pages."
  ];
  const pKPQsol = [
    "I wanted to make a live professional sports tracker but all the API subscriptions were too expensive. I decided to make my own tracker for non professional sports. The drawback is that somebody must attend the game and type in the updates. I will like to use my skills to find a sporting scoreboard company that has IoT capability in their scoreboards. ",
    "This is my first full MERN stack application. I also used socket-IO for the web sockets. ",
    "Email verification, additional sports, league creation and team pages."
  ];
  const pInprogress = [
    "I wanted to make a live professional sports tracker but all the API subscriptions were too expensive. I decided to make my own tracker for non professional sports. The drawback is that somebody must attend the game and type in the updates. I will like to use my skills to find a sporting scoreboard company that has IoT capability in their scoreboards. ",
    "This is my first full MERN stack application. I also used socket-IO for the web sockets. ",
    "Email verification, additional sports, league creation and team pages."
  ];
  const pSandbox = [
    "I wanted to make a live professional sports tracker but all the API subscriptions were too expensive. I decided to make my own tracker for non professional sports. The drawback is that somebody must attend the game and type in the updates. I will like to use my skills to find a sporting scoreboard company that has IoT capability in their scoreboards. ",
    "This is my first full MERN stack application. I also used socket-IO for the web sockets. ",
    "Email verification, additional sports, league creation and team pages."
  ];

  return (
    <Fragment>
      <div className="webapps">
        <div className="container">
          <div className="h-10v"></div>
          <div className="text-center mb-5">
            <h1>Web Applications</h1>
          </div>
          <div className="d-none d-lg-flex row h-25v mb-5 text-center">
            <WebCard
              ID="ubci"
              TITLE="U Broadcast-It"
              SUBTITLE="Live Sports Tracker"
              IMG={imgUbci}
              ALT="U-Broadcast-It landing page"
              MODAL={modalIdUbci}
            ></WebCard>
            <WebCard
              ID="coininv"
              TITLE="Coin Inventory"
              SUBTITLE="Hobby"
              IMG={imgCoin}
              ALT="Coin Inventory landing page"
              MODAL={modalIdCoin}
            ></WebCard>
            <WebCard
              ID="blanda"
              TITLE="Bell, Lewis & Assoc"
              SUBTITLE="Website For A Business"
              IMG={imgBlanda}
              ALT="Bell, Lewis & Associates landing page"
              MODAL={modalIdBlanda}
            ></WebCard>
          </div>
          <div className="d-none d-lg-flex row h-25v">
            <WebCard
              ID="kpqsol"
              TITLE="KPQ Solutions, LLC"
              SUBTITLE="My Company"
              IMG={imgKPQsol}
              ALT="KPQ Solutions"
              MODAL={modalIdKPQsol}
            ></WebCard>
            <WebCard
              ID="inprogress"
              TITLE="In Progress"
              SUBTITLE="Action Item Organizer"
              IMG={imgInprogress}
              ALT="Action Tracker"
              MODAL={modalIdInprogress}
            ></WebCard>
            <WebCard
              ID="sandbox"
              TITLE="Sandbox"
              IMG={imgSandbox}
              ALT="Sandbox landing page"
              SUBTITLE="Practice Page As Reference"
              MODAL={modalIdSandbox}
            ></WebCard>
          </div>
        </div>
      </div>

      <WebModal
        MODAL={modalUbci}
        TITLE="U Broadcast-It"
        WEBSITE="https://www.ubci.info/"
        CODE="https://github.com/kquinn3/U-Broadcast-It"
        P1={pUbci[0]}
        P2={pUbci[1]}
        P3={pUbci[2]}
      ></WebModal>
      <WebModal
        MODAL={modalCoin}
        TITLE="Coin Inventory"
        WEBSITE="https://www.coininv.org/"
        CODE="https://github.com/kquinn3/CoinInv"
        P1={pCoin[0]}
        P2={pCoin[1]}
        P3={pCoin[2]}
      ></WebModal>
      <WebModal
        MODAL={modalBlanda}
        TITLE="Bell, Lewis & Assoc"
        WEBSITE="http://www.bell-lewis.com/index.html"
        CODE="NA"
        P1={pBlanda[0]}
        P2={pBlanda[1]}
        P3={pBlanda[2]}
      ></WebModal>
      <WebModal
        MODAL={modalKPQsol}
        TITLE="KPQ Solutions, LLC"
        WEBSITE="http://www.kpqsol.com"
        CODE="NA"
        P1={pKPQsol[0]}
        P2={pKPQsol[1]}
        P3={pKPQsol[2]}
      ></WebModal>
      <WebModal
        MODAL={modalInprogress}
        TITLE="In Progress"
        WEBSITE="NA"
        CODE="NA"
        P1={pInprogress[0]}
        P2={pInprogress[1]}
        P3={pInprogress[2]}
      ></WebModal>
      <WebModal
        MODAL={modalSandbox}
        TITLE="Sandbox"
        WEBSITE="https://whispering-inlet-83132.herokuapp.com/"
        CODE="https://github.com/kquinn3/sandbox"
        P1={pSandbox[0]}
        P2={pSandbox[1]}
        P3={pSandbox[2]}
      ></WebModal>
    </Fragment>
  );
};
export default WebApps;
