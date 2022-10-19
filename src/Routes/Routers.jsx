import React from 'react'
import { Routes, Route} from "react-router-dom";
import Careers from '../Pages/Careers';
import LandingPage from '../Pages/LandingPage';
import PricePlan from '../Pages/PricePlan'
import ProjectCB from '../Pages/ProjectCB';
import ProjectsPage from '../Pages/ProjectsPage';
function Routers() {
  return (
    <>
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/contactUs" element={<PricePlan/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/projects/cakes-and-bakes" element={<ProjectCB/>}/>
      </Routes>
    </>
  )
}

export default Routers
