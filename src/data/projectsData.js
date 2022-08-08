import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Parks n Trek',
        projectDesc: ' Full stack web application that allows users to create a profile, login in and search national parks based on states from which they can save their favorites and view them on a map',
        tags: ['React.js, GraphQL, Node.js, Express.js, Heroku, JWT, MongoDB, REST APIs, Trello'],
        code: 'https://github.com/eweagraff/nationalParks',
        demo: 'https://boiling-ridge-37586.herokuapp.com/',
        image: one
    },
    {
        id: 2,
        projectName: 'TripScav',
        projectDesc: 'Full stack travel application that gives the user the ability to sign up/ login and query travel destinations and popular tourist spots.',
        tags: ['Handlebars, Bcrypt, Express-sessions, Sequelize, Dotenv, SQL, Nodemon, Axios, Trello'],
        code: 'https://github.com/eweagraff/TripScav',
        demo: 'https://etripscav.herokuapp.com/',
        image: two
    },
    {
        id: 3,
        projectName: 'Find Eat Enjoy Love',
        projectDesc: 'A  food-based web application that provides the users the ability to search for recipes and view YouTube cooking demonstrations of the recipes.',
        tags: ['Semantic UI, HTML/CSS, Javascript,  jQuery, GitHub, 3rd Party API’s, Trello'],
        code: 'https://github.com/eweagraff/FEEL',
        demo: 'https://vasylynash.github.io/FEEL/',
        image: three
    },

    {
        id: 4,
        projectName: 'Weather Application',
        projectDesc: 'Open-source weather application that can check current temperature in selected city',
        tags: [ 'HTML/CSS, Javascript,GitHub, 3rd Party API’s, Trello'],
        code: 'https://github.com/eweagraff/vanilla-weather-app',
        demo: 'https://eweagraff.github.io/vanilla-weather-app/',
        image: four
    }

  
]




// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/