import React, { Fragment, useEffect, useState } from "react";
import Kevbot from "./Kevbot";
import imgKevbot0 from "../../assets/img/kevinquinn.jpg";
import imgKevbot1 from "../../assets/img/skills_cropped.jpg";
import imgKevbot2 from "../../assets/img/web_cropped.jpg";
import imgKevbot3 from "../../assets/img/hiltonhead_cropped.jpg";
import imgKevbot4 from "../../assets/img/babyme_cropped.jpg";

const Introduction = () => {
  const [kevbot0, setKevbot0] = useState("");
  const [kevbot1, setKevbot1] = useState("");
  const [kevbot2, setKevbot2] = useState("");
  const [kevbot3, setKevbot3] = useState("");
  const [kevbot4, setKevbot4] = useState("");
  const txtKevbot0 =
    "Hello, my name is Kevin Quinn. I'm a problem solver. Most of my solutions involve web applications. While I work, my bots will guide you through my site. Let's meet them.";
  console.log("legth", txtKevbot0.length);
  const txtKevbot1 =
    "I am Kevbot1. You can call me Ace. I will guide you through Kevin's software skills";
  const txtKevbot2 =
    "I am Kevbot2. You can call me Deuce. I will guide you through Kevin's web based projets";
  const txtKevbot3 =
    "I am Kevbot3. You can call me Trey. I will guide you through Kevin's other professional projects";
  const txtKevbot4 =
    "I am Kevbot4. You can call me Mini Kevin. I will guide you through Kevin's education and other useful information";

  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = async () => {
    await delay(2500);
    await printString(txtKevbot0, kevbot0, setKevbot0, 10);
    await delay(2500);
    await printString(txtKevbot1, kevbot1, setKevbot1, 20);
    await delay(2500);
    await printString(txtKevbot2, kevbot2, setKevbot2, 20);
    await delay(2500);
    await printString(txtKevbot3, kevbot3, setKevbot3, 20);
    await delay(2500);
    await printString(txtKevbot4, kevbot4, setKevbot4, 20);
  };

  const printString = async (str, sta, setSta, del) => {
    let index = 1;
    while (index <= str.length) {
      setSta(str.substr(0, index));
      await delay(del);
      index++;
    }
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));

  return (
    <Fragment>
      <Kevbot
        ID="kevbot-0"
        IMG={imgKevbot0}
        ALT="Kevin in yellow shirt"
        TXT={kevbot0}
      />
      <Kevbot
        ID="kevbot-1"
        IMG={imgKevbot1}
        ALT="Kevin in green shirt"
        TXT={kevbot1}
      />
      <Kevbot
        ID="kevbot-2"
        IMG={imgKevbot2}
        ALT="Kevin in white shirt"
        TXT={kevbot2}
      />
      <Kevbot
        ID="kevbot-3"
        IMG={imgKevbot3}
        ALT="Kevin at Hilton Head"
        TXT={kevbot3}
      />
      <Kevbot
        ID="kevbot-4"
        IMG={imgKevbot4}
        ALT="Kevin as a young child"
        TXT={kevbot4}
      />
    </Fragment>
  );
};

export default Introduction;
