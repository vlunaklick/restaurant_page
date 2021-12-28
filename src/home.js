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
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deleniti distinctio eum eos dolor dolore, blanditiis aliquam est voluptas suscipit corrupti. Temporibus aut qui, tempore iure accusamus mollitia? Minima, cupiditate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deleniti distinctio eum eos dolor dolore, blanditiis aliquam est voluptas suscipit corrupti. Temporibus aut qui, tempore iure accusamus mollitia? Minima, cupiditate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deleniti distinctio eum eos dolor dolore, blanditiis aliquam est voluptas suscipit corrupti.'
	pHD.classList.add('pHome')

	let imaH = document.createElement('img')
	imaH.setAttribute('src', `${img}`)
	imaH.classList.add('homeIm')

	divHD.appendChild(imaH)
	divHD.appendChild(pHD)
	divHD.classList.add('divHD')

	mainH.appendChild(divH)
	mainH.appendChild(divHD)
}
