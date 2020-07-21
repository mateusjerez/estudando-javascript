//var nome = "Nome Sobrenome";
//var idade = 35;
//var idade2 = 29;
//var n1 = 10;
//var n2 = 25;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2)
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//console.log(n1*n2);

//-----------------------------------------------------------

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//lista.reverse();
//console.log(lista);
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var fruta = {nome: "maçã", cor:"vermelha"};
//console.log(fruta);
//console.log(fruta.nome);

//var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
//console.log(frutas);
//console.log(frutas[1].nome);

//------------------------------------------------------------
/*var idade = prompt("Qual sua idade?")
if (idade>=18){
	alert("maior de idade");
}else{
	alert("menor de idade");
}*/

/*var count;

for (count=0; count <=5; count++){
	console.log(count);
}*/

/*
var data = new Date();
alert(data);
alert(data.getMonth());
alert(data.getDay())
alert(data.getHours());
*/

//---------------------------------------------------------

/*function soma(n1,n2){
	return n1 + n2;
}

function setReplace(frase,nome,novo_nome){
	return frase.replace(nome,novo_nome);
}

alert(soma(5,10));
alert(setReplace("vai Japão","Japão","Brasil"))
*/
/*function validaIdade(idade){
	var validar;
	if (idade >= 18){
		validar = true;
		return "Maior de Idade";
	}else{
		validar = false;
		return "Menor de Idade";
	}

}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));*/

//------------------------------------------------------------

function botao(){
	//alert("Obrigado por clicar")
	document.getElementById("agradece").innerHTML="Obrigado por clicar"
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML="Obrigado"
	elemento.innerHTML="Obrigado"
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
	elemento.innerHTML="Passe o mouse aqui"
}

function load() {
	alert("pagina carregada")
	// body...
}

function funcaoChange(elemento){
	console.log(elemento.value)
}