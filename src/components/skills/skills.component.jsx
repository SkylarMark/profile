import React from 'react';

import './skills.style.scss';

import { Row, Col } from 'react-bootstrap';

export default function Skill(props) {
    const SkillData = props.SkillData;
    return (
        <div id={props.id} className="" >
            <div className="p-lg-5">
                <h1  className="mt-4 pl-3">Skills</h1>
                <hr/>
                {SkillData.map((props, index) => {
                    return <SkillCard key={index+"_key"} index={index} title={props.title} name={props.name} img={props.img} />
                })}
            </div>
        </div>
    );
}

function SkillCard(props) {
    return (
        <div className="SkillCard bg-light p-5" >
            <h2 className="text-left">{props.title}</h2>
            <hr />
            <SkillCardElement name={props.name} img={props.img} />
        </div>
    );
}

function SkillCardElement(props) {
    const SkillName = props.name
    return (
        <Row className="justify-content-center" >
            {SkillName.map((dontUse, index) => {
                return <SkillCardIcon key={index+"_key"} name={props.name[index]} image={props.img[index]} />
            })}
        </Row>
    );
}

function SkillCardIcon(props) {
    return (
        <Col className="mt-5 text-center" md="4" xl='3' >
            <div> <embed src={'svg/'+props.image+".svg"} /> </div>
            <div className="mt-3" > <h5> {props.name} </h5> </div>
        </Col>
    );
}

export { SkillCardIcon, SkillCardElement, SkillCard }