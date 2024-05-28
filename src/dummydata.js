import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import { AiFillGitlab } from 'react-icons/ai'

const projects = [{
    "title": "Peace Destination Nepal",
    "description": " PDN seeks to help travelers explore various places along with molding long-lasting harmony and establishing illustrious memories on the journey",
    "link": "https://peacedestinationnepal.com/",
    "image": "/images/pdn.png"

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
    "title": "Hijje",
    "description": "Hijje has facilities of automatically converting any roman English text into unicode Nepali, similarly font conversion , spelling checking , dictionary search",
    "link": "https://hijje.com/#/",
    "image": "/images/sayak_logo.png"
},
{
    "title": "Election Commission Nepal: Document Management System",
    "description": "ECN-DMS is a comprehensive digital solution designed to streamline the management of all documents and records related to electoral processes and administration. ",
    "link": "/",
    "image": "/images/Election_Commission,_Nepal.svg.png"
},
{
    "title": "E-service Municipal Delivery System",
    "description": "An e-service municipal delivery system revolutionizes how residents interact with local government agencies by providing convenient online platforms for submitting sifaris, filing grievances, and can incorporate SMS notifications to keep users informed about the status of their requests directly on their mobile phones",
    "link": "https://eservice.dhulikhelmun.gov.np/",
    "image": "/images/Emblem_of_Nepal.svg.png"
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