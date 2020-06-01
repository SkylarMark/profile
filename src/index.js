import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ProjectsApp from './Projects';

import { BrowserRouter } from 'react-router-dom';

import { spring, AnimatedSwitch, AnimatedRoute } from 'react-router-transition';

import './style.scss'

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

ReactDOM.render(
    <BrowserRouter>
      <AnimatedSwitch atEnter={bounceTransition.atEnter} 
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles} >
        <AnimatedRoute exact path="/" component={App} />
        <AnimatedRoute path="/projects" component={ProjectsApp} />
        </AnimatedSwitch>
    </BrowserRouter>,
  document.getElementById('root')
);