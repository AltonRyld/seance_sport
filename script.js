document.getElementById("go").addEventListener("click", getVideo);

function getVideo(){
	fetch("source.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		let src = json.src
		let item = src[Math.floor(Math.random()*src.length)]
		let p_resultat = document.getElementById("resultat")
		p_resultat.innerHTML = item
	})
}