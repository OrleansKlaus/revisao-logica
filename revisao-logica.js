/*
Revisão de lógica
    estruturas condicionais
    laços de repetição
    ARRAYS
    funções
    OBJETOS
    
JavaScript Core
    Classe String
        toUpperCase
        toLowerCase
        slice
        split
        replace
        substr
    Classe Math
        PI
        round
        pow
        sqrt
        abs
        ceil
        floor
        min
        max
        random
    Classe Date
        getDate
        getDay
        getFullYear
        getHours
        getMilliseconds
        getMinutes
        getMonth
        getSeconds
        getTime
        setDate
        setDay
        setFullYear
        setHours
        setMilliseconds
        setMinutes
        setMonth
        setSeconds
        setTime
        DOM - Iniciar com o DOM
*/
var produtos = []; //variável global, vista por todas as funções

function cadastrarProdutos() {
    event.preventDefault();
    
    var objNome  = document.getElementById('nome');
    //<input type="text" id="nome" value="valor que foi digitado" name="nome" placeholder="Seu nome aqui"><br>
    var objPreco = document.getElementById('preco');
    var objQtd = document.getElementById('qtd');
    var objTotal = document.getElementById('total');
    
    var prod       = new Object();
        prod.nome  = objNome.value;
        prod.preco = objPreco.value;
        prod.qtd  = objQtd.value;
        prod.total = objTotal.value;
    
    produtos.push(prod);

    objNome.value   = '';
    objPreco.value  = '';
    objQtd.value   = '';
    objTotal.value  = '';
        
    listarProdutos();
}

function listarProdutos() {
    //gerar o template com o html dos clientes a ser
        //listado
    event.preventDefault();

    var listaProdutos = "";

    for (var i = 0; i < produtos.length; i++) {
        listaProdutos += "<p>Nome : " + produtos[i].nome + "<br>Preco: " + produtos[i].preco + "<br>Qtd: " + produtos[i].qtd + "<br>Total: " + produtos[i].total + "</p>";
    }

    document.getElementById('resultado').innerHTML = listaProdutos;
    console.log(listaProdutos);
}