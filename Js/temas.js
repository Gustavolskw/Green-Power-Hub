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
            processo: "O enriquecimento de urânio é a etapa em que se aumenta a concentração do isótopo físsil U-235, fundamental para reatores nucleares. No Brasil, esse processo é realizado pela Indústrias Nucleares do Brasil (INB), utilizando tecnologia nacional baseada em ultracentrifugação, uma técnica eficiente e de baixo consumo energético.",
            beneficios: ["<span class='fw-bold'>Autossuficiência Energética:</span> Com tecnologia própria, o Brasil reduz a dependência externa para o abastecimento de suas usinas nucleares.",
                "<span class='fw-bold'>Segurança e Controle:</span> O domínio dessa tecnologia fortalece a segurança energética e permite um controle mais rigoroso sobre os processos de produção de combustível nuclear.",
                "<span class='fw-bold'>Expansão da Energia Nuclear:</span> A capacidade de enriquecer urânio pode viabilizar novos projetos de usinas nucleares no Brasil, como a ampliação do complexo de Angra e futuras iniciativas.",
            ],
            desafios: ["Apesar do grande potencial, o setor enfrenta desafios, como altos custos de implementação e regulamentações rigorosas. No entanto, a energia nuclear se apresenta como uma alternativa essencial para diversificação da matriz energética e redução da emissão de carbono.",
            ],
            images: ["Enriquecimento-de-Uranio.jpg", "Uranio235.jpg"],
            video: "NuclearPlantUranuim.mp4",
            impacto: "Com investimentos em inovação e segurança, a energia nuclear pode contribuir para um futuro mais sustentável, garantindo uma fonte limpa e confiável de eletricidade para o Brasil. A tecnologia de enriquecimento de urânio fortalece o papel do país na geopolítica energética e abre caminho para novas possibilidades na exploração e uso pacífico da energia nuclear."

        }
    };

    if (temas[tema]) {
        const dadosTema = temas[tema];

        // Atualiza os elementos da página
        document.getElementById("titulo-tema").innerText = dadosTema.titulo;
        document.getElementById("introducao-tema").innerText = dadosTema.introducao;
        document.getElementById("imapcto-texto").innerText = dadosTema.impacto;

        // Adiciona o vídeo
        const videoContainer = document.getElementById("video");
        videoContainer.innerHTML = `
            <video src="../../Imgs/${dadosTema.video}" class="video-tema" muted loop autoplay playsinline></video>
        `;

        // Adiciona imagens
        const imagensContainer = document.getElementById("imagens-tema");
        imagensContainer.innerHTML = "";
        dadosTema.images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.className = "imagem-tema";
            imgElement.src = `../../Imgs/${image}`;
            imgElement.alt = `Imagem do tema: ${dadosTema.titulo}`;
            imagensContainer.appendChild(imgElement);
        });

        // Adiciona Benefícios
        const beneficiosLista = document.getElementById("beneficios");
        beneficiosLista.innerHTML = "";
        dadosTema.beneficios.forEach(beneficio => {
            const li = document.createElement("li");
            li.className = "texto-part-tema";
            li.innerHTML = beneficio;
            beneficiosLista.appendChild(li);
        });

        // Adiciona Desafios
        const desafiosLista = document.getElementById("desafios");
        desafiosLista.innerHTML = "";
        dadosTema.desafios.forEach(desafio => {
            const li = document.createElement("li");
            li.className = "texto-part-tema";
            li.innerHTML = desafio;
            desafiosLista.appendChild(li);
        });

    } else {
        document.getElementById("contet-section-tema").innerHTML = `
            <h2 class="text-white text-center">Tema não encontrado</h2>
        `;
    }
}


