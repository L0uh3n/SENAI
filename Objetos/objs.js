var usuario = document.getElementById("usuario")
var senha = document.getElementById("senha")
var email = document.getElementById("email")
var campos = document.getElementById("campo")
var atual = document.getElementById("atual")
var posicao = 0;

lista_usuarios = []
console.log(lista_usuarios)

// função para criar o objeto usuário:
function cria_usuario(usuario, senha, email) {
    var Usuario = {
        usuario: usuario,
        senha: senha,
        email: email
    }
    return Usuario
}

// função para preencher os campos:
function preenche(mover) {
    // move os registros:
    if (mover.target.id == "left") {
        posicao--
        if (posicao < 0) {
            posicao = 0
        }
    } if (mover.target.id == "right") {
        posicao++
        if (posicao >= lista_usuarios.length) {
            posicao = lista_usuarios.length - 1
        }
    }
    if (lista_usuarios.length != 0) {
        if (posicao < lista_usuarios.length) {
            console.log(posicao)
            campos[0].value = lista_usuarios[posicao].usuario
            campos[1].value = lista_usuarios[posicao].senha
            campos[2].value = lista_usuarios[posicao].email
        }
        atual.innerText = posicao + 1
    } else {
        return alert("Não existem registros para mostrar, meu nobre.")
    }
}

function cadastrar() {
    for (c in lista_usuarios) {
        if (lista_usuarios[c].usuario == usuario.value) {
            return alert("Esse usuário já existe, meu nobre. ඞ")
        } else if (lista_usuarios[c].email == email.value) {
            return alert("Esse email já está cadastrado, meu nobre. ඞ")
        }
    }
    if (usuario.value != "" && senha.value != "" && email.value != "") {
        lista_usuarios.push(cria_usuario(usuario.value, senha.value, email.value))
        return alert("Cadastro realizado, meu nobre.")
    } else {
        alert("Tá vazio, meu nobre.")
    }
}

function editar(botao) {
    if (botao.target.id == "editar") {
        botao.target.innerText = "SALVAR"
        botao.target.id = "salvar"
        for (cont = 0; cont < campos.length; cont++) {
            campos[cont].disabled = false
        }
    } else if (botao.target.id == "salvar") {
        botao.target.innerText = "EDITAR"
        botao.target.id = "editar"
        lista_usuarios[posicao].usuario = campos[0].value
        lista_usuarios[posicao].senha = campos[1].value
        lista_usuarios[posicao].email = campos[2].value
        for (cont = 0; cont < campos.length; cont++) {
            campos[cont].disabled = true
        }
    }
}

console.log(">>> O QUE CÊ TÁ OLHANDO AQUI, MEU NOBRE?\n")
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀ ")
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀ ")
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀ ")
console.log("⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀ ")
console.log("⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀ ")
console.log("⠀⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀ ")
console.log("⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀ ")
console.log("⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀ ")
console.log("⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀ ")
console.log("⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀ ")
console.log("⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀ ")
console.log("⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀ ")
console.log("⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀ ")
console.log("⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀ ")
console.log("⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶⣶⣶⠶⠀⢠⣿⣿⠀⠀⠀ ")
console.log("⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀⢸⣿⡇⠀⠀⠀ ")
console.log("⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇⠀⠀⠀ ")
console.log("⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏⠀⠀⠀⠀ ")
console.log("⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")