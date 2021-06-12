import img from './images/github-ico.png';

export default function(){
    let idConte = document.getElementById('content');
    let footer = document.createElement('footer');
    footer.setAttribute('id','footer-r')

    let textM = document.createElement('h3');
    textM.innerHTML = 'Created with love by Valen'

    let imgGit = document.createElement('img');
    imgGit.setAttribute('src',`${img}`)
    imgGit.classList.add('gitimg');

    let divU = document.createElement('div');
    divU.classList.add('divfoot')

    divU.appendChild(textM);
    divU.appendChild(imgGit)
    footer.appendChild(divU);
    idConte.appendChild(footer);
}