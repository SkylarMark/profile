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

function FooterBar({socialLinks}) {
    return (
        <div className="footerBar text-white text-center p-5">
            <div>
                <Row className="text-center justify-content-center" noGutters={true}>
                {socialLinks.map(({...Data}, index) => {
                    return <FooterIcon key={index+"_key"} {...Data} />
                })}
                </Row>
            </div>
            <h5 className="copyright mt-5" >Copyright ©2020 All rights reserved <FontAwesomeIcon className="ml-2 mr-2" icon={faMugHot} /> | This template is fully Re-Created</h5>
        </div>  
    );
}

function FooterIcon({href, alt, img}) {
    return (
        <>
            <Col xs="4" sm="1" >
                <div className="footerIcon">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <img alt={alt} src={img} target="_blank" />
                    </a>
                </div>
            </Col>
        </>
    );
}