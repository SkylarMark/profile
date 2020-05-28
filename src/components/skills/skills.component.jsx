import React from 'react';

import './skills.style.scss';

import { Row, Col } from 'react-bootstrap';

import ReactImage from './reactx1200.png';


export default function SkillCard(props) {

    return (
        <div id={props.id} className="SkillCard bg-light text-center mt-5 p-5" >
            <h2 className="text-left">HTML</h2>
            <hr />
            <Row>
                <SkillCardIcon name="React" image={ReactImage} />
            </Row>
        </div>
    );
}

function SkillCardIcon(props) {
    return (
        <Col sm='2' >
            <div> <img alt="" src={props.image} width="100%" /> </div>
            <div> <h5> {props.name} </h5> </div>
        </Col>
    );
}

export { SkillCardIcon }