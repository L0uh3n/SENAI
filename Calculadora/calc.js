const padrao = /[0-9]/
var display = document.getElementById("display")
var historico = document.getElementById("history")
var valor1
var valor2
var operacao
var resultado = ""
function calculadora(evento,tipo){
    if (tipo == 0){
        var id = evento.id
        
    }else{
        var id = evento.target.id
    }

    if(id=="+" || id=="-" || id=="x" || id=="/"){
        valor1 = display.innerText
        display.innerText = ""
        operacao = id
        
    }if(id =="="){
        valor2 = display.innerText
        if(operacao == "+"){
            display.innerText = parseInt(valor1)+parseInt(valor2)
            resultado = display.innerText
        }else if(operacao == "-"){
            display.innerText = display.innerText = parseInt(valor1)-parseInt(valor2)
            resultado = display.innerText
        }else if(operacao == "x"){
            display.innerText = display.innerText = parseInt(valor1)*parseInt(valor2)
            resultado = display.innerText
        }else if(operacao == "/"){
            display.innerText = display.innerText = parseInt(valor1)/parseInt(valor2)
            resultado = display.innerText
        }
    }
    if(id!="=" && id!="+" && id!="-" && id!="x" && id!="/"){
        if(resultado != ""){
            display.innerText = ""
            resultado = ""
        }
        display.innerText += id
    }
}
var mod
var texto
function backspace(){
    if(display.innerText != ""){
        if(display.inner==10){
            mod = 1
        }else if(display.innerText <10){
            mod = ""
        }else{
            texto = parseInt(display.innerText)
            mod = Math.floor(texto/10)
        }
        display.innerText = mod
    }
}
function digita(tecla){
    console.log(tecla.key)
    var elemento = document.getElementsByName("tecla")
    if(tecla.key == "Backspace"){
        return backspace()
    }
    if(tecla.key =="*"){
        elemento[0].id = "x"
    }
    else if(tecla.key=="Enter"){
        elemento[0].id = "="
    }

    else if(padrao.test(tecla.key) || tecla.key=="+" || tecla.key=="-" || tecla.key=="/"){
        elemento[0].id = tecla.key
    }else{
        return tecla.preventDefault()
    }
    calculadora(elemento[0],0)
}  