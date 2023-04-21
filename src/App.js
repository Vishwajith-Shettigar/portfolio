import logo from './logo.svg';
import './App.css';
import Skills from './My_component/Skills';
import Intro from './My_component/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../my-portfolio/src/My_component/Header';
import Projects from './My_component/Projects';
import Contact from './My_component/Contact';
import Footer from './My_component/Footer';

import {
  BrowserRouter as Router,
  
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
   
    <div className="App">

     <Header/>
     <Intro/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
