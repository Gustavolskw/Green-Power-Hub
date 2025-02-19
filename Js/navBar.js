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
            console.log(tema);
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
        console.log(user);
        let loginSector = "";
        if (user.userLogged = false || user.userLogged == null) {
            loginSector += `<a class="btn button-login" href="${basePath}Pages/login/index.html" > Login</a > `;

        } else {
            loginSector += `
                <div class="d-flex align-items-end gap-2 pe-5 sector-user-on" >
                    <img class="img-user" src="${basePath}assets/energia-verde.png" alt="imagem do user">
                        <div class="dropdown align-items-center div-cont-user-on">
                            <a class="text-decoration-none text-white fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                ${user.userName}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-start ">
                                <li>
                                    <button id="logoutButton" class="dropdown-item btn">Logoff</button>
                                </li>
                            </ul>
                        </div>
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
    navBar.listagemDeTemas();
    navBar.userAuthSection();
});


