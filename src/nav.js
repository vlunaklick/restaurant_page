import img from './images/sushi-ico.png'

export default function navCreator() {
	let idCont = document.getElementById('content')

	let navH = document.createElement('nav')

	let list = document.createElement('ul')
	list.classList.add('sepaNav')

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

	let navTitulo = document.createElement('header')
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

	navTitulo.insertAdjacentHTML(
		'beforeend',
		`<svg id="svgP"class="svgOculto"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>`
	)

	let svg = document.getElementById('svgP')

	let abierto = false

	svg.addEventListener('click', e => {
		abierto = !abierto
		if (abierto) {
			list.classList.add('siVer')
		} else {
			list.classList.remove('siVer')
		}
	})

	home.addEventListener('click', () => {
		abierto = !abierto
		list.classList.remove('siVer')
	})
	menu.addEventListener('click', () => {
		abierto = !abierto
		list.classList.remove('siVer')
	})
	contact.addEventListener('click', () => {
		abierto = !abierto
		list.classList.remove('siVer')
	})
}
