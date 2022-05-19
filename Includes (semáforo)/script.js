var red = document.getElementById("red")
var yellow = document.getElementById("yellow")
var green = document.getElementById("green")

var troca_cor = 1;
setTimeout(semaforo, 500)

function semaforo() {    
    switch (troca_cor) {
        case 1:
            setTimeout(semaforo, 5000)
            troca_cor = 3;
            red.style.background = "red"
            green.style.background = "white"
            yellow.style.background = "white"
            break;
        case 2:
            troca_cor = 1;
            setTimeout(semaforo, 1000)
            red.style.background = "white"
            yellow.style.background = "yellow"
            green.style.background = "white"
            break;
        case 3:
            setTimeout(semaforo, 5000)
            troca_cor = 2;
            red.style.background = "white"
            yellow.style.background = "white"
            green.style.background = "green"
            break;
    }
}

// function on_semaforo() {
//    intervalo = setInterval(semaforo, 3000)
// }

// function off_semaforo() {
//     clearInterval(intervalo)
// }