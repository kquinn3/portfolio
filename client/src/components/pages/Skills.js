import React, { Fragment, useState, useEffect } from "react";
import "../../assets/css/Skills.css";
import ImgSkills from "../../assets/img/skills_cropped.jpg";

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

  const skillsTxt0 = e => {
    e.preventDefault();
    console.log("SkillTxt0");
  };
  const skillsTxt1 = e => {
    e.preventDefault();
    console.log("SkillTxt1");
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));

  return (
    <Fragment>
      <div className="full-screen">
        <div id="skills-bot">
          <div className="skills-card card">
            <img
              className="card-img"
              src={ImgSkills}
              alt="Kevin in green shirt"
            />
            <div className="text-div">
              <ul className="nav nav-tabs nav-justified justify-content-around">
                <li>
                  <button id="btn1" onClick={skillsTxt0}>
                    Intro
                  </button>
                </li>
                <li>
                  <button id="btn2" onClick={skillsTxt1}>
                    Core
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;

// skills = core, frameworks, database, testing, scripting, other
// const feSkills = ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"];
// const beSkills = ["Node.js", "Express"];
// const dbSkills = ["MongoDB", "MsSQL"];
// const testSkills = ["Katalon Studio"];
// const addSkills = ["C++", "C#"];
// const scriptSkills = ["Perl", "Groovy"];
// const osSkills = ["Unix/Linux"];
