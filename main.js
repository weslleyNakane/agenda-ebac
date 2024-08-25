const form = document.getElementById("form");
const agendaNome = [];
const agendaNumero = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionarContato();
});

function adicionarContato() {
    const nome = document.getElementById("campo-nome").value.trim();
    const numero = document.getElementById("campo-numero").value.trim();


    if (agendaNumero.includes(parseFloat(numero))) {
        alert(`O número ${numero} já consta na lista`);
    } else {

        agendaNome.push(nome);
        agendaNumero.push(parseFloat(numero));


        let linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${nome}</td>
            <td>${numero}</td>
            <td>
                <a href="#"><img class="img-container" src="./img/icons8-phone-64.png" alt="telefone"></a>
                <a href="#" class="btn-remover"><img class="img-container" src="./img/icons8-cancel-64.png" alt="x para cancelar"></a>
            </td>`;

        document.querySelector("tbody").appendChild(linha);


        linha.querySelector(".btn-remover").addEventListener("click", function (e) {
            e.preventDefault();
            removerContato(linha, nome, numero);
        });
    }


    document.getElementById("campo-nome").value = "";
    document.getElementById("campo-numero").value = "";
}

function removerContato(linha, nome, numero) {
    linha.remove();

    const index = agendaNome.indexOf(nome);
    if (index > -1) {
        agendaNome.splice(index, 1);
        agendaNumero.splice(index, 1);
    }
}