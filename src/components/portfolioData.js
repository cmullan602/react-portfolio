import bloggingTech from "../images/bloggingTech.png";
import codeCampQuiz from "../images/codeCampQuiz.png";
import dogFactFinder from "../images/dogFactFinder.png";
import jate from "../images/jate.png";
import weatherPro from "../images/weatherPro.png";


const data = [
    {
        "id": 1,
        "title": "Blogging Tech",
        "description": "I created this app using SQL, node, express and deployed it on heroku. It's a website through which users can create an account and blog about tech.",
        "image": bloggingTech
    },
    {
        "id": 2,
        "title": "Code Camp Quiz",
        "description": "I created this application using javascript to test a users knowledge of Javascript.",
        "image": codeCampQuiz
    },
    {
        "id": 3,
        "title": "All Things Dog",
        "description": "I worked with a group to create this app through which you can search for facts on your favorite breed of dog!",
        "image": dogFactFinder
    },
    {
        "id": 4,
        "title": "J.A.T.E",
        "description": "I built this application to give the user the ability to save notes to local storage.",
        "image": jate
    },
    {
        "id": 5,
        "title": "Weather Pro",
        "description": "This app utilizes javascript and jquery to make api calls to the weather pro API. You can look up your local weather and 5 day forcast through the app.",
        "image": weatherPro
    },
]

export default data;