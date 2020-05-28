import React from 'react';

import './aboutme.style.scss';
import { Row, Col } from 'react-bootstrap';


export default function AboutMe(props) {
    return(
        <div id={props.id} className="aboutMe pb-0 p-5">
            <AboutBox description={props.description} />
        </div>
    );
}

function AboutBox(props) {
    return (
        <div>
            <div className="p-5">
                <h3>Welcome</h3>
                <h1  className="mt-4 pl-3">About Me</h1>
                <hr/>
                <Row>
                    <Col sm="0" lg="6" />
                    <Col sm="12" lg="6" >
                        <p className="mt-4 text-justify" >{props.description}</p>
                    </Col>

                </Row>
            </div>
            <Row>
                <IconCard center={false} CardIcon="https://img.icons8.com/search" CardTitle="Web Development" CardDescription="A small river named Duden flows by their place and supplies. " />
                <IconCard center={false} CardIcon="https://img.icons8.com/search" CardTitle="Web Development" CardDescription="A small river named Duden flows by their place and supplies. " />
                <IconCard center={false} CardIcon="https://img.icons8.com/search" CardTitle="Web Development" CardDescription="A small river named Duden flows by their place and supplies. " />
                <ProjectsDone />
            </Row>
        </div>
    )
}

function IconCard(props) {

    var centered;

    if (props.center === true)
    {
        centered = 'text-center';
    }
    else
    {
        if (props.center === 'right')
        {
            centered = 'text-right';
        }
        else
        {
            centered = 'text-left';
        }
    }

    return (
        <Col  sm="12" md="4">
            <div className="card p-4 aboutMeCard" >
                <div className={centered + " mr-3 mb-4 "} ><img alt="" src={props.CardIcon} /></div>
                <h5 className="mb-3" > { props.CardTitle } </h5>
                <p> { props.CardDescription } </p>
            </div>
        </Col>
    );
}

function ProjectsDone() {
    return (
        <div className="ProjectsDone text-center p-3 mt-5">
            <h1> Projects </h1>
            <h5> 5 </h5>
        </div>
    );
}