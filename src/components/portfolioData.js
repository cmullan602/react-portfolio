import bloggingTech from "../images/bloggingTech.png";
import codeCampQuiz from "../images/codeCampQuiz.png";
import dogFactFinder from "../images/dogFactFinder.png";
import jate from "../images/jate.png";
import weatherPro from "../images/weatherPro.png";
import PicShare from "../images/PicShare.png";


const data = [
    {
        "id": 1,
        "title": "Blogging Tech",
        "description": "I created this app using SQL, node, express and deployed it on heroku. Users can create an account login and blog!",
        "image": bloggingTech,
        "link": "https://fierce-reaches-72343.herokuapp.com/"
    },
    {
        "id": 2,
        "title": "Code Camp Quiz",
        "description": "I created this application using javascript to test a users knowledge of Javascript through a timed quiz that records scores.",
        "image": codeCampQuiz,
        "link": "https://cmullan602.github.io/camp-code-quiz/"
    },
    {
        "id": 3,
        "title": "All Things Dog",
        "description": "I worked with a group to create this app through which you can search for facts on your favorite breed of dog!",
        "image": dogFactFinder,
        "link": "https://cmullan602.github.io/dog-fact-finder/"
    },
    {
        "id": 4,
        "title": "J.A.T.E",
        "description": "I built this application to give the user the ability to save notes to local storage. This is a PWA and utilizes to store data.",
        "image": jate,
        "link": "https://just-another-text-editor-1992.herokuapp.com/"
    },
    {
        "id": 5,
        "title": "Weather Pro",
        "description": "I worked with a group to great a website where you can sign up as a user and share images as well as comment on other users images.",
        "image": weatherPro,
        "link": "https://cmullan602.github.io/weather-pro/"
    },
    {
        "id": 6,
        "title": "PicShare",
        "description": "This app utilizes javascript and jquery to make api calls to the weather pro API. You can look up your local weather",
        "image": PicShare,
        "link": "https://nugemeister-picshare.herokuapp.com/"
    },
]

export default data;