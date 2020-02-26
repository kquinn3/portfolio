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
    "I am Kevbot1. I will guide you through Kevin's software skills ",
    "I am Kevbot2. I will guide you through some of Kevin's projects at KPQ Solutions ",
    "I am Kevbot3. I will guide you through Kevin's other professional projects ",
    "I am Kevbot4. I will guide you through Kevin's education and other information."
  ];

  useEffect(() => {
    runAnimation();
  }, []);

  //Length of strings = 170, 63,81,75,79
  const runAnimation = async () => {
    for (const [i, v] of txtBot.entries()) await printString(i, v, 900);
  };

  const printString = async (botIndex, botString, del) => {
    console.log("botIndex", botIndex);
    console.log("stringlength", botString.length);
    const delChar = Math.floor(del / (2 * botString.length));
    console.log("delChar", delChar);
    let index = 1;
    //await delay(0.5 * del);
    while (index <= botString.length) {
      setKevbot([...kevbot, (kevbot[botIndex] = botString.substr(0, index))]);
      // await delay(delChar);
      await delay(1);
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
        LINK={"/"}
      />
      <Kevbot
        ID="kevbot-1"
        IMG={imgKevbot1}
        ALT="Kevin in green shirt"
        TXT={kevbot[1]}
        LINK={"/skills"}
      />
      <Kevbot
        ID="kevbot-2"
        IMG={imgKevbot2}
        ALT="Kevin in white shirt"
        TXT={kevbot[2]}
        LINK={"/kpq"}
      />
      <Kevbot
        ID="kevbot-3"
        IMG={imgKevbot3}
        ALT="Kevin at Hilton Head"
        TXT={kevbot[3]}
        LINK={"/projects"}
      />
      <Kevbot
        ID="kevbot-4"
        IMG={imgKevbot4}
        ALT="Kevin as a young child"
        TXT={kevbot[4]}
        LINK={"/information"}
      />
    </Fragment>
  );
};

export default Introduction;
