import React from 'react';
import './App.css';
import Header from './components/Header';
import TopContainer from './components/topContainer/TopContainer'
import SkillContainer from './components/skillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import ExperienceCon from './components/Experience/ExperienceCon';
import Contact from './components/Contact/contant';


function App() {
  return (
    <div className="App">
          <Header />
          <TopContainer />
          <SkillContainer />
          <ProjectContainer />
          <ExperienceCon />
          <Contact /> 
  </div>
 
);}

export default App;
