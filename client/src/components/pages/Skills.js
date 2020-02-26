import React, { Fragment, useState, useEffect } from "react";
import SkillsCard from "../layouts/SkillsCard";
import { printString, skillsAnimation } from "../utils/utilities";
import imgMe from "../../assets/img/kevinquinn.jpg";
import imgBall from "../../assets/img/golfball_cropped.jpg";
import imgCore from "../../assets/img/skills/html_css_js.png";
import "../../assets/css/Skills.css";

// runAnimation order
// 1. #card-0 has my image and then printString, the first sentence skillsText[0]
// 2. RunAnimation for each row of skills

const Skills = () => {
  const [skills0, setSkills0] = useState("");
  const [skills1, setSkills1] = useState("");
  const [skills2, setSkills2] = useState("");
  const [skills3, setSkills3] = useState("");
  const [skills4, setSkills4] = useState("");
  const [skills5, setSkills5] = useState("");
  const [skills6, setSkills6] = useState("");
  const skillsTxtNormal = [
    "Let's discuss my skills ",
    "Core web development ",
    "Frameworks",
    "Databases",
    "Other languages",
    "Operating Systems",
    "Testing framework"
  ];
  const skillsTxtXS = [
    "My skills ",
    "Core web ",
    "Frameworks",
    "Databases",
    "Other",
    "OS",
    "Testing"
  ];

  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = async () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    let skillsTxt = skillsTxtNormal;
    let ballStartX = 30;
    let ballStartY = 50;
    let ballMidX = 50;
    let ballMidY = width < 576 ? 20 : 15;
    let ballYOffset = width < 576 ? 12 : width < 1200 ? 12 : 12;
    let ballEndX = 90;
    let holeRadius = width < 576 ? 18 : width < 1024 ? 20 : 30;

    //These are fixed items
    let offset = 2;
    let rollItem = "#golf-ball";
    let rollHole = { id: "#golf-hole", radius: holeRadius };
    let speed = { del: 10, steps: 100 };
    let rollConstants = { offset, rollItem, speed, rollHole };

    let rollVariables = [];
    //These items change with each roll
    //Row 0 Software skills
    let start = { x: ballStartX, y: ballStartY };
    let mid = { x: ballMidX, y: ballMidY };
    let stop = { x: ballEndX, y: ballMidY };
    let rollDisplay = "#golf-txt0";
    let rollVariable = { start, mid, stop, rollDisplay };
    rollVariables.push(rollVariable);

    //Row 1 Foundation skills
    mid = { x: ballMidX, y: 1 * ballYOffset + ballMidY };
    stop = { x: ballEndX, y: 1 * ballYOffset + ballMidY };
    rollDisplay = "#golf-txt1";
    rollVariable = { start, mid, stop, rollDisplay };
    rollVariables.push(rollVariable);

    //Row 2
    mid = { x: ballMidX, y: 2 * ballYOffset + ballMidY };
    stop = { x: ballEndX, y: 2 * ballYOffset + ballMidY };
    rollDisplay = "#golf-txt2";
    rollVariable = { start, mid, stop, rollDisplay };
    rollVariables.push(rollVariable);

    //Row 3
    mid = { x: ballMidX, y: 3 * ballYOffset + ballMidY };
    stop = { x: ballEndX, y: 3 * ballYOffset + ballMidY };
    rollDisplay = "#golf-txt3";
    rollVariable = { start, mid, stop, rollDisplay };
    rollVariables.push(rollVariable);

    //Row 4
    mid = { x: ballMidX, y: 4 * ballYOffset + ballMidY };
    stop = { x: ballEndX, y: 4 * ballYOffset + ballMidY };
    rollDisplay = "#golf-txt4";
    rollVariable = { start, mid, stop, rollDisplay };
    rollVariables.push(rollVariable);

    //Row 5
    mid = { x: ballMidX, y: 5 * ballYOffset + ballMidY };
    stop = { x: ballEndX, y: 5 * ballYOffset + ballMidY };
    rollDisplay = "#golf-txt5";
    rollVariable = { start, mid, stop, rollDisplay };
    rollVariables.push(rollVariable);

    //Row 6
    mid = { x: ballMidX, y: 6 * ballYOffset + ballMidY };
    stop = { x: ballEndX, y: 6 * ballYOffset + ballMidY };
    rollDisplay = "#golf-txt6";
    rollVariable = { start, mid, stop, rollDisplay };
    rollVariables.push(rollVariable);

    //Bad code. Need to figure out how to pass object state
    // Got a RE_RENDER_LIMIT error, when I tried
    await printString(skillsTxt[0], setSkills0, 10);
    await skillsAnimation(rollVariables[0], rollConstants);
    await printString(skillsTxt[1], setSkills1, 10);
    await skillsAnimation(rollVariables[1], rollConstants);
    await printString(skillsTxt[2], setSkills2, 10);
    await skillsAnimation(rollVariables[2], rollConstants);
    await printString(skillsTxt[3], setSkills3, 10);
    await skillsAnimation(rollVariables[3], rollConstants);
    await printString(skillsTxt[4], setSkills4, 10);
    await skillsAnimation(rollVariables[4], rollConstants);
    await printString(skillsTxt[5], setSkills5, 10);
    await skillsAnimation(rollVariables[5], rollConstants);
    await printString(skillsTxt[6], setSkills6, 10);
    await skillsAnimation(rollVariables[6], rollConstants);
  };

  return (
    <Fragment>
      <div className="skills">
        <div id="golf-txt0" className="golf-txt">
          <p className="">Software Skills Include: </p>
        </div>
        <div id="golf-txt1" className="golf-txt">
          <p className="">HTML5, CSS3, JavaScript</p>
        </div>
        <div id="golf-txt2" className="golf-txt">
          <p className="">React, Node, Express</p>
        </div>
        <div id="golf-txt3" className="golf-txt">
          <p className="">MongoDB, MsSQL</p>
        </div>
        <div id="golf-txt4" className="golf-txt">
          <p className="">Perl, Groovy, C#, C++</p>
        </div>
        <div id="golf-txt5" className="golf-txt">
          <p className="">Linux/Unix</p>
        </div>
        <div id="golf-txt6" className="golf-txt">
          <p className="">Katalon Studio</p>
        </div>
        <div id="golf-ball">
          <img src={imgBall} alt="golf ball" />
        </div>
        <div id="golf-hole"></div>
        <div id="card-0" className="card bg-color fg-color">
          <img
            className="card-img img-fluid text-center"
            src={imgMe}
            alt="My LinkedIn picture"
          ></img>
          <div className="skills-text">
            <p className="mx-1 my-3">{skills0}</p>
            <p className="mx-1 my-3">{skills1}</p>
            <p className="mx-1 my-3">{skills2}</p>
            <p className="mx-1 my-3">{skills3}</p>
            <p className="mx-1 my-3">{skills4}</p>
            <p className="mx-1 my-3">{skills5}</p>
            <p className="mx-1 my-3">{skills6}</p>
          </div>
        </div>
        {/* <SkillsCard
          ID="card-1"
          IMG={imgCore}
          ALT="html,css,javascript logos"
        ></SkillsCard> */}
      </div>
    </Fragment>
  );
};

export default Skills;
