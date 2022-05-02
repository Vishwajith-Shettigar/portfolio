import React from 'react'
import './Footer.css'
function Footer() {
    
  const about = () =>  window.scroll({
    top: 100,
    left: 0,
    behavior: 'smooth'
  });

  const skills = () =>  window.scroll({
    top: 600,
    left: 0,
    behavior: 'smooth'
  });


  const projects = () =>  window.scroll({
    top: 1300,
    left: 0,
    behavior: 'smooth'
  });

  return (
    <div className='footer'>

        <h3>Vishwajith Shettigar</h3>
        <div className='footerop1'>
<span  onClick={about} >About</span>
<span  onClick={skills} >Skills</span>
<span onClick={projects} > Projects</span>

        </div>

        <div className='footerop2'>
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
          <a href='https://www.codechef.com/users/dark_vish' target='_blank'>
            <img
              src="https://img.icons8.com/ios/344/codechef.png"
              className="introicons"
            /></a>
          </span>


        <span>     <a href='https://auth.geeksforgeeks.org/user/darkvish' target='_blank'> <img src=' https://img.icons8.com/color/48/000000/GeeksforGeeks.png' id="gfgimg"/> </a>

        </span>
        </div>
        <p id="fc"> © Vishwajith Shettigar. All rights reserved.</p>
    </div>
  )
}

export default Footer