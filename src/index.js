import navCreator from './nav.js';
import footCreator from './footer.js';
import homeCreator from './home.js';
import restartMain from './restartMain.js';
import menuCreator from './menu.js';
import contactCreator from './contact.js'
import "./home.css";
import './nav.css';
import './footer.css';
import './menu.css';
import './contact.css';


navCreator();
footCreator();
homeCreator();

const homeBtn = document.getElementById('homebtn');
const menuBtn = document.getElementById('menubtn');
const contact = document.getElementById('contactbtn');
const git = Array.from(document.getElementsByClassName('gitimg'));

homeBtn.addEventListener('click', function(){
    restartMain();
    homeCreator();
});

menuBtn.addEventListener('click', function(){
    restartMain();
    menuCreator();
});

contact.addEventListener('click', function(){
    restartMain();
    contactCreator();
});

git[0].addEventListener('click', function(){
    window.open("https://github.com/vlunaklick");
});