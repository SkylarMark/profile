import React from 'react';

import './aboutme.style.scss';
import { Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'


export default function AboutMe(props) {
    return(
        <div id={props.id} className="aboutMe pb-0 p-5">
            <AboutBox description={props.description} cardData={props.cardData} ProjectsDone={props.ProjectsDone} />
        </div>
    );
}

function AboutBox(props) {

    const cardData = props.cardData;

    return (
        <div>
            <div className="p-sm-5">
                <h3>Welcome</h3>
                <h1  className="mt-4 pl-sm-3">About Me</h1>
                <hr/>
                <Row>
                <Col className="order-lg-1 order-12" sm="12" lg="6"> <ProjectsDone ProjectsDone={props.ProjectsDone} /> </Col>
                    <Col className="order-lg-12 order-1" sm="12" lg="6" >
                        <p className="mt-4 text-justify" >{props.description}</p>
                    </Col>
                </Row>
            </div>
            <Row>
                {cardData.map((props, index) => {
                    return <IconCard key={index+"_key"} center={props.center} CardIcon={props.CardIcon} CardTitle={props.CardTitle} CardDescription={props.CardDescription} />
                })}
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
                <div className={centered + " mr-3 mb-4 "} ><img alt="" src={props.CardIcon} width="100%" /></div>
                <h5 className="mb-3" > { props.CardTitle } </h5>
                <p> { props.CardDescription } </p>
            </div>
        </Col>
    );
}

function ProjectsDone(props) {
    return (
        <div className="ProjectsDone p-3 mt-5">
            <Row>
                <Col>
                    <h1> Projects Done : {props.ProjectsDone} </h1>
                </Col>
                <Col className="my-auto pr-5" xs="2">
                    <h1> <FontAwesomeIcon icon={faCaretRight} /> </h1>                
                </Col>
            </Row>
        </div>
    );
}

