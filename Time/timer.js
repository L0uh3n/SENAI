var graus = 0
var gira_status
function chama_gira() {
    gira_status = setTimeout(gira_start, 50)

}
function gira_start() {
    graus += 10
    let imagem = document.getElementById("bowser")
    imagem.style.transform = "rotate(" + graus + "deg)"
    return chama_gira()
}
function gira_end() {
    clearTimeout(gira_status)
    graus = 0
    let imagem = document.getElementById("bowser")
    imagem.style.transform = "rotate(" + graus + "deg)"
    imagem.style.animation = "fade in"

}
//setInterval(gira,50)
//console.log(imagem)
/* imagem.addEventListener('mouseover',function(){
    graus+=10
    imagem.style.transform = "rotate("+graus+"deg)"
}) */


/* SLIDE */
var timer = setInterval(rola_slide, 5000)
var posi = 0 // posição atual do slide

function rola_slide() {
    /*     if (posi<=2){
            document.getElementById("atual").style.marginLeft = -800*posi+"px"
            posi++
        }else{
            document.getElementById("atual").style.marginLeft = 0+"px"
            posi=0
        } */
    /*     window.alert(sentido)
        if (sentido == -1 && posi <2){ // puxa para esquerda
            posi++
            document.getElementById("atual").style.marginLeft = -800*posi+"px"
        }
        else if (sentido == 1 && posi>0){ //puxa para direita
           posi--
           document.getElementById("atual").style.marginLeft = +800*posi+"px"
        }
        window.alert(posi) */


}


//var qtde = document.querySelectory('.image')
/*var balls = document.querySelectory('.balls')
var quant = document.querySelectoryAll('.slide .image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')
var rolar = true

for(let i=0; i < quant.length; i++) {
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')

for(let i=0; i< pos.length; i++) {
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        rolar = false
        slide()
    })
}

voltar.addEventListener('click', ()=>{
    posi--
    slide()
})
next.addEventListener('click', ()=>{
    atual++
    rolar = false
    slide()
})
*/
/*
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true
    }
}*/