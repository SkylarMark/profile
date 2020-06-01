import React from 'react';

import Header from './components/header/header.component'

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss'

import AboutMe from './components/aboutme/aboutme.component';
import Footer from './components/footer/footer.component';
import Skill from './components/skills/skills.component';

import { HeaderData, AboutData, SkillsData, FooterData } from './components/data';

export default function App() {
    return (
        <div>
            <Header id="home" websiteName={HeaderData.websiteName} name={HeaderData.name} description={HeaderData.description} img={HeaderData.img} />
            <AboutMe id="about" image={AboutData.image} PropsProjectsDone={AboutData.ProjectsDone} description={AboutData.description} cardData={AboutData.cardData} />
            <Skill id="skill" SkillData={SkillsData.SkillCardData} />
            <Footer id="footer" socialLinks={FooterData.socialLinks} />
        </div>
    );
}