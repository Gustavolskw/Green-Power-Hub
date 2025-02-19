export const contato = {
    validaFormulario: () => {
        const nome = document.getElementById("formNome");
        const email = document.getElementById("formEmail");
        const telefone = document.getElementById("formTelefone");
        let errors = [];

        nome.classList.remove("is-invalid");
        email.classList.remove("is-invalid");
        telefone.classList.remove("is-invalid");

        if (nome.value.trim() === "") {
            errors.push("O campo Nome é obrigatório.");
            nome.classList.add("is-invalid");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            errors.push("O email inserido não é válido.");
            email.classList.add("is-invalid");
        }

        if (telefone.value.trim().length < 10) {
            errors.push("O telefone deve conter pelo menos 10 dígitos.");
            telefone.classList.add("is-invalid");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }

        return true;
    },

    enviarDadosContato: (event) => {
        event.preventDefault();

        if (!contato.validaFormulario()) {
            alert("Erro de Validação de Formulário");
            return;
        }

        const dados = {
            nome: document.getElementById("formNome").value.trim(),
            email: document.getElementById("formEmail").value.trim(),
            telefone: document.getElementById("formTelefone").value.trim()
        };

        alert("Contato enviado com sucesso!");
        document.getElementById("addContato").reset();
    },

    formataTelefone: () => {
        let telefone = document.getElementById("formTelefone").value;

        telefone = telefone.replace(/\D/g, "");

        if (telefone.length === 11) {
            telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        } else if (telefone.length === 10) {
            telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
        }

        document.getElementById("formTelefone").value = telefone;
    }
};

// ✅ Properly adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formTelefone").addEventListener("input", contato.formataTelefone);
    document.getElementById("addContato").addEventListener("submit", contato.enviarDadosContato);
});
