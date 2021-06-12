export default function(){
    let idConten = document.getElementById('content');
    const mainH = document.getElementById('main-cont');
    mainH.remove();

    let main = document.createElement('main')
    main.setAttribute('id','main-cont');

    idConten.appendChild(main);
}