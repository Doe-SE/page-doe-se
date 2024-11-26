// $(document).ready(function () {
//   $("#filtro").on("keyup", function () {
//     var value = $(this).val().toLowerCase();
//     $("#campanhaContainer .col-md-4").filter(function () {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//     });
//   });
// });

// Dados de exemplo para as campanhas
const campanhas = [
  {
    nome: "Educação para Todos",
    categoria: "Educação",
    alcance: 5000,
    descricao: "Projeto para fornecer material escolar para crianças carentes.",
    imagem: "../assets/images/educacao.png",
    progresso: 75, 
  },
  {
    nome: "Saúde em Primeiro Lugar",
    categoria: "Saúde",
    alcance: 10000,
    descricao: "Campanha de vacinação e check-up gratuito em comunidades.",
    imagem: "../assets/images/saude.png",
    progresso: 40,
  },
  {
    nome: "Preservação da Amazônia",
    categoria: "Meio Ambiente",
    alcance: 50000,
    descricao:
      "Iniciativa para plantar árvores e preservar a floresta amazônica.",
    imagem: "../assets/images/meio-ambiente.jpg",
    progresso: 20,
  },
  {
    nome: "Alimento Solidário",
    categoria: "Assistência Social",
    alcance: 2000,
    descricao:
      "Distribuição de cestas básicas para famílias em situação de vulnerabilidade.",
    imagem: "../assets/images/fome.jpeg",
    progresso: 60,
  },
  {
    nome: "Arte nas Escolas",
    categoria: "Cultura e Artes",
    alcance: 3000,
    descricao: "Projeto para levar oficinas de arte para escolas públicas.",
    imagem: "../assets/images/arte-escola.jpg",
    progresso: 85,
  },
  {
    nome: "Esporte para Todos",
    categoria: "Esportes",
    alcance: 1500,
    descricao: "Criação de centros esportivos em comunidades carentes.",
    imagem: "../assets/images/esportes.jpg",
    progresso: 50,
  },
];

function criarCardCampanha(campanha) {
  return `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${campanha.imagem}" class="card-img-top" alt="${campanha.nome}">
                        <span class="card-category">${campanha.categoria}</span>
                        <div class="card-body">
                            <h5 class="card-title">${campanha.nome}</h5>
                            <p class="card-text"><i class="fas fa-users"></i> Alcance: ${campanha.alcance} pessoas</p>
                            <p class="card-text">${campanha.descricao}</p>
                            <div class="progress my-4"> 
                              <div class="progress-bar" role="progressbar" style="background-color:green; width: ${campanha.progresso}%" aria-valuenow="${campanha.progresso}" aria-valuemin="0" aria-valuemax="100">${campanha.progresso}%</div> 
                            </div>
                            <a href="./pagina-campanha.html?categoria=${campanha.categoria}" class="btn btn-primary">Doe Agora</a>
                        </div>
                    </div>
                </div>
            `;
}

function renderizarCampanhas(campanhasFiltradas = campanhas) {
  const container = document.getElementById("campanhaContainer");
  container.innerHTML = campanhasFiltradas.map(criarCardCampanha).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  renderizarCampanhas();

  const filtroInput = document.getElementById("filtro");
  filtroInput.addEventListener("input", function () {
    const termo = this.value.toLowerCase();
    const campanhasFiltradas = campanhas.filter(
      (campanha) =>
        campanha.nome.toLowerCase().includes(termo) ||
        campanha.categoria.toLowerCase().includes(termo)
    );
    renderizarCampanhas(campanhasFiltradas);
  });
});
