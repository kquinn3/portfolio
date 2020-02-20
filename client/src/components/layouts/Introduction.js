import React, { Fragment, useEffect, useState } from "react";
import Kevbot from "./Kevbot";
import imgKevbot0 from "../../assets/img/kevinquinn.jpg";
import imgKevbot1 from "../../assets/img/skills_cropped.jpg";
import imgKevbot2 from "../../assets/img/web_cropped.jpg";
import imgKevbot3 from "../../assets/img/hiltonhead_cropped.jpg";
import imgKevbot4 from "../../assets/img/babyme_cropped.jpg";

const Introduction = () => {
  const [kevbot, setKevbot] = useState(["", "", "", "", ""]);
  const txtBot = [
    "Hello, my name is Kevin Quinn. I'm a problem solver. Most of my solutions involve web applications. While I work, my bots will guide you through my site. Let's meet them.",
    "I am Kevbot1. You can call me Ace. I will guide you through Kevin's software skills ",
    "I am Kevbot2. You can call me Deuce. I will guide you through some of Kevin's projects at KPQ Solutions ",
    "I am Kevbot3. You can call me Trey. I will guide you through Kevin's other professional projects ",
    "I am Kevbot4. You can call me Quad. I will guide you through Kevin's education and other information."
  ];

  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = async () => {
    for (const [i, v] of txtBot.entries()) await printString(i, v, 10);
  };

  const printString = async (botIndex, botString, del) => {
    if (botIndex >= 1) del *= 2;
    let index = 1;
    await delay(2500);
    while (index <= botString.length) {
      setKevbot([...kevbot, (kevbot[botIndex] = botString.substr(0, index))]);
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
        TXT={kevbot[0]}
      />
      <Kevbot
        ID="kevbot-1"
        IMG={imgKevbot1}
        ALT="Kevin in green shirt"
        TXT={kevbot[1]}
      />
      <Kevbot
        ID="kevbot-2"
        IMG={imgKevbot2}
        ALT="Kevin in white shirt"
        TXT={kevbot[2]}
      />
      <Kevbot
        ID="kevbot-3"
        IMG={imgKevbot3}
        ALT="Kevin at Hilton Head"
        TXT={kevbot[3]}
      />
      <Kevbot
        ID="kevbot-4"
        IMG={imgKevbot4}
        ALT="Kevin as a young child"
        TXT={kevbot[4]}
      />
    </Fragment>
  );
};

export default Introduction;
