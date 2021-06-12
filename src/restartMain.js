export default function(){
    let idConten = document.getElementById('content');
    let footer = document.getElementById('footer-r');
    const mainH = document.getElementById('main-cont');
    mainH.remove();

    let main = document.createElement('main')
    main.setAttribute('id','main-cont');

    idConten.insertBefore(main,footer)
}