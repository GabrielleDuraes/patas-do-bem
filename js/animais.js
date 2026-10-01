const animais = [
    {
        nome: "Zeus",
        imagem: "../imagens/zeus.jpg",
        descricao: "Zeus é um cachorro carinhoso e brincalhão que está procurando uma família responsável.",
        status: "Disponível para adoção"
    }
];

function mostrarAnimais() {

    const listaAnimais = document.getElementById("lista-animais");

    if (!listaAnimais) {
        return;
    }

    listaAnimais.innerHTML = animais.map(function(animal) {

        const textoBotao = estaFavorito(animal.nome)
            ? "★ Remover dos favoritos"
            : "☆ Favoritar";

        return `
            <div class="animal-card">

                <div>
                    <h3>
                        ${animal.nome}
                        <span class="badge">${animal.status}</span>
                    </h3>

                    <img
                        src="${animal.imagem}"
                        alt="${animal.nome} disponível para adoção"
                    >

                    <p>${animal.descricao}</p>

                    <button
                        type="button"
                        class="btn-favorito"
                        data-nome="${animal.nome}"
                    >
                        ${textoBotao}
                    </button>
                </div>

            </div>
        `;

    }).join("");
}

document.addEventListener("click", function(event) {

    const botaoFavorito = event.target.closest(".btn-favorito");

    if (!botaoFavorito) {
        return;
    }

    const nomeAnimal = botaoFavorito.dataset.nome;

    if (estaFavorito(nomeAnimal)) {

        favoritos = favoritos.filter(function(nome) {
            return nome !== nomeAnimal;
        });

    } else {

        favoritos.push(nomeAnimal);
    }

    salvarFavoritos();
    mostrarAnimais();
});