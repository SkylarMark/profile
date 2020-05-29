import aiChan from './footer/ai.png'
import webDev from '../assets/webdev.png'
import mobDev from '../assets/mobdev.png'
import desktopDev from '../assets/desktopdev.png'

import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

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
            img: [ "html", "react"]
        },
        {
            title: "CSS",
            name: ["CSS3","Bootstrap","SASS"],
            img: [ "css", "bootstrap", "sass"]
        },
        {
            title: "Javascript",
            name: ["Node Js","Electron", "React JS", "Angular JS", "Express JS","Javascript","Jquery"],
            img: [ "nodeJs", "electron", "react", "angular", "express", "javascript", "jquery"]
        },
        {
            title: "Back-End",
            name: ["MySQL","mongoDB","PHP"],
            img: ["mysql", "mongodb", "php"]
        },
        {
            title: "CMS",
            name: ["Joomla","Wordpress"],
            img: [ "joomla", "wordpress"]
        },
        {
            title: "Frameworks",
            name: ["Code Igniter","DJango"],
            img: ["codeIgniter","django"]
        },
        {
            title: "Android - IOS",
            name: ["Flutter","Dart"],
            img: ["flutter", "dart"]
        },
        {
            title: "Programming Languages",
            name: ["C","C++","Python"],
            img: ["c", "cpp", "python"]
        },
        {
            title: "IOT",
            name: ["Arduino","Raspberry Pi"],
            img: ["arduino", "raspberrypi"]
        },
        {
            title: "Other",
            name: ["Github","Photoshop","Davinci Resolve", "Adobe After Effects", "Adobe XD", "Adobe Illustrator", "Blender (3D Animation Software)"],
            img: ["github", "photoshop", "davinci", "afterEffects", "adobexd", "illustrator" ,"blender"]
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
            alt:"Twitter",
            img: twitter,
            href:"https://twitter.com/Skylar_Mark1",
        },
    ]
}

export { HeaderData, AboutData, SkillsData, FooterData }