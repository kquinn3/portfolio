// printString params are (text to display,  setState to display, delay in ms for each character)
export const printString = async (printString, setPrintState, del) => {
  let index = 1;
  while (index <= printString.length) {
    setPrintState(printString.substr(0, index));
    await delay(del);
    index++;
  }
};

// Skills animation takes two objects (changes,constants)
// 1. #golfHole (left,top) in vw
// 2. golfRoll first part
// 3. golfRoll second part with SkillsRoll
// 4. golfHole display none make function called displayNone(string) ==> string gets passed into query Selector
// 5. golfBall display none
export const skillsAnimation = async (changes, constants) => {
  const { offset, rollItem, speed, rollHole } = constants;
  const { start, mid, stop, rollDisplay } = changes;
  display(rollItem, "block");
  display(rollHole, "block");
  await golfHole(rollHole, stop.x - offset, stop.y - offset);
  await golfRoll(rollItem, start, mid, speed.steps, speed.del, "none", offset);
  await golfRoll(
    rollItem,
    mid,
    stop,
    speed.steps,
    speed.del,
    rollDisplay,
    offset
  );
  display(rollItem, "none");
  display(rollHole, "none");
};

// golfHole params are (string of querySelect, left vw, top vh)
export const golfHole = (qs, x, y) => {
  const hole = document.querySelector(qs);
  hole.style.left = x.toString() + "vw";
  hole.style.top = y.toString() + "vh";
};
// golfRoll params are (string of querySelect, startposition, finish position, #steps, delay(ms), string of second qs);
export const golfRoll = async (qs, start, stop, step, del, qs2, off) => {
  const roll = document.querySelector(qs);
  let skillsRoll;
  if (qs2 !== "none") {
    skillsRoll = document.querySelector(qs2);
    skillsRoll.style.top = `${start.y - off}vh`;
    skillsRoll.style.left = `${start.x - off / 2}vw`;
  }

  let direction = {
    x: (stop.x - start.x) / step,
    y: (stop.y - start.y) / step
  };

  let pos = {};
  let rot;
  for (let i = 0; i < step; i++) {
    pos = await calcPos(start, direction, i, del);
    roll.style.left = pos.x.toString() + "vw";
    roll.style.top = pos.y.toString() + "vh";
    rot = (step * i) / 36;
    roll.style.transform = `rotate(${rot}deg)`;
    if (qs2 !== "none")
      skillsRoll.style.width = (pos.x - start.x - off / 2).toString() + "vw";
  }
};

export const calcPos = async (p, d, i, del) => {
  let x = Math.floor(p.x + i * d.x + 0.5);
  let y = Math.floor(p.y + i * d.y + 0.5);
  let newP = { x, y };

  await delay(del);
  return newP;
};

export const delay = ms => new Promise(res => setTimeout(res, ms));

export const display = (p, s) => {
  document.querySelector(p).style.display = s;
};

export const getSquares = (startX, stopX, startY, stopY, num, gap) => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const aspect = width / height;
  const squareWidth = (stopX - startX) / num;
  const squareHeight = (stopY - startY) / num;

  const pixelSquare =
    aspect >= 1
      ? (height * (squareHeight - gap)) / 100
      : (width * (squareWidth - gap)) / 100;

  const percentOffsetX = 0.5 * (squareWidth - (100 * pixelSquare) / width);
  const percentOffsetY = 0.5 * (squareHeight - (100 * pixelSquare) / height);
  console.log("width", width);
  console.log("height", height);
  console.log("squareWidth", squareWidth);
  console.log("squareHeight", squareHeight);
  console.log("pixelSquare", pixelSquare);
  console.log("percentOffsetX", percentOffsetX);
  console.log("percentOffsetY", percentOffsetY);

  let squareX = [];
  let squareY = [];

  //Calculate x and y points
  for (let i = 0; i < num; i++) {
    squareX[i] = percentOffsetX + startX + i * squareWidth;
    squareY[i] = percentOffsetY + startY + i * squareHeight;
  }
  return { squareX, squareY, pixelSquare };
};
