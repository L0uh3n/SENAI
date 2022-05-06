var matriz = []
var num = document.getElementById("container")
//var coluna = []
//matriz.lenght = 10

function vetor() {
    var coluna = []
    for (let cont = 0; cont < 10; cont++) {
    //matriz[cont] = Math.floor(Math.random()*100)
    coluna.push(Math.floor(Math.random()*100))
    }
    return coluna
}    

for (let cont = 0; cont < 10; cont++) {
    matriz[cont] = vetor()
}

console.log(matriz)

//+"<b>"+matriz[cont][cont2]+"</b>"+

for (cont = 0; cont < matriz.length; cont++) {
    for (cont2 = 0; cont2 < 10; cont2++) { 
        if (cont == cont2) {
            num.innerHTML += "<div class='square'>"+"<b>"+matriz[cont][cont2]+"</b>"+"</div>"
        } else if ((cont + cont2) % 9 == 0) {
            num.innerHTML += "<div class='square'>"+"<b>"+matriz[cont][cont2]+"</b>"+"</div>"
        } else {
             num.innerHTML += "<div class='square'>"+matriz[cont][cont2]+"</div>"
        } 
    }
}
