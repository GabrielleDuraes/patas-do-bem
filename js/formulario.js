document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        if (typeof Swal !== "undefined") {

            Swal.fire({
                title: "Cadastro enviado!",
                text: "Obrigado pelo interesse em ser voluntário da ONG Patas do Bem.",
                icon: "success",
                confirmButtonText: "Fechar"
            });

        } else {

            const modal = document.getElementById("modal-sucesso");

            if (modal) {
                modal.style.display = "flex";
            }

        }

    });

    formulario.addEventListener("input", function(event) {

        if (event.target.matches("input")) {

            if (event.target.validity.valid) {
                event.target.style.borderColor = "green";
            } else {
                event.target.style.borderColor = "red";
            }

        }

    });

});