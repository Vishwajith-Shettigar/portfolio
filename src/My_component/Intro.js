import React from "react";
import "./Intro.css";
import myimage from "./myimage.jpeg";
import "./nametype";
import { useState } from "react";
import {useRef} from 'react';
import { useEffect } from "react";
import Typewriter from "typewriter-effect"

import setState from 'react'
function Intro() {

  const contact = () =>  window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
  });








    


  return (
    <div className="intro">
      <div className="isec-1">
        <div className="isec-1-op1">
          <span>
          <a href='https://github.com/Vishwajith-Shettigar' target='_blank'>
            <img
              src="https://img.icons8.com/material-outlined/24/000000/github.png"
              className="introicons"
            />
            </a>
          </span>
          <span>
          <a href='https://www.linkedin.com/in/vishwajith-shettigar-4488571b2/' target='_blank'>
            <img
              src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
              className="introicons"
            />{" "}
            </a>
          </span>
          <span>
            {" "}
            <a href='https://www.codechef.com/users/dark_vish' target='_blank'>
            <img
              src="https://img.icons8.com/ios/344/codechef.png"
              className="introicons"
            /></a>
          </span>
        </div>
        <div className="isec-1-op2">
          <img src={myimage} id="myimage" />
        </div>
        <div className="isec-1-op3">
          <span>
            <a href="https://drive.google.com/file/d/1h23ijqmf6IGFvS_uzg5KfpcphwcZR-l2/view?usp=sharing" target="_blank">
            <button id="lol">Resume</button>
            </a>
          </span>
          <span>
            <button onClick={contact}> Contact </button>
          </span>
        </div>
      </div>

      <div className="isec-2"></div>

      <div className="isec-2-op1">
        <h1 id="name" >
          <Typewriter onInit={(typewriter)=>{

            typewriter.typeString("Vishwajith Shettigar").start().pauseFor(5000).deleteAll().typeString("Vishwajith Shettigar").start()
          }} />
        </h1>
        <div id="about">
           <h4>

           <Typewriter onInit={(typewriter)=>{

typewriter.typeString(" Hey i am vishwajith shettigar,currently pursuing 2nd year BCA. I am passionate in developing web apps and also interested in competitive programming as well as open-source contribution.").start()}}

/>



       
        </h4>
        </div>
       
      </div>
    </div>
  );
}

export default Intro;
