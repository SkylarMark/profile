import React from 'react';

import './skills.style.scss';

import { Row, Col } from 'react-bootstrap';

export default function Skill({id, SkillData}) {
    return (
        <div id={id}>
            <div className="p-lg-5">
                <h1  className="mt-4 pl-3">Skills</h1>
                <hr/>
                {SkillData.map(({title, name, img}, index) => {
                    return <SkillCard key={index+"_key"} index={index} title={title} name={name} img={img} />
                })}
            </div>
        </div>
    );
}

function SkillCard({title, name, img}) {
    return (
        <div className="SkillCard bg-light p-5" >
            <h2 className="text-left">{title}</h2>
            <hr />
            <SkillCardElement name={name} img={img} />
        </div>
    );
}

function SkillCardElement({name, img}) {
    return (
        <Row className="justify-content-center" >
            {name.map((dontUse, index) => {
                return <SkillCardIcon key={index+"_key"} name={name[index]} image={img[index]} />
            })}
        </Row>
    );
}

function SkillCardIcon({name, image}) {
    return (
        <Col className="mt-5 text-center" md="4" xl='3' >
            <div> {image} </div>
            <div className="mt-3" > <h5> {name} </h5> </div>
        </Col>
    );
}

export { SkillCardIcon, SkillCardElement, SkillCard }