import { navBar } from "./navBar.js";
import { mainPage } from "./mainPage.js";



document.addEventListener("DOMContentLoaded", function () {
    navBar.listagemDeTemas();
    navBar.userAuthSection();
    mainPage.carrosel();
    mainPage.cardsLoaderSection();
});


export const Main = {
    carregaTema: () => {

    }
}



/*
Main.carregaTema = function (tema) {
    $("#conteudo-principal").empty(); // Limpa o conteúdo atual da section
    $("#conteudo-principal").load("Pages/temas/index.html", function (response, status, info) {
        if (status == "error") {
            $("section").html("Houve um erro ao encontrar a página: " + info.status + " " + info.statusText);
        } else {
            // Quando a página for carregada, chamar a função para preencher os dados do tema
            Main.temas.carregarDadosDoTema(tema);
        }
    });
};*/