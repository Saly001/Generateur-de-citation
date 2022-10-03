
function newQuote() {

	//Ici on utilise un tableau contenant les citations de Karl Marx
	var data = ["La religion est l'opium du peuple.",
				"Les travailleurs n'ont pas de patrie.",
				"L'histoire ne fait rien, c'est l'homme, réel et vivant, qui fait tout.",
				"Le droit n'a pas davantage que la religion une histoire qui lui soit propre.",
				"Une idée devient une force lorsqu'elle s'empare des masses.",
				"De chacun selon ses capacités à chacun selon ses besoins.",
				"Le domaine de la liberté commence là où cesse le travail.",
				"Sur terrain plat, de simples buttes font effet de collines.",
				"L'histoire est la véritable histoire naturelle de l'homme."
			];

	//Recuperation d'un index du tableau de facon aleatoire
	let index = Math.floor(Math.random()*data.length);

	//Recuperation du texte reference par cet index
	let quote = data[index];

	//Injection du texte recupere dans le div reference par l'ID citation
	document.getElementById("citation").innerHTML = quote;
}