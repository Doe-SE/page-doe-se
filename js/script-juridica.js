document.addEventListener('DOMContentLoaded', function () {
    const editImageButton = document.getElementById('editImageButton');
    const editCompanyDataButton = document.getElementById('editCompanyDataButton');
    const myCampaignsButton = document.getElementById('myCampaignsButton');
    const createCampaignButton = document.getElementById('createCampaignButton');
    const settingsButton = document.getElementById('settingsButton');
    const contentArea = document.getElementById('contentArea');

    const showAlert = (message) => {
        alert(message);
    };

    const loadContent = (htmlContent) => {
        contentArea.innerHTML = htmlContent;
    };

    editImageButton.addEventListener('click', () => {
        showAlert('Funcionalidade de editar imagem não implementada ainda.');
    });

    editCompanyDataButton.addEventListener('click', () => {
        loadContent(`
            <h5>Editar Dados da Empresa</h5>
            <form>
                <div class="mb-3">
                    <label class="form-label">Nome da Empresa</label>
                    <input type="text" class="form-control" value="Empresa XYZ">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" value="usuario@empresa.com">
                </div>
                <button type="submit" class="btn btn-primary">Salvar Alterações</button>
            </form>
        `);
    });

    myCampaignsButton.addEventListener('click', () => {
        loadContent(`
            <h5>Minhas Campanhas</h5>
            <ul class="list-group">
                <li class="list-group-item">
                    <div>
                        <img src="https://via.placeholder.com/50" alt="Campanha A" class="me-3">
                        500kg de perecíveis arrecadados
                    </div>
                    <div class="campaign-actions">
                        <button class="btn btn-outline-info btn-sm">Detalhes</button>
                        <button class="btn btn-outline-primary btn-sm">Editar</button>
                        <button class="btn btn-outline-danger btn-sm">Excluir</button>
                        <button class="btn btn-outline-warning btn-sm">Pausar</button>
                    </div>
                </li>
                <li class="list-group-item">
                    <div>
                        <img src="https://via.placeholder.com/50" alt="Campanha B" class="me-3">
                        3.000 peças de roupas arrecadadas
                    </div>
                    <div class="campaign-actions">
                        <button class="btn btn-outline-info btn-sm">Detalhes</button>
                        <button class="btn btn-outline-primary btn-sm">Editar</button>
                        <button class="btn btn-outline-danger btn-sm">Excluir</button>
                        <button class="btn btn-outline-warning btn-sm">Pausar</button>
                    </div>
                </li>
                <li class="list-group-item">
                    <div>
                        <img src="https://via.placeholder.com/50" alt="Campanha C" class="me-3">
                        5.000 litros de água arrecadados
                    </div>
                    <div class="campaign-actions">
                        <button class="btn btn-outline-info btn-sm">Detalhes</button>
                        <button class="btn btn-outline-primary btn-sm">Editar</button>
                        <button class="btn btn-outline-danger btn-sm">Excluir</button>
                        <button class="btn btn-outline-warning btn-sm">Pausar</button>
                    </div>
                </li>
                <li class="list-group-item">
                    <div>
                        <img src="https://via.placeholder.com/50" alt="Campanha D" class="me-3">
                        7.000kg de alimentos arrecadados
                    </div>
                    <div class="campaign-actions">
                        <button class="btn btn-outline-info btn-sm">Detalhes</button>
                        <button class="btn btn-outline-primary btn-sm">Editar</button>
                        <button class="btn btn-outline-danger btn-sm">Excluir</button>
                        <button class="btn btn-outline-warning btn-sm">Pausar</button>
                    </div>
                </li>
            </ul>
        `);
    });

    createCampaignButton.addEventListener('click', () => {
        window.location.href = 'criar-campanha.html';
    });

    settingsButton.addEventListener('click', () => {
        loadContent(`
            <h5>Configurações</h5>
            <button class="btn btn-secondary">Alterar Senha</button>
            <button class="btn btn-secondary">Configurações de Privacidade</button>
        `);
    });

    backToHomeButton.addEventListener('click', () => {
        window.location.href = '/index.html';  // Substitua 'index.html' pelo caminho correto para sua página inicial
    });
});