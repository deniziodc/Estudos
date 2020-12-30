var item;

function salvarItem(nome, valor){
    sessionStorage.setItem(nome, valor);
}

function carregarItem(){
    if (sessionStorage.length > 0){

        sessionStorage.getItem("nome");
        sessionStorage.getItem("valor");
    
    }

    else {
        alert("Carrinho esta vazio")
    }
}

$(function(){
    montarLink();
});

function montarLink() {
    $.ajax({
        url: "documentos/menu2.xml",
        success: function (xml) {
            $(xml).find("inicio").each(function () {
                var aba = '<a href='+ $(this).attr("link")+'>' + $(this).text() + '</a></br>';
                $("#menu").append(aba);   
            
            });           
                        
        },

        error: function () {
            alert("Mensagem de erro.");
        }
    });
}

function criarCardapio(){
    $.getJSON("documentos/cardapio.json", function(criar){
        item = criar.bolos;

        criarMain();


    });
}

function criarMain(){
    $.getJSON("documentos/cardapio.json", function(criar){

        for (i = 0; i < item.length; i++){  

            
            var novo = `<div id = ${ criar.bolos[i].classe }> 
            <img src = ${ criar.bolos[i].img } class = ${ criar.bolos[i].boli} > 
            <p class = "produto"> ${ criar.bolos[i].nome } </br> Valor : R$ ${ criar.bolos[i].valor } </p>
            <button onclick="salvarItem('${criar.bolos[i].nome}',${criar.bolos[i].valor})" id="btn${ criar.bolos[i].classe }">Comprar</button>
            </div>`; 

            $('#loja').append(novo);
         

        }
    });    

}

function criarCarrinho(){
    $.getJSON("documentos/cardapio.json", function(comprar){

        var nome = sessionStorage.getItem("nome");
        var valor = sessionStorage.getItem("valor")
    
        var itemCompra =  '<p>' + nome + '</p>';

          
        $('#itnNovo').append(itemCompra); 





    });    
    

    
      
    

         


}


