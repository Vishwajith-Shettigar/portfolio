import React from "react";
import './Skills.css'
import { Icon } from '@iconify/react';

function Skills() {
  return (
    <div id="Skills">
      <h2>My Skills</h2>
      <div className="skills-sec-1">
        <div className="skills-sec-1-op1">
          <div className="skills-sec-1-op1-1">
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>HTML</p></span>
            <span> <Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>CSS</p></span>
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>javaScript</p></span>
          </div>
          <div className="skills-sec-1-op1-2">
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>Node.js</p></span>
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>MongoDB</p></span>
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>React.js</p></span>
          </div>
        </div>

        <div className="skills-sec-1-op2">
          <div className="skills-sec-1-op2-1">
          <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>Android </p></span>
            <span> <Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>Linux</p></span>
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>Python</p></span>
          </div>
          <div className="skills-sec-1-op2-2">
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>Express.js</p></span>
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>C++</p></span>
            <span><Icon icon="bxs:badge-check" color="#1f0cc9" width="20" /> <p>C</p></span>
          </div>
        </div>
      </div>

      {/* <div className="skills-sec-2">
        <div className="skills-sec-2-op1">
          <div className="skills-sec-1-op1-1">
            <p>HTML</p>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <div className="skills-sec-1-op1-2">
            <span>Node</span>
            <span>React</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="skills-sec-2-op2">


        <div className="skills-sec-2-op2-1">

<p>HTML</p>
<span>CSS</span>
<span>JavaScript</span>

</div>
<div className="skills-sec-2-op2-2">

<span>Node</span>
<span>React</span>
<span>MongoDB</span>

</div>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
