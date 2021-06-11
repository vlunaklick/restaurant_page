export default function navCreator(){
    let idCont = document.getElementById('content');

    let navH = document.createElement('nav');

    let list = document.createElement('ul');

    let home = document.createElement('li');
    let menu = document.createElement('li');
    let contact = document.createElement('li');

    let title = document.createElement('h1');

    let aMe = document.createElement('a');
    let aHo = document.createElement('a');
    let aCon = document.createElement('a');


    home.classList.add('liHead');
    menu.classList.add('liHead');
    contact.classList.add('liHead');

    aMe.classList.add('aHead');
    aHo.classList.add('aHead');
    aCon.classList.add('aHead');

    aMe.setAttribute('href', 'test');
    aHo.setAttribute('href', 'test');
    aCon.setAttribute('href', 'test');

    home.appendChild(aHo);
    menu.appendChild(aMe);
    contact.appendChild(aCon);

    title.innerHTML = "Sushi Streets";
    aHo.innerHTML = "Home";
    aMe.innerHTML = "Menú";
    aCon.innerHTML = "Contact";
    
    navH.appendChild(title)
    list.appendChild(home)
    list.appendChild(menu)
    list.appendChild(contact)
    navH.appendChild(list);
    idCont.appendChild(navH);
};