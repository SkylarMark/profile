import React from 'react';

import Header from './components/header/header.component'

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss'

import AboutMe from './components/aboutme/aboutme.component';
import SkillCard from './components/skills/skills.component';
import Footer from './components/footer/footer.component';

export default function App() {
    return (
        <div>
            <Header id="home" websiteName="" name="Samyak Joshi" description="A Web Developer" img="https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png" />
            <AboutMe id="about" description="Samyak Joshi a Developer born on 20 August 1999, as of currently working on self-development, learning, and working on projects with programming languages this fascinating world holds. Fast Learner and Fast Implementer is a title I got from my college for my work." />
            <SkillCard id="skill" />

            <Footer id="footer" />
        </div>
    );
}