document.addEventListener("DOMContentLoaded", function () {
  const editImageButton = document.getElementById("editImageButton");
  const editPersonalDataButton = document.getElementById(
    "editPersonalDataButton"
  );
  const myDonationsButton = document.getElementById("myDonationsButton");
  const settingsButton = document.getElementById("settingsButton");
  const contentArea = document.getElementById("contentArea");

  const showAlert = (message) => {
    alert(message);
  };

  const loadContent = (htmlContent) => {
    contentArea.innerHTML = htmlContent;
  };

  editImageButton.addEventListener("click", () => {
    showAlert("Funcionalidade de editar imagem não implementada ainda.");
  });

  editPersonalDataButton.addEventListener("click", () => {
    loadContent(`
          <h5>Editar Dados Pessoais</h5>
          <form>
              <div class="mb-3">
                  <label class="form-label">Nome</label>
                  <input type="text" class="form-control" value="Alice Dias">
              </div>
              <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" value="usuario@exemplo.com">
              </div>
              <button type="submit" class="btn btn-primary">Salvar Alterações</button>
          </form>
      `);
  });

  myDonationsButton.addEventListener("click", () => {
    loadContent(`
        <h5>Minhas Doações</h5>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <img src="https://via.placeholder.com/50" alt="Livros para Biblioteca" class="me-3">
                    Doação de livros para a Biblioteca Municipal
                </div>
                <button class="btn btn-outline-success btn-sm">Doar Novamente</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <img src="https://via.placeholder.com/50" alt="Roupas para Abrigo" class="me-3">
                    Doação de roupas para o Abrigo Esperança
                </div>
                <button class="btn btn-outline-success btn-sm">Doar Novamente</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <img src="https://via.placeholder.com/50" alt="Alimentos para Cozinha Comunitária" class="me-3">
                    Doação de alimentos para a Cozinha Comunitária
                </div>
                <button class="btn btn-outline-success btn-sm">Doar Novamente</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <img src="https://via.placeholder.com/50" alt="Brinquedos para Orfanato" class="me-3">
                    Doação de brinquedos para o Orfanato Alegria
                </div>
                <button class="btn btn-outline-success btn-sm">Doar Novamente</button>
            </li>
        </ul>
    `);
  });

  settingsButton.addEventListener("click", () => {
    loadContent(`
          <h5>Configurações</h5>
          <button class="btn btn-secondary">Alterar Senha</button>
          <button class="btn btn-secondary">Configurações de Privacidade</button>
      `);
  });

  backToHomeButton.addEventListener("click", () => {
    window.location.href = "/index.html"; // Substitua 'index.html' pelo caminho correto para sua página inicial
  });
});
