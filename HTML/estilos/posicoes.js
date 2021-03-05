// Código para alterar no css o z-index de um elemento ao clicar nele.

//declara uma constante para a classe .elemento:
const $elemento1 = document.querySelector(".elementoRel1");
const $elemento2 = document.querySelector(".elementoRel2");

// Acidiona um EventListener na classe para quando ocorrer um click
$elemento1.addEventListener("click", function (event) {
	// Toggle adiciona ou remove (se já existir) a classe 'elemento_isActive' neste elemento1 (this)
	this.classList.toggle("elementoRel_isActive");
	// Adiciona a classe no elemento_isActive no elemento2.
	$elemento2.classList.add("elementoRel_isActive");
});

// Repete a mesma funcção de cima, mas para o elemento2.
$elemento2.addEventListener("click", function (event) {
	this.classList.toggle("elementoRel_isActive");
	$elemento1.classList.add("elementoRel_isActive");
});
