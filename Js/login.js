const email = document.querySelector("#formEmail");
const senha = document.querySelector("#formSenha");
const botao = document.querySelector("#btnLogin");
const formLogin = document.getElementById("loginUser");

const emailError = document.getElementById("emailError");
const senhaError = document.getElementById("senhaError");
const loginError = document.getElementById("loginError");






export const login = {
    validaUser: (user) => {
        const fixedUser = JSON.parse(localStorage.getItem("admin")) || null;
        const cadastradoUser = JSON.parse(localStorage.getItem("cadastro")) || null;

        if (fixedUser && user.email === fixedUser.email && user.password === fixedUser.password) {
            login.registerUserSess(fixedUser.userName);
            return true;
        }

        if (cadastradoUser && user.email === cadastradoUser.email && user.password === cadastradoUser.password) {
            login.registerUserSess(cadastradoUser.userName);
            return true;
        }

        return false;
    },

    validaFormulario: () => {
        senha.classList.remove("is-invalid");
        email.classList.remove("is-invalid");
        botao.disabled = false;

        if (senha.value.trim() === "") {
            senhaError.innerText = "O campo Senha é obrigatório.";
            senha.classList.add("is-invalid");
            botao.disabled = true;
        }
        if (senha.value.trim().length < 4) {
            senhaError.innerText = "A senha deve conter mais de 4 dígitos!";
            senha.classList.add("is-invalid");
            botao.disabled = true;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            emailError.innerText = "O email inserido não é válido.";
            email.classList.add("is-invalid");
            botao.disabled = true;
        }

        return true;
    },

    registerUserSess: (userName) => {
        localStorage.setItem("user", userName);
        localStorage.setItem("userLogged", "true");
        localStorage.setItem("logonDate", Date.now().toString());
    },

    enviarDadosDeLogin: (event) => {
        event.preventDefault();
        loginError.innerText = "";

        if (!login.validaFormulario()) {
            loginError.innerText = "Erro de Validação de Formulário";
            return;
        }

        const dados = {
            email: email.value.trim(),
            password: senha.value.trim()
        };

        if (!login.validaUser(dados)) {
            loginError.innerText = "Dados de usuário inválidos";
            formLogin.reset();
            return;
        }

        formLogin.reset();

        window.location.href = "/";
    },

    resetEmailError: () => {
        email.classList.remove("is-invalid");
        loginError.innerText = "";
        emailError.innerText = "";
        botao.disabled = false;
    },

    resetSenhaError: () => {
        senha.classList.remove("is-invalid");
        loginError.innerText = "";
        senhaError.innerText = "";
        botao.disabled = false;
    }
};

if (window.location.pathname.includes("/Pages/login")) {
    email.addEventListener("input", login.resetEmailError);
    senha.addEventListener("input", login.resetSenhaError);
    formLogin.addEventListener("submit", login.enviarDadosDeLogin);
}



