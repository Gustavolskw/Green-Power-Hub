let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navBar");
    if (window.scrollY > lastScrollY) {
        navbar.classList.add("nav-hide"); // Esconde ao rolar para baixo
    } else {
        navbar.classList.remove("nav-hide"); // Mostra ao rolar para cima
    }
    lastScrollY = window.scrollY;
});

const temasImportantesList = {
    "solar-ener": {
        titulo: "Energia Solar"
    },
    "eolica-ener": {
        titulo: "Energia Eólica"
    },
    "nuclear-ener": {
        titulo: "Energia Nuclear"
    },
    "baterias": {
        titulo: "Baterias Inteligentes"
    },
    "uranio": {
        titulo: "Enriquecimento de Urânio no Brasil"
    },
    "biogas": {
        titulo: "Biogás e Biomassa"
    },
    "hidro-verde": {
        titulo: "Hidrogênio Verde"
    }
};
let basePath = window.location.pathname.includes("/Pages/") ? '../../' : './';

export const navBar = {
    listagemDeTemas: () => {
        let listaTemasInsert = ``;
        Object.keys(temasImportantesList).forEach(tema => {
            listaTemasInsert += `
            <li>
                <a
                class="dropdown-item btn" href="${basePath}Pages/temas/index.html?tema=${tema}"
                >${temasImportantesList[tema].titulo}
                </a>
            </li>`;
        });

        const temasImportantes = document.getElementById("temas-importantes");
        temasImportantes.innerHTML = listaTemasInsert;
    },
    userAuthSection: () => {
        const user = navBar.buscaUser();
        let loginSector = "";
        if (user.userLogged = false || user.userLogged == null) {
            loginSector = `<a class="btn button-login" href="${basePath}Pages/login/index.html" > Login</a > `;

        } else {
            loginSector = `
                        <div class="dropdown">
                            <a class=" img-container-user text-decoration-none text-white fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                               <img class="img-user" src="${basePath}assets/energia-verde.png" alt="imagem do user">
                            </a>
                            <ul class="dropdown-menu dropdown-menu-start">
                             <p class="text-center fw-bold">${user.userName}</p>
                                <li>
                                    <button id="logoutButton" class="dropdown-item btn">Logout</button>
                                </li>
                            </ul>
                        </div>
                    
            `;
        }
        const loginSection = document.getElementById("login-section");
        if (loginSection) loginSection.innerHTML = loginSector;

        const logoutButton = document.getElementById("logoutButton");
        if (logoutButton) {
            logoutButton.addEventListener("click", navBar.logoff);
        }

    },
    logoff: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userLogged");
        localStorage.removeItem("logonDate");
        navBar.userAuthSection();
        window.location.reload();
    },
    buscaUser: () => {
        const userOnSession = {
            userName: localStorage.getItem("user"),
            userLogged: localStorage.getItem("userLogged"),
            logonDate: localStorage.getItem("logonDate")
        }
        return userOnSession;
    }
}

window.logoff = navBar.logoff;

document.addEventListener("DOMContentLoaded", () => {

});

if (!window.location.pathname.includes("/Pages/login/")) {
    navBar.listagemDeTemas();
    navBar.userAuthSection();
}

