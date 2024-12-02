$(document).ready(function () {
  // Flag de controle para verificar login
  let isLoggedIn = false;
  let userType = ""; // Variável para armazenar o tipo de usuário

  // Scroll suave para os links de navegação
  $(".scroll-link").click(function (event) {
    event.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 70 }, 800);
  });

  // Aplicando máscaras de CPF e CNPJ
  $("#cpf").mask("000.000.000-00", { reverse: true });
  $("#cnpj").mask("00.000.000/0000-00", { reverse: true });

  // Alterna os campos de acordo com o tipo de usuário selecionado
  $("#tipoUsuario")
    .change(function () {
      if ($(this).val() === "fisica") {
        $("#fisicaFields").show();
        $("#juridicaFields").hide();
        $("#nomeEmpresa").prop("required", false);
        $("#cnpj").prop("required", false);
      } else {
        $("#juridicaFields").show();
        $("#fisicaFields").hide();
        $("#nomeEmpresa").prop("required", true);
        $("#cnpj").prop("required", true);
      }
    })
    .trigger("change");

  // Função para exibir alertas personalizados
  function showAlert(message, type = "success") {
    const alertContainer = $("#registerAlertContainer");
    alertContainer
      .removeClass("alert-success alert-danger")
      .addClass(`alert-${type}`);
    $("#alertMessage").text(message);
    alertContainer.fadeIn();
    setTimeout(() => alertContainer.fadeOut(), 3000);
  }

  // Exibir alerta personalizado ao enviar o formulário de cadastro
  $("#userForm").submit(function (event) {
    event.preventDefault();
    if (this.checkValidity()) {
      showAlert("Cadastro realizado com sucesso!", "success");
      $("#registerModal").modal("hide");
      window.location.href = "pages/criar-campanha.html";
    } else {
      showAlert("Erro ao cadastrar, por favor, tente novamente.", "danger");
      this.reportValidity();
    }
  });

  // Função para simular login e exibir dropdown de perfil
  function showProfileDropdown(username, type) {
    if (!isLoggedIn) {
      $("#loginLink").hide();
      $("#registerItem").hide();

      // Adicionar ícone de perfil ao invés dos botões
      const profileIcon = `
  <li class="nav-item dropdown" id="profileDropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-user-circle fa-lg"></i> Olá, ${username}
      </a>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#accountModal">Conta</a></li>
          <li><a class="dropdown-item" href="#" id="logout">Sair</a></li>
      </ul>
  </li>`;

      $(".navbar-nav").append(profileIcon);
      isLoggedIn = true; // Marcar como logado
      userType = type; // Salvar o tipo de usuário

      // Configurações do modal com base no tipo de usuário
      $("#accountName").text(type === "fisica" ? "DOADOR" : "EMPRESA");
      $("#myCampaigns").text(
        type === "fisica" ? "Minhas Doações" : "Minhas Campanhas"
      );
      if (type === "fisica") {
        $("#createCampaign").hide();
      } else {
        $("#createCampaign").show();
      }
    }
  }

  // Envia o formulário de login com validação fictícia
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    if (!isLoggedIn) {
      // Verificar se já está logado
      const email = $("#loginEmail").val();
      const password = $("#loginPassword").val();
      userType = email.endsWith("@empresa.com") ? "juridica" : "fisica"; // Determinar tipo de usuário

      if (
        (email === "usuario@exemplo.com" && password === "123456") ||
        (email === "usuario@empresa.com" && password === "654321")
      ) {
        alert("Login bem-sucedido!");

        const username = userType === "fisica" ? "Alfred" : "Empresa XYZ";
        showProfileDropdown(username, userType);

        $("#loginModal").modal("hide");
      } else {
        alert("Email ou senha incorretos!");
      }
    }
  });

  // Configura o comportamento do botão Sair
  $(document).on("click", "#logout", function () {
    $("#profileDropdown").remove();
    $("#loginLink").show();
    $("#registerItem").show();
    isLoggedIn = false; // Resetar estado de login
    userType = ""; // Resetar tipo de usuário
  });

  // Abre o modal de cadastro a partir do modal de login
  $("#loginModal").on("show.bs.modal", function () {
    $("#registerLink").on("click", function () {
      $("#loginModal").modal("hide");
      $("#registerModal").modal("show");
    });
  });

  // Redirecionamento ao clicar em "Crie uma Campanha"
  $("#createCampaignButton").click(function (event) {
    event.preventDefault();
    if (isLoggedIn && userType === "juridica") {
      window.location.href = "pages/criar-campanha.html";
    } else if (!isLoggedIn) {
      $("#loginModal").modal("show");
    } else {
      alert("Somente usuários corporativos podem criar campanhas.");
    }
  });
});


const campanhas = [
  {
    nome: "Educação para Todos",
    categoria: "Educação",
    alcance: 5000,
    descricao:
      "Projeto para fornecer material escolar para crianças carentes.",
    imagem: "../assets/images/educacao.png",
  },
  {
    nome: "Saúde em Primeiro Lugar",
    categoria: "Saúde",
    alcance: 10000,
    descricao:
      "Campanha de vacinação e check-up gratuito em comunidades.",
    imagem: "../assets/images/saude.png",
  },
  {
    nome: "Preservação da Amazônia",
    categoria: "Meio Ambiente",
    alcance: 50000,
    descricao:
      "Iniciativa para plantar árvores e preservar a floresta amazônica.",
    imagem: "../assets/images/meio-ambiente.jpg",
  }
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
                      <a href="./pagina-campanha.html?categoria=${campanha.categoria}" class="btn btn-primary">Ver Campanha</a>
                  </div>
              </div>
          </div>
      `;
}