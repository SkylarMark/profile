import aiChan from './footer/ai.png'

const HeaderData = {
    websiteName:"",
    name: "Samyak Joshi",
    description:"A Web Developer",
    img:"https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png"
}

const AboutData = {
    description:"Hey, there I am Samyak Joshi a Developer, born on 20 August 1999 as of currently working on self-development, learning, and working on projects with programming languages that always fascinated me. They are words but yet give you the power to bring life to machines.",
    ProjectsDone: 5,
    cardData: [
        {
            center:false,
            CardIcon:"https://img.icons8.com/search",
            CardTitle:"Web Development",
            CardDescription:"A small river named Duden flows by their place and supplies.",
    
        },
        {
            center:false,
            CardIcon:"https://img.icons8.com/search",
            CardTitle:"App Development",
            CardDescription:"A small river named Duden flows by their place and supplies.",
    
        },
        {
            center:false,
            CardIcon:"https://img.icons8.com/search",
            CardTitle:"Desktop App Development",
            CardDescription:"A small river named Duden flows by their place and supplies.",
    
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
            name: ["Code Igniter"],
            img: ["codeIgniter"]
        },
        {
            title: "Android",
            name: ["Flutter","Dart"],
            img: ["flutter", "dart"]
        },
        {
            title: "Other",
            name: ["Github","Photoshop","Davinci Resolve", "After Effects", "Blender (3D Animation Software)"],
            img: ["github", "photoshop", "davinci", "afterEffects", "blender"]
        }
    ], 
}

const FooterData = {
    socialLinks:[
        {
            alt:"Google",
            img: aiChan,
            href:"https://google.com",
        },
        {
            alt:"Google",
            img: aiChan,
            href:"https://youtube.com",
        },
    ]
}

export { HeaderData, AboutData, SkillsData, FooterData }