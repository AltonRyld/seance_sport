const boutons = Array.from(document.getElementsByClassName("bouton"))

boutons.forEach(bouton => {
	bouton.addEventListener('click', getVideo)
})

loadEchauffements();

function getVideo(){
	const that = this
	fetch("source.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		let categorie = that.id
		let src = json[categorie]
		let item = src[Math.floor(Math.random()*src.length)]
		changeEframe(item)
	})
}

function getWarmUp(){
	changeEframe(this.dataset.src)
}

function loadEchauffements(){
	const that = this
	fetch("source.json")
	.then(function (response) {
		return response.json()
	})
	.then(function (json) {
		let src = json.echauffement
		let barre = document.getElementById("barre-bouton")
		src.forEach(s => {
			let b = createBoutonEchaufement(s)
			barre.appendChild(b)
		})
	})
}

function createBoutonEchaufement(obj){
	const b = document.createElement("button")
	const label = document.createTextNode(obj.nom)
	b.appendChild(label)
	b.classList.add("echauffement")
	b.dataset.src = obj.source
	b.addEventListener('click', getWarmUp)
	return b
}

function changeEframe(source){
	let url = "https://www.youtube.com/embed/" + source
	document.getElementById("video").src = url
}
