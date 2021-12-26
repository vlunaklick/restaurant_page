import img from './images/sushi-ico.png'

export default function navCreator() {
	let idCont = document.getElementById('content')

	let navH = document.createElement('nav')

	let list = document.createElement('ul')

	let home = document.createElement('li')
	let menu = document.createElement('li')
	let contact = document.createElement('li')

	home.setAttribute('id', 'homebtn')
	menu.setAttribute('id', 'menubtn')
	contact.setAttribute('id', 'contactbtn')

	let title = document.createElement('h1')

	let aMe = document.createElement('a')
	let aHo = document.createElement('a')
	let aCon = document.createElement('a')

	let navTitulo = document.createElement('div')
	navTitulo.classList.add('cajaTitulo')

	let imgAp = document.createElement('img')
	imgAp.setAttribute('src', `${img}`)

	title.classList.add('tiNav')
	home.classList.add('liHead')
	menu.classList.add('liHead')
	contact.classList.add('liHead')

	aMe.classList.add('aHead')
	aHo.classList.add('aHead')
	aCon.classList.add('aHead')

	imgAp.classList.add('icoHead')

	let main = document.createElement('main')
	main.setAttribute('id', 'main-cont')

	home.appendChild(aHo)
	menu.appendChild(aMe)
	contact.appendChild(aCon)

	title.innerHTML = 'Sushi Streets'
	aHo.innerHTML = 'Home'
	aMe.innerHTML = 'Menu'
	aCon.innerHTML = 'Contact'

	navH.appendChild(imgAp)

	navTitulo.appendChild(imgAp)
	navTitulo.appendChild(title)

	navH.appendChild(navTitulo)
	list.appendChild(home)
	list.appendChild(menu)
	list.appendChild(contact)
	navH.appendChild(list)
	idCont.appendChild(navH)
	idCont.appendChild(main)
}
