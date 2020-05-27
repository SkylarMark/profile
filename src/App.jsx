import React from 'react';

import Header, { NavigationBar, Hero } from './components/header.component'

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss'

export default function App() {
    return (
        <div>
            <Header websiteName="" name="Samyak Joshi" description="A Web Developer" img="https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png" />
        </div>
    );
}