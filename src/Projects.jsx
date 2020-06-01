import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss'

import ProjectExpansionPanel from './project.components/dropDown/expansionpanel.component';

export default function ProjectsApp() {
    return (
        <div className="MainProjectArea">
            <ProjectExpansionPanel />
        </div>
    );
}