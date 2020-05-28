import React from 'react';

import './footer.style.scss';

import { Row, Col } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

import aiChan from './ai.png';

export default function Footer(props) {
    return (
        <div id={props.id} >
            <FooterBar />
        </div>
    );
}

function FooterBar() {
    return (
        <div className="footerBar text-white text-center p-5">
            <div>
                <Row className="text-center justify-content-center" noGutters={true}>
                    <FooterIcon icon={<i class="fab fa-twitter"></i>} />
                </Row>
            </div>
            <h5 className="copyright mt-5" >Copyright ©2020 All rights reserved <FontAwesomeIcon className="ml-2 mr-2" icon={faMugHot} /> | This template is fully Re-Created</h5>
        </div>  
    );
}

function FooterIcon(props) {
    return (
        <>
        <Col xs="4" sm="1" >
            <div className="footerIcon">
                <img alt="" src={aiChan} />
            </div>
        </Col>
        <Col xs="4" sm="1" >
            <div className="footerIcon">
                <img alt="" src={aiChan} />
            </div>
        </Col>
        <Col xs="4" sm="1" >
        <div className="footerIcon">
            <img alt="" src={aiChan} />
        </div>
    </Col>
    <Col xs="4" sm="1" >
        <div className="footerIcon">
            <img alt="" src={aiChan} />
        </div>
    </Col>
    <Col xs="4" sm="1" >
    <div className="footerIcon">
        <img alt="" src={aiChan} />
    </div>
</Col>
<Col xs="4" sm="1" >
    <div className="footerIcon">
        <img alt="" src={aiChan} />
    </div>
</Col>
<Col xs="4" sm="1" >
<div className="footerIcon">
    <img alt="" src={aiChan} />
</div>
</Col>
<Col xs="4" sm="1" >
<div className="footerIcon">
    <img alt="" src={aiChan} />
</div>
</Col>
<Col xs="4" sm="1" >
<div className="footerIcon">
    <img alt="" src={aiChan} />
</div>
</Col>
<Col xs="4" sm="1" >
<div className="footerIcon">
    <img alt="" src={aiChan} />
</div>
</Col>
<Col xs="4" sm="1" >
<div className="footerIcon">
    <img alt="" src={aiChan} />
</div>
</Col>
<Col xs="4" sm="1" >
<div className="footerIcon">
    <img alt="" src={aiChan} />
</div>
</Col>
        </>
    );
}