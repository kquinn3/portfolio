import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Project from "../layouts/Project";
import { getSquares, delay } from "../utils/utilities";
import IMG0 from "../../assets/img/blanda.PNG";
import IMG1 from "../../assets/img/sandbox.PNG";
import IMG2 from "../../assets/img/treasure_cropped.jpg";
import IMG3 from "../../assets/img/coininv.PNG";
import IMG4 from "../../assets/img/ubroadcastit.PNG";

import "../../assets/css/KPQsolutions.css";

const Kpq = () => {
  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = async () => {
    //startX, stopX,startY,stopY, #squares,gapX,gapY
    const { squareX, squareY, pixelSquare } = getSquares(2, 98, 15, 95, 3, 3);
    const posX = [squareX[0], squareX[2], squareX[1], squareX[2], squareX[0]];
    const stopY = [squareY[2], squareY[2], squareY[1], squareY[0], squareY[0]];

    const startY = 0;
    const steps = 100;
    const del = 2;
    const speed = { steps, del };

    let chainAnimation = [];
    let cardAnimation = [];
    let project = [];
    let chain = [];
    let card = [];
    let cardImg = [];

    for (let i = 0; i < posX.length; i++) {
      project[i] = document.querySelector(`#project-${i}`);
      chain[i] = document.querySelector(`#project-${i} .chain`);
      card[i] = document.querySelector(`#project-${i} .project-card`);
      cardImg[i] = document.querySelector(`#project-${i} .project-card .img`);
      cardAnimation[i] = {
        card: card[i],
        cardImg: cardImg[i],
        pixelSquare
      };
      project[i].style.height = `${stopY[i]}vh+${pixelSquare}px`;
      project[i].style.height = `${stopY[i]}vh`;
      project[i].style.left = `${posX[i]}vw`;
      project[i].style.width = `${pixelSquare}px`;
      chainAnimation[i] = {
        chain: chain[i],
        posX: posX[i],
        startY,
        stopY: stopY[i]
      };
      await moveChainCard(chainAnimation[i], cardAnimation[i], speed);
    }
  };

  const moveChainCard = async (chainAnimation, cardAnimation, speed) => {
    await dropChain(chainAnimation, speed);
    await raiseChain(chainAnimation, cardAnimation, speed);
  };

  const dropChain = async (chainAnimation, speed) => {
    const { chain, posX, startY, stopY } = chainAnimation;
    chain.style.left = `${posX}%`;
    let inc = (stopY - startY) / speed.steps;

    for (let i = 0; i < speed.steps; i++) {
      chain.style.height = `${startY + i * inc}%`;
      await delay(speed.del);
    }
  };

  const raiseChain = async (chainAnimation, cardAnimation, speed) => {
    const { chain, startY, stopY } = chainAnimation;
    const { card, cardImg, pixelSquare } = cardAnimation;
    let inc = (stopY - startY) / speed.steps;
    console.log("stopY", stopY);
    console.log("startY", startY);
    console.log("speedsteps", speed.steps);
    console.log("inc", inc);

    for (let i = 0; i < speed.steps; i++) {
      chain.style.height = `${stopY - i * inc}vh`;
      if (i <= 25) {
        card.style.top = `${stopY}vh`;
        //card.style.top = `${stopY - i * inc}vh`;
        card.style.height = `${(i * pixelSquare) / 25}px`;
        card.style.opacity = `${i / 25}`;
        cardImg.style.opacity = `${i / 25}`;
      }
      await delay(speed.del);
    }
  };

  return (
    <Fragment>
      <div className="kpq-solutions">
        <Project projectId="project-0" IMG={IMG0}></Project>
        <Project projectId="project-1" IMG={IMG1}></Project>
        <Project projectId="project-2" IMG={IMG2}></Project>
        <Project projectId="project-3" IMG={IMG3}></Project>
        <Project projectId="project-4" IMG={IMG4}></Project>
        {/* <div className="project">
          
          <div className="chain">
            <img src={imgChain} alt="chain" />
            <img src={imgChain} alt="chain" />
            <img src={imgChain} alt="chain" />
            <img src={imgChain} alt="chain" />
            <img src={imgChain} alt="chain" />
            <img src={imgChain} alt="chain" />
          </div>
      
          <div className="card">
            <img className="img1" src={imgTreasure} alt="treasure chest" />
            <div className="img2"></div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Kpq;
