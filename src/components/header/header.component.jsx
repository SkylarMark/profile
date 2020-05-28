import React, { useState } from 'react';

import { useMediaQuery } from 'react-responsive'

import { Navbar, Nav, Row, Col } from 'react-bootstrap';

import './header.style.scss'

export default function Header(props) {
    return (
        <div id={props.id} className="mb-5" >
            <NavigationBar websiteName={props.websiteName} />
            <Hero name={props.name} description={props.description} img={props.img} />
        </div>
    );
}

function NavigationBar(props) {

    // Hook for Color
    const [ navColor, setNavColor ] = useState('transparent')

    // Hook for Color With Query
    var navColorMedia = useMediaQuery({
        query: '(min-device-width: 991px)'
    })

    // On Scroll Funtion
    window.onscroll = function() {
        if(window.pageYOffset > 10) {
            setNavColor('light')
        }
        else
        {
            setNavColor('transparent')
        }
    }

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg={navColorMedia ? navColor : 'light' } variant="light">
            <Navbar.Brand href="#home"> {props.websiteName} </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                <Nav.Link href="#home"> Home </Nav.Link>
                <Nav.Link href="#about"> About </Nav.Link>
                <Nav.Link href="#deets"> Skills </Nav.Link>
                <Nav.Link href="#deets"> Projects </Nav.Link>
                <Nav.Link href="#deets"> My Blog </Nav.Link>
                <Nav.Link href="#deets"> Contact </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

function Hero(props) {
    return (
        <div id="home-section">
            <section className="hero text-center">
                <Row>
                    <Col id="col-1" xs="8" sm="7">
                        
                    </Col>
                    <Col id="col-2" xs="4" sm="5">
                        
                    </Col>
                </Row>
                <HeroProfile name={props.name} description={props.description} img={props.img} />
            </section>
        </div>
    );
}

function HeroProfile(props) {
    return (
        <main className="imgSection">
            <div className="imgContent" > I am <span>{props.name}</span> <p> {props.description} </p> </div>
            <img alt="" src={props.img} />
        </main>
    )
}

export { NavigationBar, Hero }