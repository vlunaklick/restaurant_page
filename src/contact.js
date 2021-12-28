import img from './images/sushicontact.jpg'
import img1 from './images/street.jpeg'

export default function () {
	const mainH = document.getElementById('main-cont')

	let divH = document.createElement('header')
	divH.classList.add('diH')

	let titL = document.createElement('h2')
	titL.classList.add('titH')
	titL.innerHTML = 'Contact us'
	divH.appendChild(titL)

	let imgS = document.createElement('img')
	imgS.setAttribute('src', img1)
	imgS.classList.add('imgst')

	let divHD = document.createElement('article')

	let pHD = document.createElement('h4')
	pHD.textContent = 'Number: 555 5555 5555'
	pHD.classList.add('pCont')

	let pHDII = document.createElement('h4')
	pHDII.textContent = 'Address: Fake 12345'
	pHDII.classList.add('pCont')

	let pHDI = document.createElement('h4')
	pHDI.textContent = 'Email: best@sushi.com'
	pHDI.classList.add('pCont')

	let imaH = document.createElement('img')
	imaH.setAttribute('src', `${img}`)
	imaH.classList.add('homeIm')

	divHD.appendChild(imaH)
	divHD.appendChild(pHD)
	divHD.appendChild(pHDI)
	divHD.appendChild(imgS)
	divHD.appendChild(pHDII)
	divHD.classList.add('divHD')

	let section = document.createElement('section')
	section.classList.add('grupoSec')

	section.appendChild(divH)
	section.appendChild(divHD)

	mainH.appendChild(section)
}
