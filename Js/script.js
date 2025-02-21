import { navBar } from "./navBar.js";
import { mainPage } from "./mainPage.js";




document.addEventListener("DOMContentLoaded", function () {
    navBar.listagemDeTemas();
    navBar.userAuthSection();
    mainPage.carrosel();
    mainPage.cardsLoaderSection();
    Main.salvaAdminSessao();
});


export const Main = {
    salvaAdminSessao: () => {
        const fixedUser = {
            userName: "Administrador",
            email: "admin@email.com",
            password: "qwerty"
        };
        localStorage.setItem("admin", JSON.stringify(fixedUser));
    },

}
