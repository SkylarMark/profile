import aiChan from './footer/ai.png';

const HeaderData = {
    websiteName:"",
    name: "Samyak Joshi",
    description:"A Web Developer",
    img:"https://www.pngitem.com/pimgs/m/28-288789_transparent-png-person-standing-standing-png-download.png"
}

const AboutData = {
    description:"Samyak Joshi a Developer born on 20 August 1999, as of currently working on self-development, learning, and working on projects with programming languages this fascinating world holds. Fast Learner and Fast Implementer is a title I got from my college for my work.",
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
            name: ["Html","React"],
            img: [aiChan, aiChan, aiChan, aiChan]
        },
        {
            title: "CSS",
            name: ["Bootstrap","Material UI"],
            img: [aiChan, aiChan, aiChan, aiChan, aiChan, aiChan]
        },
        {
            title: "Java Script",
            name: ["Node Js","Electron", "React JS", "Angular JS", "Express JS"],
            img: [aiChan, aiChan, aiChan, aiChan, aiChan, aiChan]
        },
        {
            title: "Android",
            name: ["Flutter","Dart"],
            img: [aiChan, aiChan]
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
    ]
}

export { HeaderData, AboutData, SkillsData, FooterData }