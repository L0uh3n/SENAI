// Cores Primárias

// var cor1 = "roxo"

// if(cor1=="amarelo" || cor1=="vermelho" || cor1 == "azul"){
//     console.log(cor1 + " é uma Cor primária")
// }else{
//     console.log(cor1 + " não é uma Cor primária")
// }

var cor = "roxo"

switch (cor) {
    case "amarelo":
    case "vermelho":
    case "azul":
        console.log("É uma cor primária");
        break;
    default:
        console.log("Não é uma cor primária");
}

// Calulcar ºC -> ºF

// var temp = 31
// var  medida ="ºC"

// if (medida =="ºC"){
//     console.log((temp*1.8)+32 + " ºF")
// }else if(medida =="ºF"){
//     console.log((temp-32)/1.8 + " ºC")
// }else{
//     console.log(" Não é uma medida válida :<")
// }

var temp = 31
var medida = "ºC"

switch (medida) {
    case "ºC":
        console.log((temp * 1.8) + 32 + " ºF")
        break;
    case "ºF":
        console.log((temp - 32) / 1.8 + " ºC")
        break;
    default:
        console.log(" Não é uma medida válida :<")
        break;
}

// ordem de nomes
var nome1 = "Cassio"
var nome2 = "Joana"
var nome3 = "Tácio"

if (nome1 < nome2 && nome1 < nome3 && nome2 < nome3) {
    console.log(nome1 + " " + nome2 + " " + nome3)
} else if (nome1 < nome2 && nome1 < nome3 && nome3 < nome2) {
    console.log(nome1 + " " + nome3 + " " + nome2)
} else if (nome2 < nome1 && nome2 < nome3 && nome1 < nome3) {
    console.log(nome2 + " " + nome1 + " " + nome3)
} else if (nome2 < nome1 && nome2 < nome3 && nome3 < nome1) {
    console.log(nome2 + " " + nome3 + " " + nome1)
} else if (nome3 < nome1 && nome3 < nome2 && nome1 < nome2) {
    console.log(nome3 + " " + nome1 + " " + nome2)
} else if (nome3 < nome1 && nome3 < nome2 && nome2 < nome1) {
    console.log(nome3 + " " + nome2 + " " + nome1)
}

// 

// var nota_final = 7

// if (nota_final >= 7){
//     console.log("aprovado")
// }
// else if (nota_final >=5){
//     console.log("recuperacao")
// }else{
//     console.log("recuperaçao")
// }

var nota_final = 7

switch (nota_final) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Reprovado");
        break;
    case 5:
    case 6:
        console.log("Recuperacao");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("aprovado");
        break;
}

// teste numerico

var numero = 10

if (numero > 7) {
    console.log("ENTREI no if 1")
}
else if (numero > 5) {
    console.log("ENTREI no if 2")
} else {
    console.log("ENTREI no if 3")
}


// verificar salario

var salario = 3000.00
var base = salario
if (salario > 1200 && salario <= 2500) {
    salario = salario - (base * 0.08)
}
if (salario > 2500) {
    salario = salario - (base * 0.11)
}
salario = salario - (base * 0.10)
salario = salario - (base * 0.12)

console.log("salario final igual a: " + salario)

// verifica se tamanho da string é par ou impar
var texto = "TExto qualquer"

if (texto.length % 2 == 0) {
    console.log(texto.length + " Qtde de chars dessa string é par")
} else {
    console.log("Qtde de chars dessa string é ímpar")
}

// verifica numeros

var num1 = 10
var num2 = 5
var num3 = 3

if (num1 >= 5) {
    console.log(num1 + " é maior ou igual a cinco")
}
if (num2 >= 5) {
    console.log(num2 + " é maior ou igual a cinco")
}
if (num3 >= 5) {
    console.log(num2 + " é maior ou igual a cinco")
}

// verificação de sexo

// if (letra == "F") console.log("feminino")
// if (letra == "M") {
//     console.log("masculino")
// } else {
//     console.log("outros")
// }

var letra = "F"

switch (letra) {
    case "F":
        console.log("Feminino")
        break;
    case "M":
        console.log("Masculino")
        break;
    default:
        console.log("Outros")
}

// media de notas
var nota1 = 7
var nota2 = 10
var media = (nota1 + nota2) / 2
if ((nota1 + nota2) / 2 > 7) {
    console.log("APROVADO")
}
if (media > 5 && media < 7) {
    console.log("RECUPERAÇÃO")
} else {
    console.log("REPROVADO")
}