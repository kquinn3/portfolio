import React, { Fragment, useState, useEffect } from "react";
import SkillsCard from "../layouts/SkillsCard";
import {
  printString,
  delay,
  displayNone,
  golfHole,
  golfRoll
} from "../utils/utilities";
import imgMe from "../../assets/img/kevinquinn.jpg";
import imgBall from "../../assets/img/golfball_cropped.jpg";
import imgCore from "../../assets/img/skills/html_css_js.png";

import "../../assets/css/Skills.css";

// runAnimation order
// 1. #card-0 has my image and then printString, the first sentence skillsText[0]
// 2. #golfHole (left,top) in vw
// 3. golfRoll first part
// 4. golfRoll second part with SkillsRoll
// 5. golfHole display none make function called displayNone(string) ==> string gets passed into query Selector
// 6. golfBall display none
// 7. Steps 2-6 get repeated for each set of skills

const Skills = () => {
  const [skills0, setSkills0] = useState("");
  const [skills1, setSkills1] = useState("");

  const skillsTxt = ["Let's discuss my skills ", "Core web development "];

  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = async () => {
    let startSkills0 = { x: 30, y: 40 };
    let stop1Skills0 = { x: 50, y: 20 };
    let stop2Skills0 = { x: 80, y: 20 };

    await printString(skillsTxt[0], setSkills0, 10);
    await skillsRun();

    await golfHole("#golf-hole", 78, 18, 40);
    await golfRoll("#golf-ball", startSkills0, stop1Skills0, 100, 10, "none");
    await golfRoll(
      "#golf-ball",
      stop1Skills0,
      stop2Skills0,
      100,
      10,
      "skills-role"
    );
    displayNone("#golf-hole");
    displayNone("#golf-ball");
    await printString(skillsTxt[1], setSkills1, 10);
    //await printString(introTxt[1], setIntro1, 10);
  };

  return (
    <Fragment>
      <div className="skills">
        <div id="skills-roll">
          <p>Software Skills</p>
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
          <div className="card-body">
            <p className="m-2 intro-text">{skills0}</p>
            <p className="m-2 intro-text">{skills1}</p>
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

// skills = core, frameworks, database, testing, scripting, other
// const feSkills = ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"];
// const beSkills = ["Node.js", "Express"];
// const dbSkills = ["MongoDB", "MsSQL"];
// const testSkills = ["Katalon Studio"];
// const addSkills = ["C++", "C#"];
// const scriptSkills = ["Perl", "Groovy"];
// const osSkills = ["Unix/Linux"];
