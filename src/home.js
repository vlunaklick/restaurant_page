import img from './images/homeimg.jpg'

export default function () {
	const mainH = document.getElementById('main-cont')

	let divH = document.createElement('header')
	divH.classList.add('diH')

	let titL = document.createElement('h2')
	titL.classList.add('titH')
	titL.innerHTML = 'Home of the sushi'
	divH.appendChild(titL)

	let divHD = document.createElement('article')

	let pHD = document.createElement('p')
	pHD.textContent =
		'Hello! We are Sushi Steet and we LOVE sushi! Hopefully you are a sushi lover just like us. We decided to make this website in order to meet more people who adore this food and create a community. After years of training, we created our own recipes and we want to share them with the world. You are more than welcome to navigate through our page and follow us on our social media!'
	pHD.classList.add('pHome')

	let imaH = document.createElement('img')
	imaH.setAttribute('src', `${img}`)
	imaH.classList.add('homeIm')

	divHD.appendChild(imaH)
	divHD.appendChild(pHD)
	divHD.classList.add('divHD')

	let section = document.createElement('section')
	section.classList.add('grupoSec')

	section.appendChild(divH)
	section.appendChild(divHD)

	mainH.appendChild(section)
}
