
const images = [
    {
        title: "Baterias Inteligentes",
        src: "Batweria inteligente Chinesa.jpg",
        text: "Sistemas de armazenamento de energia que guardam o excesso gerado por fontes solares e eólicas para uso posterior. Essas baterias utilizam algoritmos inteligentes para otimizar o carregamento e descarregamento.",
        link: "baterias",
        not: 0
    },
    {
        title: "Turbinas Eólicas",
        src: "Turbinas Eolicas.jpg",
        text: "Geradores de energia que convertem a força do vento em eletricidade. Podem complementar a energia solar, principalmente em locais onde há ventos constantes.",
        link: "eolica-ener",
        not: 1
    },
    {
        title: "Placas Solares ",
        src: "Plataformas solars Oceano chines.jpeg",
        text: "Painéis fotovoltaicos responsáveis por converter a luz solar em eletricidade. Essa energia pode ser usada imediatamente ou armazenada em baterias para uso futuro.",
        link: "solar-ener",
        not: 0
    },
    {
        title: "Microreatores Modulares",
        src: "Tech Nucelar.jpg",
        text: "Pequenos reatores nucleares seguros e autônomos, projetados para operar continuamente e fornecer energia estável para a microgrid quando a energia solar ou eólica não for suficiente.",
        link: "nuclear-ener",
        not: 0
    },
    {
        title: "Tecnologia de Enriquecimento de Urânio no Brasil",
        src: "Angra-3-qlt.jpeg",
        text: "O Brasil é um dos poucos países do mundo com capacidade tecnológica para o enriquecimento de urânio, um processo essencial para a geração de energia nuclear.",
        link: "uranio",
        not: 1
    },
    {
        title: "Biogás e Biomassa: Energia Renovável a partir de Resíduos",
        src: "biomassa-energia-vantagens.jpg",
        text: "O Brasil, sendo um dos maiores produtores agropecuários do mundo, gera uma enorme quantidade de resíduos orgânicos que podem ser convertidos em energia limpa. ",
        link: "biogas",
        not: 1
    },
    {
        title: "Hidrogênio Verde: O Combustível do Futuro no Brasil",
        src: "hidrogenio-verde-card.jpg",
        text: "O Brasil é um dos poucos países do mundo com capacidade tecnológica para o enriquecimento de urânio, um processo essencial para a geração de energia nuclear.",
        link: "hidro-verde",
        not: 0
    }
]

export const mainPage = {

    cardsLoaderSection: () => {

        let cardSector = ""

        images.forEach(image => {
            cardSector +=
                `<div id="card-item" class="card" style="width: 18rem;">
                    <img src="../Imgs/${image.src}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${image.title}</h5>
                        <p class="card-text">${image.text}</p>
                        <div class="d-flex justify-content-center">
                            <a class="btn button-interativo" href="../Pages/temas/index.html?tema=${image.link}">Visitar Artigo</a>
                        </div>
                    </div>
                </div>`
        })
        const cardSection = document.getElementById("cards");
        if (cardSection) {
            cardSection.innerHTML = cardSector;
        }
    },
    carrosel: () => {
        const carrsel = document.getElementById("carrousel-items")

        let carroselItesmEl = "";

        for (let i = 0; i < images.length; i++) {
            if (images[i].not == 0) {
                carroselItesmEl +=
                    `<div class="carousel-item ${i === 0 ? 'active' : ''}">
                        <img  src="./Imgs/${images[i].src}" class="d-block w-100 carrousel-img" alt="...">
                    </div>`;
            }
        }
        carrsel.innerHTML += carroselItesmEl;
    }



}



