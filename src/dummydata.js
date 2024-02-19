import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import { AiFillGitlab } from 'react-icons/ai'

const projects = [{
    "title": "Peace Destination Nepal",
    "description":" PDN seeks to help travelers explore various places along with molding long-lasting harmony and establishing illustrious memories on the journey",
    "link": "https://peacedestinationnepal.com/",
    "image":"/images/pdn.png"
    
},
    {
        "title": "Paradise Institute Website",
        "description": "Paradise Institue is a coaching/reading space for medical entrance preparation. Backend is developed for website with booking engine and online payment.",
        "link": "https://paradiseinstitute.com.np/",
        "image": "/images/paradise.jpg"

    },
    {
        "title": "Action Nepal",
        "description": "Action Nepal is a development organization established with a view to develop the socioeconomic status of Nepalese people especially residing in rural area",
        "link": "http://www.actionnepal.org/",
        "image": "/images/actionnp.jpg"

    },
    {
        "title": "Voyageons Nepal",
        "description": "Voyageons Nepal is website that provides tour guides, and packages with category and pricing filter and option of booking packages.",
        "link": "https://www.voyageonsnepal.com/",
        "image": "/images/voyageons.png"

    },
    {
        "title": "Odent",
        "description": "Odent is a dental clinic management currently in development. It is constructed with the concept of solving clinic apointment management and service distribution.",
        "link": "",
        "image": ""

    },
    {
        "title": "Hijje",
        "description": "Hijje has facilities of automatically converting any roman English text into unicode Nepali, similarly font conversion , spelling checking , dictionary search",
        "link": "https://hijje.com/#/",
        "image": "/images/sayak_logo.png"
    }

]
const socialData = [
    {

        "name": "linkedin",
        "url": "https://www.linkedin.com/in/roji-maharjan-8b3264246/",
        // "className": "fa fa-linkedin"
        "icon": <IoLogoLinkedin />
    },
    {
        "name": "github",
        "url": "https://github.com/rojimaharjan3",
        "icon": <IoLogoGithub />
        // "className": "fa fa-github"
    },
    {
        "name": "gitlab",
        "url": "https://gitlab.com/maharjanroji33",
        "icon": <AiFillGitlab />
        // "className": "fa fa-twitter"
    }

]

// export default projects;

 const skills = [
    { "icon": "/images/skills/reactjs.png" },
    { "icon": "/images/skills/nextjs.png" },
    { "icon": "/images/skills/tailwind.png" },
    { "icon": "/images/skills/git.jpeg" },
    { "icon": "/images/skills/redux.png" },
    { "icon": "/images/skills/html.png" },
    { "icon": "/images/skills/css.png" },
    { "icon": "/images/skills/material.png" },
    
]

export {
    projects,
    socialData,
    skills,
};