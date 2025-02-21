const nomeContato = document.getElementById("formNomeCont");
const telefoneContato = document.getElementById("formTelefoneCont");
const emailContato = document.getElementById("formEmailCont");
const formularioContato = document.getElementById("addContato");
const contNomeError = document.getElementById("contNomeError");
const contTelError = document.getElementById("contTelError");
const contEmailError = document.getElementById("contEmailError");


export const contato = {
    validaFormulario: () => {
        nomeContato.classList.remove("is-invalid");
        emailContato.classList.remove("is-invalid");
        telefoneContato.classList.remove("is-invalid");

        if (nomeContato.value.trim() === "") {
            contNomeError.innerText = "O campo Nome é obrigatório.";
            nomeContato.classList.add("is-invalid");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailContato.value.trim())) {
            contEmailError.innerText = "O email inserido não é válido.";
            emailContato.classList.add("is-invalid");
            return false;
        }

        if (telefoneContato.value.trim().length < 10) {
            contTelError.innerText = "O telefone deve conter pelo menos 10 dígitos.";
            telefoneContato.classList.add("is-invalid");
            return false;
        }
        return true;
    },

    enviarDadosContato: (event) => {
        event.preventDefault();

        if (!contato.validaFormulario()) {
            return;
        }

        const dados = {
            nome: nomeContato.value.trim(),
            email: emailContato.value.trim(),
            telefone: telefoneContato.value.trim()
        };

        alert("Contato enviado com sucesso!");
        document.getElementById("addContato").reset();
    },

    formataTelefone: () => {
        let telefone = telefoneContato.value;

        telefone = telefone.replace(/\D/g, "");

        if (telefone.length === 11) {
            telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        } else if (telefone.length === 10) {
            telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
        }

        telefoneContato.value = telefone;
    },
    onchangeName: () => {
        contNomeError.innerText = "";
        nomeContato.classList.remove("is-invalid");
    },
    onChangeEmail: () => {
        contEmailError.innerText = "";
        emailContato.classList.remove("is-invalid");
    }
};

telefoneContato.addEventListener("input", contato.formataTelefone);
formularioContato.addEventListener("submit", contato.enviarDadosContato);
emailContato.addEventListener("input", contato.onChangeEmail);
nomeContato.addEventListener("input", contato.onchangeName)

