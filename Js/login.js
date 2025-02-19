const users = [];

const fixedUser = {
    userName: "Administrador",
    email: "admin@email.com",
    password: "qwerty"
};

users.push(fixedUser);

export const login = {
    validaUser: (user) => {
        return user.email === fixedUser.email && user.password === fixedUser.password;
    },

    validaFormulario: () => {
        const email = document.querySelector("#formEmail");
        const senha = document.querySelector("#formSenha");
        const botao = document.querySelector("#btnLogin");
        let errors = [];

        senha.classList.remove("is-invalid");
        email.classList.remove("is-invalid");

        if (senha.value.trim() === "") {
            errors.push("O campo Senha é obrigatório.");
            senha.classList.add("is-invalid");
        }
        if (senha.value.trim().length < 4) {
            errors.push("A senha deve conter mais de 4 dígitos!");
            senha.classList.add("is-invalid");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            errors.push("O email inserido não é válido.");
            email.classList.add("is-invalid");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            botao.disabled = true;
            return false;
        }

        botao.disabled = false;
        return true;
    },

    registerUserSess: () => {
        localStorage.setItem("user", fixedUser.userName);
        localStorage.setItem("userLogged", "true");
        localStorage.setItem("logonDate", Date.now().toString());
    },

    enviarDadosDeLogin: (event) => {
        event.preventDefault();

        if (!login.validaFormulario()) {
            alert("Erro de Validação de Formulário");
            return;
        }

        const dados = {
            email: document.querySelector("#formEmail").value.trim(),
            password: document.querySelector("#formSenha").value.trim()
        };

        if (!login.validaUser(dados)) {
            alert("Dados de usuário inválidos");
            document.querySelector("#loginUser").reset();
            return;
        }

        document.querySelector("#loginUser").reset();
        login.registerUserSess();
        window.location.href = "/";
    },

    resetEmailError: () => {
        document.querySelector("#formEmail").classList.remove("is-invalid");
        document.querySelector("#btnLogin").disabled = false;
    },

    resetSenhaError: () => {
        document.querySelector("#formSenha").classList.remove("is-invalid");
        document.querySelector("#btnLogin").disabled = false;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#formEmail").addEventListener("input", login.resetEmailError);
    document.querySelector("#formSenha").addEventListener("input", login.resetSenhaError);
    document.querySelector("#loginUser").addEventListener("submit", login.enviarDadosDeLogin);
});
