// Como utilizar um select
var select = document.getElementById("funcao")
var resultado = document.getElementById("resultado")
var formas = 1
var lista1 = []
var lista2 = []
var lista3 = []
var vetor = []


//options é um vetor com as opcoes listadas. selected index = indice selecionado. é possivel informar o indice manualmente ou utilizando um contador.
function selecao() {
    var opcao = select.options[select.selectedIndex].value
    let input = document.getElementById("input").value;



    /* 1# junção de listas
    - crie e preencha dois vetores com numeros de 0-99. a quantidade de valores desses vetores deve ser definida pelo usuario. Use o mesmo valor para ambos os vetores.
    - crie uma funcao que recebe os vetores como parametro e retorna um novo vetor com os valores de ambos em ordem crescente.
    
    DICA: se preferir pode usar o método <arrayname>.sort()
    onde <arrayname>= nome da seu vetor.
    */
    if (opcao == "juncao_de_listas") {
        resultado.innerHTML = ""
        for (let cont = 0; cont < input; cont++) {
            lista1[cont] = (Math.floor(Math.random() * 100))
            lista2[cont] = (Math.floor(Math.random() * 100))
            lista3 = lista1.concat(lista2)
            lista3.sort(function (a, b) { return a - b });
        } resultado.innerHTML = "Lista 1: " + lista1 + "<br>" + "Lista 2: " + lista2 + "<br>" + "Lista Final: " + lista3

    }


    /* 2# Procura numero
    - crie um vetor de tamanho definido pelo usuário. Popule o vetor com numeros aleatórios entre 0-99.
    - Crie uma função que verifique se o número que definiu o tamanho do vetor existe dentro dele(do próprio vetor). a função deve retornar se o número foi encontrado e qual em qual posição
     */
    if (opcao == "procura_numero") {
        resultado.innerHTML = ""

        for (let cont = 0; cont < input; cont++) {
            vetor[cont] = (Math.floor(Math.random() * 10));
            for (c in vetor) {
                if (vetor[c] == input) {
                    resultado.innerHTML = "Vetor: " + vetor + "<br>" + "O número que você digitou está no vetor"
                } else if (vetor[c] != input) {
                    resultado.innerHTML = "Vetor: " + vetor + "<br>" + "O número que você digitou não está no vetor"
                }
            }
        }
    }


    /* 3# Cria simbolos
    - Crie uma função que receba um valor numerico como parametro. A função deve criar na tela quadrados, circulos e triangulos(respectivamente) repetidamente até atingir o valor recebido como parametro.
    EX: valor digiado pelo usuario foi 4.
    a função deverá criar na tela Quadrado,Circulo,triangulo,Quadrado.
    Dica: crie novas divs com a propriedade innerHTML.
    Utilize as classes quadrado,circulo,triangulo para formatar a div adequadamente.
     */
    if (opcao == "cria_simbolos") {
        resultado.innerHTML = " "

        for (let cont = 0; cont < parseInt(input); cont++) {
            switch (formas) {
                case 1:
                    resultado.innerHTML += "<div class='quadrado'></div>"
                    formas++
                    break;
                case 2:
                    resultado.innerHTML += "<div class='circulo'></div>"
                    formas++
                    break;
                case 3:
                    resultado.innerHTML += "<div class='triangulo'></div>"
                    formas = 1
                    break;
            }
        }
    }


    /* 4# mostra hora
    - crie uma função que mostre a hora em tempo real na tela.
    a função também deve receber um valor informado pelo usuário que corresponderá a uma diferença de horas. 
    EX: usuário digitou -4. hora atual 13:23:23 e 9:23:23.
    */
    if (opcao == "mostra_hora") {
        resultado.innerHTML = " "
        
        input = parseInt(input)
        
        function add_zero(i) {
            if (i < 10) {
                i = "0" + i
            } return i;
          }
          
          const data = new Date();
          let hours = add_zero(data.getHours());
          let minutes = add_zero(data.getMinutes());
          let seconds = add_zero(data.getSeconds());

          let time = hours + ":" + minutes + ":" + seconds;
          let time2 = (hours + input) + ":" + minutes + ":" + seconds;

          resultado.innerHTML = "Hora atual: " + time + " e " + time2
    }

        /* 5# Dado um numero inteiro de 1 até 3999. crie um função que Converta esse numero para algarismo romano.
        Premissas:
        Símbolo       Valor
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
        
        I pode vir antes de V(5) e X(10) formando o número 4 e 9.
        X pode vir antes de L(50) e X(100) formando o número 40 e 90.
        C pode vir antes de D(500) e M(1000)) formando o número 400 e 900.
        
         */
        if (opcao == "numeral_Romano")
            return selecao
} 