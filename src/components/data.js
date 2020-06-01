import React from 'react';

import webDev from '../assets/webdev-style1.png'
import mobDev from '../assets/mobdev-style2.png'
import desktopDev from '../assets/desktopdev-style1.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import gmail from '../assets/gmail.png'
import github from '../assets/githubsocial.png'

// SVG
    import { ReactComponent as Html5Icon }          from '../assets/svg/html.svg';
    import { ReactComponent as ReactIcon }          from '../assets/svg/react.svg';
    import { ReactComponent as CssIcon }            from '../assets/svg/css.svg';
    import { ReactComponent as BootstrapIcon }      from '../assets/svg/bootstrap.svg';
    import { ReactComponent as SASSIcon }           from '../assets/svg/sass.svg';
    import { ReactComponent as NodeJSIcon }         from '../assets/svg/nodeJs.svg';
    import { ReactComponent as ElectronIcon }       from '../assets/svg/electron.svg';
    import { ReactComponent as AngularIcon }        from '../assets/svg/angular.svg';
    import { ReactComponent as ExpressIcon }        from '../assets/svg/express.svg';
    import { ReactComponent as JavascriptIcon }     from '../assets/svg/javascript.svg';
    import { ReactComponent as JqueryIcon }         from '../assets/svg/jquery.svg';
    import { ReactComponent as MysqlIcon }          from '../assets/svg/mysql.svg';
    import { ReactComponent as MongodbIcon }        from '../assets/svg/mongodb.svg';
    import { ReactComponent as JoomlaIcon }         from '../assets/svg/joomla.svg';
    import { ReactComponent as WordpressIcon }      from '../assets/svg/wordpress.svg';
    import { ReactComponent as CodeIgniterIcon }    from '../assets/svg/codeIgniter.svg';
    import { ReactComponent as DjangoIcon }         from '../assets/svg/django.svg';
    import { ReactComponent as FlutterIcon }        from '../assets/svg/flutter.svg';
    import { ReactComponent as CIcon }              from '../assets/svg/c.svg';
    import { ReactComponent as CppIcon }            from '../assets/svg/cpp.svg';
    import { ReactComponent as PythonIcon }         from '../assets/svg/python.svg';
    import { ReactComponent as DartIcon }           from '../assets/svg/dart.svg';
    import { ReactComponent as PhpIcon }            from '../assets/svg/php.svg';
    import { ReactComponent as ArduinoIcon }        from '../assets/svg/arduino.svg';
    import { ReactComponent as RaspberrypiIcon }    from '../assets/svg/raspberrypi.svg';
    import { ReactComponent as GithubIcon }         from '../assets/svg/github.svg';
    import { ReactComponent as PhotoshopIcon }      from '../assets/svg/photoshop.svg';
    import { ReactComponent as DavinciIcon }        from '../assets/svg/davinci.svg';
    import { ReactComponent as AdobexdIcon }        from '../assets/svg/adobexd.svg';
    import { ReactComponent as IllustratorIcon }    from '../assets/svg/illustrator.svg';
    import { ReactComponent as AfterEffectsIcon }   from '../assets/svg/afterEffects.svg';
    import { ReactComponent as BlenderIcon }        from '../assets/svg/blender.svg';


const testImg = 'https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png';

const HeaderData = {
    websiteName:"",
    name: "Samyak Joshi",
    description:"A Developer",
    img: testImg
}

const AboutData = {
    description:"Hey, there I am Samyak Joshi a Developer, born on 20 August 1999 as of currently working on self-development, learning, and working on projects with programming languages that always fascinated me. They are words but yet give you the power to bring life to machines.",
    ProjectsDone: 5,
    image: testImg,
    cardData: [
        {
            center: true,
            CardIcon: webDev,
            CardTitle:"Web Development",
            CardDescription:"There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.",
    
        },
        {
            center: true,
            CardIcon: mobDev,
            CardTitle:"App Development",
            CardDescription:"Mobile is becoming not only the new digital hub, but also the bridge to the physical world.",
    
        },
        {
            center: true,
            CardIcon: desktopDev,
            CardTitle:"Desktop App Development",
            CardDescription:"The only software that's worth making is software that does something new.",
    
        },
    ]
}

const SkillsData = {
    SkillCardData: [
        {
            title: "Html",
            name: ["Html 5","JSX"],
            img: [ <Html5Icon /> , <ReactIcon />]
        },
        {
            title: "CSS",
            name: ["CSS3","Bootstrap","SASS"],
            img: [ <CssIcon />, <BootstrapIcon />, <SASSIcon />]
        },
        {
            title: "Javascript",
            name: ["Node Js","Electron", "React JS", "Angular JS", "Express JS","Javascript","Jquery"],
            img: [ <NodeJSIcon /> , <ElectronIcon />, <ReactIcon />, <AngularIcon />, <ExpressIcon />, <JavascriptIcon />, <JqueryIcon />]
        },
        {
            title: "Back-End",
            name: ["MySQL","mongoDB"],
            img: [<MysqlIcon />, <MongodbIcon />]
        },
        {
            title: "CMS",
            name: ["Joomla","Wordpress"],
            img: [ <JoomlaIcon />, <WordpressIcon />]
        },
        {
            title: "Frameworks",
            name: ["Code Igniter","DJango"],
            img: [ <CodeIgniterIcon />, <DjangoIcon />]
        },
        {
            title: "Android - IOS",
            name: ["Flutter"],
            img: [ <FlutterIcon /> ]
        },
        {
            title: "Programming Languages",
            name: ["C","C++","PHP","Python","Dart"],
            img: [ <CIcon />, <CppIcon />, <PhpIcon />, <PythonIcon />, <DartIcon />]
        },
        {
            title: "IOT",
            name: ["Arduino","Raspberry Pi"],
            img: [ <ArduinoIcon />, <RaspberrypiIcon />]
        },
        {
            title: "Other",
            name: ["Github","Photoshop","Davinci Resolve", "Adobe After Effects", "Adobe XD", "Adobe Illustrator", "Blender (3D Animation Software)"],
            img: [ <GithubIcon />, <PhotoshopIcon />, <DavinciIcon />, <AfterEffectsIcon />, <AdobexdIcon />, <IllustratorIcon /> ,<BlenderIcon />]
        }
    ], 
}

const FooterData = {
    socialLinks:[
        {
            alt:"Facebook",
            img: facebook,
            href:"https://facebook.com/sam.joshi.927",
        },
        {
            alt:"Mail",
            img: gmail,
            href: "mailto:joshi.samyak20@gmail.com"
        },
        {
            alt:"Twitter",
            img: twitter,
            href:"https://twitter.com/Skylar_Mark1",
        },
        {
            alt:"Github",
            img: github,
            href: "https://github.com/SkylarMark"
        }
    ]
}

export { HeaderData, AboutData, SkillsData, FooterData }