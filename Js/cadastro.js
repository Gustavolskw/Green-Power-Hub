import isCpf from "./validaCpf.js";
import { login } from "./login.js";

const formulario = document.getElementById("cadastroUser");
const nomeField = document.getElementById("formName");
const emailField = document.getElementById("formEmailCad");
const cpfField = document.getElementById("formCpf");
const senhaField = document.getElementById("formSenha");
const senhaConfField = document.getElementById("formSenhaConf");
const btnEnvio = document.getElementById("btnLogin");
const campos = document.querySelectorAll("#cadastroUser input");
/*errors*/
const nomeError = document.getElementById("nomeError");
const emailError = document.getElementById("emailError");
const cpfError = document.getElementById("cpfError");
const senhaError = document.getElementById("senhaError");
const confirmaSenhaError = document.getElementById("confirmaSenhaError");






export const cadastro = {
    salvaUsuario: (dados) => {
        console.log(dados);
        localStorage.setItem("cadastro", JSON.stringify(dados));

    },
    enviaDados: (event) => {
        event.preventDefault();
        if (!cadastro.validaNome() || !cadastro.validaEmail() || !cadastro.validaCpf() || !cadastro.validaSenha() || !cadastro.validaConfSenha()) {
            return;
        }
        const adminUser = JSON.parse(localStorage.getItem("admin"));
        if (adminUser.email.trim() === emailField.value.trim()) {
            alert("Erro ao Registrar seu usuario, credênciais Invalidas!")
            formulario.reset();
            return
        }


        const listaRespostas = {
            userName: nomeField.value,
            email: emailField.value,
            cpf: cpfField.value,
            password: senhaField.value,
        }

        cadastro.salvaUsuario(listaRespostas)
        formulario.reset();

        if (!login.validaUser(listaRespostas)) {
            return;
        }
        window.location.href = "/";
    },
    validaNome: () => {
        if (nomeField.value.trim() == "") {
            nomeError.innerText = "Nome deve ser prenchido!"
            nomeField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return false;
        }
        nomeError.innerText = ""
        nomeField.classList.remove("is-invalid");
        btnEnvio.disabled = false;
        return true;
    },
    validaCpf: () => {
        let cpf = document.getElementById("formCpf").value.trim();
        cpf = cpf.replace(/\D/g, "");
        if (cpf.length !== 11) {
            cpfError.innerText = `Numero de Caracteres do Cpf não atende aos requesitos!`
            cpfField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return false;
        }

        console.log(isCpf(cpf));
        if (!isCpf(cpf)) {
            cpfError.innerText = `Cpf Enviado Inválido!`;
            cpfField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return false;
        }
        cpfError.innerText = ""
        cpfField.classList.remove("is-invalid");
        btnEnvio.disabled = false;
        return true;
    },
    validaConfSenha: () => {
        if (senhaConfField.value.trim() == "") {
            confirmaSenhaError.innerText = `Confirmação de senha deve ser Preenchida!`
            senhaConfField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return false;
        }
        if (senhaConfField.value != senhaField.value) {
            confirmaSenhaError.innerText = `Confirmação de senha deve ser igual a senha!`
            senhaConfField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return false;
        }
        confirmaSenhaError.innerText = ``
        senhaConfField.classList.remove("is-invalid");
        btnEnvio.disabled = false;
        return true;
    },
    validaSenha: () => {
        if (senhaField.value.trim() == "") {
            senhaError.innerText = `Senha deve ser preenchida!`
            senhaField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return;
        }
        if (senhaField.value.trim() < 5) {
            senhaError.innerText = `Senha deve conter mais de 4 caracteres!`
            senhaField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return false;
        }
        senhaError.innerText = ``
        senhaField.classList.remove("is-invalid");
        btnEnvio.disabled = false;
        return true;
    },
    validaEmail() {
        if (emailField.value.trim() == "") {
            emailError.innerText = "Email deve ser preenchido!"
            emailField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailError.innerText = "Email deve ser válido!"
            emailField.classList.add("is-invalid");
            btnEnvio.disabled = true;
            return false;
        }
        emailField.classList.remove("is-invalid");
        emailError.innerText = ""
        btnEnvio.disabled = false;
        return true;
    },
    formataCpf: () => {
        btnEnvio.disabled = false;
        cpfField.classList.remove("is-invalid");
        let cpf = document.getElementById("formCpf").value;

        cpf = cpf.replace(/\D/g, "");

        if (cpf.length > 11) {
            cpf = cpf.substring(0, 11);
        }
        cpf = cpf.replace(/^(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{2})$/, "$1.$2.$3-$4");

        document.getElementById("formCpf").value = cpf;
    },
    onChangeEmail: () => {
        emailError.innerText = ``
        emailField.classList.remove("is-invalid");
        btnEnvio.disabled = false;
    },
    onChangeNome: () => {
        nomeError.innerText = ""
        nomeField.classList.remove("is-invalid");
        btnEnvio.disabled = false;
    },
    onChangeSenha: () => {
        senhaError.innerText = "";
        senhaField.classList.remove("is-invalid");
        btnEnvio.disabled = false;
    },
    onChangeSenhaConf: () => {
        senhaConfField.classList.remove("is-invalid");
        confirmaSenhaError.innerText = "";
        btnEnvio.disabled = false;
    }
}


formulario.addEventListener("submit", cadastro.enviaDados);
cpfField.addEventListener("input", cadastro.formataCpf);
emailField.addEventListener("input", cadastro.onChangeEmail);
nomeField.addEventListener("input", cadastro.onChangeNome);
senhaConfField.addEventListener("input", cadastro.onChangeSenhaConf);
senhaField.addEventListener("input", cadastro.onChangeSenha)
