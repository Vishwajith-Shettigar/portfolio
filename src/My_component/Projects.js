import React from 'react'
import './Project.css'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web from './Web';
import Python from './Python';
import Android from './Android';
function Projects() {
  return (
  <Router>
    <div className='projects'>

<h2>Projects</h2>

<div className='Poejectcat'>

<Link to="/Web" id="webcat" className="catop">
         <h4 className='procatlol' >Web</h4>
        </Link>

        <Link to="/Python"  id="pythoncat" className="catop">
         <h4 className='procatlol'>Python</h4>
        </Link>
        <Link to="/Android"  id="androidcat" className="catop">
         <h4 className='procatlol'>Android</h4>
        </Link>

</div>

<Routes>
          <Route
            path="/web"
            element={
              <>
                <Web/>
              </>
            }
          ></Route>

<Route
            path="/python"
            element={
              <>
                <Python/>
              </>
            }
          ></Route>

    
<Route
            path="/android"
            element={
              <>
                <Android/>
              </>
            }
          ></Route>


   </Routes>

    </div>




     </Router>
  )
}

export default Projects