function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa");
    let valorPesquisa = campoPesquisa.value.toLowerCase();

    if (valorPesquisa === "") {
        section.innerHTML = "<p>Por favor, insira um termo de pesquisa.</p>";
        return;
    }

    let resultados = "";
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(valorPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">mais informações</a>
                </div>
            `;
        }
    }

    section.innerHTML = resultados || "<p>Nenhum resultado encontrado para o termo: '" + valorPesquisa + "'</p>";
}