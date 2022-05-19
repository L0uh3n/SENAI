var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var troca_cor;

function ligar_semaforo() {
  troca_cor = setInterval(ligar_semaforo, 3000);
  switch (troca_cor) {
    case 1000:
      red.style.background = "red";
      break;
    case 2000:
      yellow.style.background = "yellow";
      red.style.background = "white";
      break;
    case 3000:
      green.style.background = "green";
      red.style.background = "white";
      yellow.style.background = "white";
      break;
    default:
  }
}
