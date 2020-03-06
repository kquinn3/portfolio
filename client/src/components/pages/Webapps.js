import React, { Fragment } from "react";
import WebCard from "../layouts/WebCard";
import WebModal from "../layouts/WebModal";
import "../../assets/css/Webapps.css";
import imgUbci from "../../assets/img/ubci.PNG";
import imgCoin from "../../assets/img/coininv.PNG";
import imgBlanda from "../../assets/img/blanda.PNG";
import imgKPQsol from "../../assets/img/coininv.PNG";
import imgInprogress from "../../assets/img/coininv.PNG";
import imgSandbox from "../../assets/img/sandbox.PNG";

const Webapps = () => {
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
    "I've always loved collecting US coins. One day, while looking through my collection, I thought it would be a great idea to make a web application to track them. There are applications for this, but I could not find any that are stored on the cloud. ",
    "This was my first real web application. I could not find a good free Web API that had a list of all the US coins, so I scraped them from a site, using Node Osmosis. I developed all the front end using vanilla JavaScript and Bootstrap and the backend was written in Node.js and MongoDB. ",
    "I did not know API structure when developing this and I also did not make it 100% responsive. I may re-write this some day and complete it. "
  ];
  const pBlanda = [
    "I developed this website for a client. The client wanted a small site to get a web presence. I used a google map and noticed that this gets good search results.  ",
    "This was developed using HTML, CSS, JavaScript and Bootstrap. ",
    "This is up to the client. "
  ];
  const pKPQsol = [
    "I developed an LLC called KPQ Solutions. I love meeting with clients, determining their needs and developing fail proof solutions. ",
    "KPQ Solutiions provide full stack web development and deployment, web testing automation and scripting to automate tasks ",
    "I am exploring the idea of creating short videos on web development for non web developers. "
  ];
  const pInprogress = [
    "Currently, I am working on a Project Task Application which allows the user to create any type of task including software features and bugs. The projects can either be stored on a local client file or on a database. The motivation behind this is to be able to track and modify any action items to ensure schedules are met. ",
    "This is going to have alot of front end details and will be my first application to include 'drag and drop' features. ",
    "To be determined "
  ];
  const pSandbox = [
    "While learning web development, I noticed two major flaws. First of all, I was practicing and developing alot of code that was not getting saved. Secondly, I would look up several CSS commands over and over to see how they worked. To see how all the pieces of web development fit together, I created this site to demonstrate CSS features using Javascript. ",
    "This code is very ugly and not well organized. I consider it my notebook. This was also my first ever website that I deployed. ",
    "I have moved on from this site, but keep this as a reminder of how far I have come in web develpoment. I created this site in September 2019."
  ];

  const card1 = (
    <Fragment>
      <WebCard
        ID="ubci"
        TITLE="U Broadcast-It"
        SUBTITLE="Live Sports Tracker"
        IMG={imgUbci}
        ALT="U-Broadcast-It landing page"
        MODAL={modalIdUbci}
      ></WebCard>
    </Fragment>
  );
  const card2 = (
    <Fragment>
      <WebCard
        ID="coininv"
        TITLE="Coin Inventory"
        SUBTITLE="Hobby"
        IMG={imgCoin}
        ALT="Coin Inventory landing page"
        MODAL={modalIdCoin}
      ></WebCard>
    </Fragment>
  );
  const card3 = (
    <Fragment>
      <WebCard
        ID="blanda"
        TITLE="Bell, Lewis & Assoc"
        SUBTITLE="Website For A Business"
        IMG={imgBlanda}
        ALT="Bell, Lewis & Associates landing page"
        MODAL={modalIdBlanda}
      ></WebCard>
    </Fragment>
  );
  const card4 = (
    <Fragment>
      <WebCard
        ID="kpqsol"
        TITLE="KPQ Solutions, LLC"
        SUBTITLE="My Company"
        IMG={imgKPQsol}
        ALT="KPQ Solutions"
        MODAL={modalIdKPQsol}
      ></WebCard>
    </Fragment>
  );
  const card5 = (
    <Fragment>
      <WebCard
        ID="inprogress"
        TITLE="In Progress"
        SUBTITLE="Action Item Organizer"
        IMG={imgInprogress}
        ALT="Action Tracker"
        MODAL={modalIdInprogress}
      ></WebCard>
    </Fragment>
  );
  const card6 = (
    <Fragment>
      <WebCard
        ID="sandbox"
        TITLE="Sandbox"
        IMG={imgSandbox}
        ALT="Sandbox landing page"
        SUBTITLE="Practice Page As Reference"
        MODAL={modalIdSandbox}
      ></WebCard>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="webapps">
        <div className="container">
          <div className="h-10v"></div>
          <div className="text-center mb-5">
            <h1>Web Applications</h1>
          </div>
          <div className="d-none d-lg-flex row h-25v mb-5 text-center">
            {card1}
            {card2}
            {card3}
          </div>
          <div className="d-none d-lg-flex row h-25v">
            {card4}
            {card5}
            {card6}
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
export default Webapps;
