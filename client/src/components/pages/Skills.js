import React, { Fragment, useState, useEffect } from "react";
import KevbotCustom from "../layouts/KevbotCustom";
import "../../assets/css/KevbotCustom.css";
import imgKevbot from "../../assets/img/skills_cropped.jpg";

const Skills = () => {
  const [kevbot, setKevbot] = useState(["", ""]);
  const txtBot = [
    "I am Ace. I love to write software. Primarily, I've been developing code to test semiconductor chips and also developing scripts to automate the code development and evaluate the results of the tests. This has mostly been in a Unix/Linux environment.",
    "I've always been intrigued with the internet so I started to learn how it works. Once I learned JavaScript, and pulled data from the internet, I was hooked. This is incredible. I now have the power to pull any data I want, either through APIs or by scraping the web."
  ];

  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = async () => {
    for (const [i, v] of txtBot.entries()) await printString(i, v, 10);
  };

  const printString = async (pIndex, botString, del) => {
    let index = 1;
    //await delay(2500);
    while (index <= botString.length) {
      setKevbot([...kevbot, (kevbot[pIndex] = botString.substr(0, index))]);
      await delay(del);
      index++;
    }
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const feSkills = ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"];
  const beSkills = ["Node.js", "Express"];
  const dbSkills = ["MongoDB", "MsSQL"];
  const testSkills = ["Katalon Studio"];
  const addSkills = ["C++", "C#"];
  const scriptSkills = ["Perl", "Groovy"];
  const osSkills = ["Unix/Linux"];

  return (
    <Fragment>
      <div className="full-screen">
        <KevbotCustom
          ID="kevbot-skills"
          IMG={imgKevbot}
          ALT="Kevin in green shirt"
          TXT0={kevbot[0]}
          TXT1={kevbot[1]}
        />
      </div>
    </Fragment>
  );
};

export default Skills;
