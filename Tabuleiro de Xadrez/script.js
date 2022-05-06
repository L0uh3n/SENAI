var vetor_num = [10,5,8,9,21,33,84,15,45]
var aux

for (let cont = 0; cont <= vetor_num.length; cont++) {
    for (cont2 = cont + 1; cont2 <= vetor_num.length; cont2 ++) {
         if (vetor_num[cont] > vetor_num[cont2]) {
            aux = vetor_num[cont]
            vetor_num[cont] = vetor_num[cont2]
            vetor_num[cont2] = aux
        }
    }
}

console.log(vetor_num)

/* var tabuleiro = document.getElementById('tabuleiro')

var cor = ""
var cor2 = ""

function gera_tabuleiro() {
    for (let cont = 0; cont < 8; cont++) {
        if (cont %2 == 0) {
            cor = "preta"
            cor2 = "vermelho"
        } else {
            cor = "vermelho"
            cor2 = "preta"
        }  
        for(let cont2 = 0; cont2 < 8; cont2++) {
            if (cont2 %2 == 0) {
                tabuleiro.innerHTML += "<div class='" + cor + "'></div>"
            } else {
                tabuleiro.innerHTML += "<div class='" + cor2 + "'></div>"
            } 
        }
    }
} */