let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function salvarFavoritos() {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function estaFavorito(nome) {
    return favoritos.includes(nome);
}