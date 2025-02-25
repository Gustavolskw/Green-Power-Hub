document.addEventListener("DOMContentLoaded", () => {
    carregarDadosDoTema();
});

function carregarDadosDoTema() {
    const urlParams = new URLSearchParams(window.location.search);
    const tema = urlParams.get("tema");

    const temas = {
        "solar-ener": {
            titulo: "Energia Solar: A Revolução da Sustentabilidade",
            introducao: "A energia solar é uma das principais fontes de energia renovável e tem se tornado cada vez mais popular devido à sua acessibilidade e impacto ambiental reduzido. Utilizando painéis fotovoltaicos para converter a luz do sol em eletricidade, essa tecnologia é fundamental para a transição energética global.",
            processo: "",
            imagemProcesso: "",
            beneficios: ["<span class='fw-bold'>Fonte Inesgotável:</span>  O sol é uma fonte de energia abundante e gratuita.",
                "<span class='fw-bold'>Baixo Impacto Ambiental:</span> Reduz a pegada de carbono ao substituir combustíveis fósseis.",
                "<span class='fw-bold'>Autossuficiência Energética:</span>  Permite que residências e empresas gerem sua própria eletricidade.",
                "<span class='fw-bold'>Baixa Manutenção:</span> Os painéis solares têm vida útil superior a 25 anos."
            ],
            desafios: ["<span class='fw-bold'>Custo Inicial:</span> O investimento inicial pode ser elevado, apesar da redução progressiva dos preços.",
                "<span class='fw-bold'>Dependência do Clima:</span> Geração reduzida em dias nublados ou chuvosos.",
                "<span class='fw-bold'>Necessidade de Armazenamento:</span> Baterias são necessárias para uso noturno."
            ],
            images: ["Plataformas solars Oceano chines.jpeg", "Plataformas Solares.jpg"],
            video: "SOlar_energy.mp4",
            impacto: "A energia solar é uma alternativa crucial para reduzir emissões de gases de efeito estufa e mitigar os impactos das mudanças climáticas, contribuindo para um futuro mais limpo e eficiente."
        },
        "eolica-ener": {
            titulo: "Energia Eólica: O Poder do Vento na Geração de Eletricidade",
            introducao: "A energia eólica é uma das formas mais eficientes de geração de eletricidade renovável. Utilizando turbinas para converter a energia cinética do vento em eletricidade, essa tecnologia tem crescido significativamente no mundo.",
            processo: "",
            imagemProcesso: "",
            beneficios: ["<span class='fw-bold'>Baixa Emissão de Carbono:</span> Não gera poluição durante a operação.",
                "<span class='fw-bold'>Disponibilidade Constante: </span>Pode operar durante o dia e a noite.",
                "<span class='fw-bold'>Eficiência em Grandes Escalas:</span> Parques eólicos podem abastecer cidades inteiras.",
                "<span class='fw-bold'>Baixo Custo Operacional:</span> Após instalado, tem custos reduzidos de manutenção."
            ],
            desafios: ["<span class='fw-bold'>Intermitência:</span> Depende da intensidade do vento, podendo necessitar complementação com outras fontes.",
                "<span class='fw-bold'>Impacto Visual e Sonoro:</span> Algumas pessoas consideram as turbinas eólicas intrusivas.",
                "<span class='fw-bold'>Uso de Espaço:</span> Grandes parques eólicos exigem vastas áreas."
            ],
            images: ["Turbina Eolica .jpg", "Turbinas Eolicas.jpg"],
            video: "EolicEnergy.mp4",
            impacto: "Com uma pegada ambiental reduzida e alta capacidade de geração, a energia eólica é essencial para a diversificação da matriz energética e a descarbonização do setor elétrico."

        },
        "nuclear-ener": {
            titulo: "Energia Nuclear: Uma Fonte Limpa e Segura para o Futuro",
            introducao: "Apesar das controvérsias, a energia nuclear é uma das fontes mais eficientes e confiáveis de eletricidade. Utilizando a fissiona nuclear para gerar calor e movimentar turbinas, essa tecnologia fornece eletricidade limpa e estável.",
            processo: "",
            imagemProcesso: "",
            beneficios: ["<span class='fw-bold'>Alta Eficiência:</span> Pequenas quantidades de urânio geram grandes volumes de energia.",
                "<span class='fw-bold'>Geração Contínua:</span> Não depende de fatores climáticos.",
                "<span class='fw-bold'>Baixa Emissão de CO2: </span>Comparável a fontes renováveis em termos de impacto ambiental.",
                "<span class='fw-bold'>Estabilidade da Rede Elétrica:</span> Ajuda a manter a segurança energética em grande escala."
            ],
            desafios: ["<span class='fw-bold'>Resíduos Radioativos:</span> O descarte seguro do lixo nuclear é um desafio.",
                "<span class='fw-bold'>Altos Custos Iniciais:</span> Construção e manutenção são caras.",
                "<span class='fw-bold'>Preocupações com Segurança:</span> Necessidade de altos padrões de segurança para evitar acidentes."
            ],
            images: ["Fabrica Nucelar.png", "Planta nuclear.jpg"],
            video: "Nucelar_fabrik.mp4",
            impacto: "Com a evolução dos microreatores modulares e melhores tecnologias de segurança, a energia nuclear tem potencial para ser uma das soluções mais viáveis para a demanda energética global com baixas emissões de carbono."

        },
        "baterias": {
            titulo: "Baterias Inteligentes: Armazenando Energia para um Mundo Sustentável",
            introducao: "Com o crescimento das energias renováveis, as baterias inteligentes desempenham um papel crucial no armazenamento de eletricidade e na estabilidade da rede elétrica.",
            processo: "",
            beneficios: ["<span class='fw-bold'>Otimiza o Uso de Energias Renováveis:</span> Permite armazenar o excesso de energia solar e eólica para uso posterior.",
                "<span class='fw-bold'>Reduz Custos de Energia:</span> Armazena eletricidade quando os preços são baixos e libera quando estão altos.",
                "<span class='fw-bold'>Maior Autossuficiência:</span> Residências e empresas podem operar independentemente da rede elétrica.",
                "<span class='fw-bold'>Integração com IoT e IA:</span> Sistemas inteligentes otimizam a distribuição da energia."
            ],
            desafios: ["<span class='fw-bold'>Custo das Baterias:</span> Preços ainda elevados, apesar da queda progressiva.",
                "<span class='fw-bold'>Vida Útil Limitada:</span> Algumas tecnologias degradam ao longo do tempo.",
                "<span class='fw-bold'>Impacto Ambiental na Produção:</span> Extração de lítio e outros metais pode ser prejudicial."
            ],
            images: ["Batweria convencional.jpg", "Batweria inteligente Chinesa.jpg"],
            video: "Bateria .mp4",
            impacto: "Com avanços em baterias de lítio, sódio e hidrogênio, o armazenamento de energia está evoluindo para se tornar mais eficiente e sustentável, facilitando a transição para um futuro energético mais limpo."

        },
        "uranio": {
            titulo: "Tecnologia de Enriquecimento de Urânio no Brasil: O Potencial da Energia Nuclear",
            introducao: "O Brasil é um dos poucos países do mundo com capacidade tecnológica para o enriquecimento de urânio, um processo essencial para a geração de energia nuclear. Com grandes reservas de urânio e tecnologia própria de enriquecimento, o país se destaca no setor nuclear e tem potencial para expandir sua matriz energética de forma segura e sustentável.",
            processo: ["O enriquecimento de urânio é a etapa em que se aumenta a concentração do isótopo físsil U-235, fundamental para reatores nucleares. No Brasil, esse processo é realizado pela Indústrias Nucleares do Brasil (INB), utilizando tecnologia nacional baseada em ultracentrifugação, uma técnica eficiente e de baixo consumo energético.",],
            imagemProcesso: "Enriquecimento-de-Uranio.jpg",
            beneficios: ["<span class='fw-bold'>Autossuficiência Energética:</span> Com tecnologia própria, o Brasil reduz a dependência externa para o abastecimento de suas usinas nucleares.",
                "<span class='fw-bold'>Segurança e Controle:</span> O domínio dessa tecnologia fortalece a segurança energética e permite um controle mais rigoroso sobre os processos de produção de combustível nuclear.",
                "<span class='fw-bold'>Expansão da Energia Nuclear:</span> A capacidade de enriquecer urânio pode viabilizar novos projetos de usinas nucleares no Brasil, como a ampliação do complexo de Angra e futuras iniciativas.",
            ],
            desafios: ["Apesar do grande potencial, o setor enfrenta desafios, como altos custos de implementação e regulamentações rigorosas. No entanto, a energia nuclear se apresenta como uma alternativa essencial para diversificação da matriz energética e redução da emissão de carbono.",
            ],
            images: ["Uranioi-imagem-metal.jpg", "Uranio235.jpg"],
            video: "NuclearPlantUranuim.mp4",
            impacto: "Com investimentos em inovação e segurança, a energia nuclear pode contribuir para um futuro mais sustentável, garantindo uma fonte limpa e confiável de eletricidade para o Brasil. A tecnologia de enriquecimento de urânio fortalece o papel do país na geopolítica energética e abre caminho para novas possibilidades na exploração e uso pacífico da energia nuclear."

        },
        "biogas": {
            titulo: "Biogás e Biomassa: Energia Renovável a partir de Resíduos",
            introducao: "O Brasil, sendo um dos maiores produtores agropecuários do mundo, gera uma enorme quantidade de resíduos orgânicos que podem ser convertidos em energia limpa. O biogás e a biomassa surgem como soluções sustentáveis para transformar esses resíduos em eletricidade, calor e combustível, reduzindo a dependência de fontes fósseis e minimizando impactos ambientais.",
            processo: [
                "<span class='fw-bold'>Biogás: </span>Um gás renovável produzido pela decomposição de matéria orgânica, como esterco, resíduos agrícolas, lixo orgânico e esgoto. Ele é rico em metano (CH4), podendo ser utilizado para geração de eletricidade e combustível.",
                "<span class='fw-bold'>Biomassa: </span>Material orgânico proveniente de fontes renováveis, como restos de madeira, bagaço de cana-de-açúcar e resíduos agrícolas, que pode ser queimado ou processado para gerar energia térmica e elétrica."

            ],
            imagemProcesso: "biogas-processo.png",
            beneficios: ["<span class='fw-bold'>Aproveitamento de resíduos:</span> Reduz a poluição e promove a economia circular.",
                "<span class='fw-bold'>Redução das emissões de gases de efeito estufa:</span> Substitui combustíveis fósseis, diminuindo a liberação de CO₂.",
                "<span class='fw-bold'>Geração descentralizada de energia: </span>Pode ser implantada em pequenas propriedades rurais e indústrias.",
                "<span class='fw-bold'>Autossuficiência energética: </span>Permite a produção local de energia, reduzindo custos.",
            ],
            desafios: ["Apesar do grande potencial, o biogás e a biomassa ainda enfrentam desafios como altos custos iniciais e a necessidade de infraestrutura adequada. No entanto, políticas públicas e incentivos podem estimular a adoção dessa tecnologia, ampliando sua contribuição para a matriz energética brasileira."
            ],
            images: ["ciclo-da-biomassa.jpg", "ciclo-geracao-biogas.jpg"],
            video: "BioGas.mp4",

            impacto: "Com investimentos e inovação, o Brasil pode consolidar-se como líder na produção de biogás e biomassa, garantindo uma fonte de energia renovável que aproveita resíduos e reduz impactos ambientais."

        },
        "hidro-verde": {
            titulo: "Hidrogênio Verde: O Combustível do Futuro no Brasil",
            introducao: "O hidrogênio verde tem sido apontado como um dos combustíveis do futuro, essencial para a descarbonização da economia global. Produzido a partir de fontes renováveis como a energia solar e eólica, ele pode ser utilizado na indústria, transportes e geração de eletricidade. O Brasil, com sua vasta disponibilidade de energia limpa, tem grande potencial para se tornar um líder na produção e exportação de hidrogênio verde.",
            processo: ["O hidrogênio verde é produzido por meio da eletrólise da água, um processo que utiliza eletricidade renovável para separar o hidrogênio do oxigênio. Diferente do hidrogênio cinza (derivado de combustíveis fósseis) e do hidrogênio azul (que utiliza captura de carbono), o hidrogênio verde não emite gases de efeito estufa, sendo totalmente sustentável."],
            imagemProcesso: "Hidrogenio-verde-processo.jpg",
            beneficios: ["<span class='fw-bold'>Zero emissões de carbono: </span>Ajuda na transição para uma economia limpa.",
                "<span class='fw-bold'>Armazenamento de energia: </span>Pode ser usado para armazenar o excesso de eletricidade renovável.",
                "<span class='fw-bold'>Versatilidade: </span>Aplicável na indústria, transporte pesado e geração de energia.",
                "<span class='fw-bold'>Potencial de exportação: </span>O Brasil pode se tornar um grande fornecedor global de hidrogênio verde.",
            ],
            desafios: ["Os desafios incluem os altos custos de produção e a necessidade de infraestrutura específica para transporte e armazenamento. Entretanto, investimentos e parcerias internacionais podem acelerar o desenvolvimento dessa tecnologia no Brasil.",
            ],
            images: ["hidrogenio-verde.jpg", "hidrogenio-verde_silo.jpg"],
            video: "Hidrogenio-verde-agua.mp4",
            impacto: "O hidrogênio verde pode desempenhar um papel fundamental na transição energética global, ajudando o Brasil a reduzir sua dependência de combustíveis fósseis e se consolidar como um líder na nova economia de baixo carbono."

        }
    };

    if (temas[tema]) {
        const dadosTema = temas[tema];

        document.getElementById("titulo-tema").innerText = dadosTema.titulo;
        document.getElementById("introducao-tema").innerText = dadosTema.introducao;
        document.getElementById("imapcto-texto").innerText = dadosTema.impacto;

        const videoContainer = document.getElementById("video");
        videoContainer.innerHTML = `
            <video src="../../Imgs/${dadosTema.video}" class="video-tema" muted loop autoplay playsinline></video>
        `;

        const processoQuery = document.getElementById("processo");
        const listaProcesos = document.getElementById("lista-processos");
        const imagemProcesso = document.getElementById("img-processo");


        listaProcesos.innerHTML = "";
        if (dadosTema.processo != "") {

            dadosTema.processo.forEach(proceso => {
                const processosDoTema = `<li class="texto-part-tema px-5">${proceso}</li>`
                listaProcesos.innerHTML += processosDoTema;
            })
            imagemProcesso.innerHTML = `<img src="../../Imgs/${dadosTema.imagemProcesso}" class="imagem-tema" atl="Imagem do tema: ${dadosTema.titulo}">`;
        } else {
            processoQuery.classList.add("d-none");
            imagemProcesso.classList.add("d-none");

        }



        const imagemBeneficio = document.getElementById("img-beneficio");
        const imagemDesafio = document.getElementById("img-desafio");

        imagemBeneficio.innerHTML = `<img src="../../Imgs/${dadosTema.images[0]}" class="imagem-tema" atl="Imagem do tema: ${dadosTema.titulo}">`;
        imagemDesafio.innerHTML = `<img src="../../Imgs/${dadosTema.images[1]}" class="imagem-tema" atl="Imagem do tema: ${dadosTema.titulo}">`;

        const beneficiosLista = document.getElementById("beneficios");
        beneficiosLista.innerHTML = "";
        dadosTema.beneficios.forEach(beneficio => {
            const li = `<li class="texto-part-tema">${beneficio}</li>`;
            beneficiosLista.innerHTML += li;
        });

        const desafiosLista = document.getElementById("desafios");
        desafiosLista.innerHTML = "";
        dadosTema.desafios.forEach(desafio => {
            const li = `<li class="texto-part-tema">${desafio}</li>`;
            desafiosLista.innerHTML += li;
        });

    } else {
        document.getElementById("contet-section-tema").innerHTML = `
            <h2 class="text-white text-center">Tema não encontrado</h2>
        `;
    }
}


