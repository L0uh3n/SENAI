var usuario = document.getElementById("usuario")
var senha = document.getElementById("senha")
var email = document.getElementById("email")
var display = document.getElementById("display")
let content = document.getElementById("content");
let index = 0
let cont;

// lista_usuarios = []

// function cria_usuario(usuario, senha, email) {
//     var Usuario = {
//         usuario: usuario,
//         senha: senha,
//         email: email
//     }
//     return Usuario
// }

const cadastro = {
    usuario: [],
    senha: [],
    email: []
}

function cadastrar() {
    for (c in cadastro.usuario) {
        if (cadastro.usuario[c] == usuario.value) {
        return alert("Esse usuário já existe, meu nobre. ඞ")
        } else if (cadastro.email[c] == email.value) {
            return alert("Esse email já está cadastrado, meu nobre. ඞ")
        }
    } 
    if (usuario.value != "" && senha.value != "" && email.value != "") {
        // lista_usuarios.push(cria_usuario(usuario.value, senha.value, email.value))
        
        index++
        cont = index-1
        display.innerText = index

        cadastro.usuario.push(usuario.value)
        cadastro.senha.push(senha.value)
        cadastro.email.push(email.value)
        
        register_card()

        return alert("Cadastro realizado, meu nobre.")
    } else {
        alert("Tá vazio, meu nobre.")
    }
}

function register_card() {
    content.innerHTML = "<fieldset><h2>Usuário: " + cadastro.usuario[index - 1] + "</h2><br/>" + "<p>Email: " + cadastro.email[index - 1] + "</p></fieldset>"
}

function back() {
    if (cont != 0) {
        cont--;
        display.innerText = cont+1
    }
    
    if (cont == 0) {
        content.innerHTML = "<fieldset><h2>Usuário: " + cadastro.usuario[cont] + "</h2><br/>" + "<p>Email: " + cadastro.email[cont] + "</p></fieldset>"
    } else if (cont != 0) {

        display.innerText = cont+1
        content.innerHTML = "<fieldset><h2>Usuário: " + cadastro.usuario[cont] + "</h2><br/>" + "<p>Email:" + cadastro.email[cont] + "</p></fieldset>"
    }
}

function next() {
    if (cont < cadastro.usuario.length-1) {
        cont++;
        display.innerText = cont + 1
    }
    
    if (cont == 0) {
        return null;
    } else if (cont > 0 && cont < cadastro.usuario.length) {
        content.innerHTML = "<fieldset><h2>Usuário: " + cadastro.usuario[cont] + "</h2><br/>" + "<p>Email: " + cadastro.email[cont] + "</p></fieldset>"
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