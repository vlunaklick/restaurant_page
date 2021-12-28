import img1 from './images/californiaroll.jpg'
import img2 from './images/philaroll.jpg'
import img3 from './images/spicyroll.jpg'
import img4 from './images/seattleroll.jpg'

export default function () {
	const mainH = document.getElementById('main-cont')

	let divH = document.createElement('header')
	divH.classList.add('diH')

	let titL = document.createElement('h2')
	titL.classList.add('titH')
	titL.innerHTML = 'Our menu'
	divH.appendChild(titL)

	/* 1er imagen */

	let imgI = document.createElement('div')
	imgI.classList.add('divcali')
	let pI = document.createElement('h4')
	pI.textContent = 'California roll'
	let pT = document.createElement('p')
	pT.classList.add('pMenus')
	pT.textContent =
		'A California roll or California maki is a makizushi sushi roll that is usually rolled inside-out, and containing cucumber, crab or imitation crab, and avocado.'
	let divI = document.createElement('div')
	divI.appendChild(imgI)
	divI.appendChild(pI)
	divI.appendChild(pT)
	divI.classList.add('divI')

	/* 2da imagen */

	let imgII = document.createElement('div')
	imgII.classList.add('divphila')
	let pII = document.createElement('h4')
	pII.textContent = 'Philadelphia roll'
	let pTI = document.createElement('p')
	pTI.classList.add('pMenus')
	pTI.textContent =
		'A Philadelphia roll is a makizushi type of sushi generally made with smoked salmon, cream cheese, and cucumber.'
	let divII = document.createElement('div')
	divII.appendChild(imgII)
	divII.appendChild(pII)
	divII.appendChild(pTI)
	divII.classList.add('divI')

	/* 3era imagen */

	let imgIII = document.createElement('div')
	imgIII.classList.add('divtuna')
	let pIII = document.createElement('h4')
	pIII.textContent = 'Spicy tuna roll'
	let pTII = document.createElement('p')
	pTII.classList.add('pMenus')
	pTII.textContent =
		'A Spicy tuna roll is a makizushi roll that usually contains raw tuna, and spicy mayo or sriracha.'
	let divIII = document.createElement('div')
	divIII.appendChild(imgIII)
	divIII.appendChild(pIII)
	divIII.appendChild(pTII)
	divIII.classList.add('divI')

	/*  4ta imagen */

	let imgIIII = document.createElement('div')
	imgIIII.classList.add('divseat')
	let pIIII = document.createElement('h4')
	pIIII.textContent = 'Seattle roll'
	let pTIII = document.createElement('p')
	pTIII.classList.add('pMenus')
	pTIII.textContent =
		'A Seattle roll is a makizushi roll similar to the California roll. It typically contains cucumber, avocado, raw salmon, and masago or tobiko'
	let divIIII = document.createElement('div')
	divIIII.appendChild(imgIIII)
	divIIII.appendChild(pIIII)
	divIIII.appendChild(pTIII)
	divIIII.classList.add('divI')

	let divCon = document.createElement('div')
	divCon.classList.add('contMenu')

	let divPrimero = document.createElement('div')
	divPrimero.classList.add('divPrimero')
	let divSegundo = document.createElement('div')
	divSegundo.classList.add('divSegundo')

	divPrimero.appendChild(divI)
	divPrimero.appendChild(divII)
	divSegundo.appendChild(divIII)
	divSegundo.appendChild(divIIII)

	divCon.appendChild(divPrimero)
	divCon.appendChild(divSegundo)

	let divHD = document.createElement('article')
	divHD.classList.add('divHD')
	divHD.appendChild(divCon)
	let section = document.createElement('section')
	section.classList.add('grupoSec')

	section.appendChild(divH)
	section.appendChild(divHD)

	mainH.appendChild(section)
}
