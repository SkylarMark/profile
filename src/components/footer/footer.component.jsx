import React from 'react';

import './footer.style.scss';

import { Row, Col } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

export default function Footer(props) {
    return (
        <div id={props.id} >
            <FooterBar socialLinks={props.socialLinks} />
        </div>
    );
}

function FooterBar(props) {
    const socialLinks = props.socialLinks;
    return (
        <div className="footerBar text-white text-center p-5">
            <div>
                <Row className="text-center justify-content-center" noGutters={true}>
                {socialLinks.map((props, index) => {
                    return <FooterIcon key={index+"_key"} alt={props.alt} img={props.img} href={props.href} />
                })}
                </Row>
            </div>
            <h5 className="copyright mt-5" >Copyright ©2020 All rights reserved <FontAwesomeIcon className="ml-2 mr-2" icon={faMugHot} /> | This template is fully Re-Created</h5>
        </div>  
    );
}

function FooterIcon(props) {
    return (
        <>
        <a href={props.href} >
            <Col xs="4" sm="1" >
                <div className="footerIcon">
                    <img alt={props.alt} src={props.img} />
                </div>
            </Col>
        </a>
        </>
    );
}