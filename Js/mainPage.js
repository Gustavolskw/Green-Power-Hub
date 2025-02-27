
const images = [
    {
        title: "Baterias Inteligentes",
        src: "Batweria inteligente Chinesa.jpg",
        link: "baterias",
        not: 0
    },
    {
        title: "Turbinas Eólicas",
        src: "Turbinas Eolicas.jpg",
        link: "eolica-ener",
        not: 1
    },
    {
        title: "Placas Solares ",
        src: "Plataformas solars Oceano chines.jpeg",
        link: "solar-ener",
        not: 0
    },
    {
        title: "Microreatores Modulares",
        src: "Tech Nucelar.jpg",
        link: "nuclear-ener",
        not: 0
    },
    {
        title: "Tecnologia de Enriquecimento de Urânio no Brasil",
        src: "Angra-3-qlt.jpeg",
        link: "uranio",
        not: 1
    },
    {
        title: "Biogás e Biomassa: Energia Renovável a partir de Resíduos",
        src: "biomassa-energia-vantagens.jpg",
        link: "biogas",
        not: 1
    },
    {
        title: "Hidrogênio Verde: O Combustível do Futuro no Brasil",
        src: "hidrogenio-verde-card.jpg",
        link: "hidro-verde",
        not: 1
    }
]

export const mainPage = {

    cardsLoaderSection: () => {

        let cardSector = ""

        images.forEach(image => {
            cardSector +=
                `<div id="card-item" class="card col-2" style="width: 18rem;">
                    <img src="../Imgs/${image.src}" class="card-img-top h-100 w-100" alt="...">
                    <div class="card-body h-100 align-content-center">
                        <h5 class="card-title fw-bold text-center">${image.title}</h5>
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





