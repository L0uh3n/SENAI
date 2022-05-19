var camiseta = document.getElementById("camiseta")
var calca = document.getElementById("calca")
var casaco = document.getElementById("casaco")

let peso;

var obj = document.getElementById("obj")

const maquinadelavar = {
    marca: "Brastemp",
    modelo: "LV-MA-YA-11",
    capacidade: 10,//medida em kg
    cor: ["branco", "preto"],
    centrifuga: true,
    verifica_peso: function () {
        if (peso <= this.capacidade) return true;
    },
    lavar: function () {
        if (peso <= this.capacidade) {
            setTimeout(MostraMensagem, 3000)

        } else if (peso > this.capacidade) {
            setTimeout(this.lavar, 3000)
            alert("Peso excedente, remova e tente lavar novamente")
        }
    }
}

function MostraMensagem() {
    alert('LAVAGEM CONCLUÍDA')
}

function chama_lavagem() {
    peso = (camiseta.value * 0.250) + (calca.value * 0.700) + (casaco.value * 1)

    maquinadelavar.lavar()
    console.log(peso)
}

/* const padrao = /[a-zA-Z0-9]/

var input = document.getElementById("texto");
input.addEventListener("keypress", function(e) {
     if(input.value.length==3 || input.value.length==7 ){
        input.value +="."
    }
/*     var char = e.key
    if(!padrao.test(char)){
        return e.preventDefault()
    } 
})*/