
document.addEventListener('DOMContentLoaded', function() {
    const doarAgora = document.getElementById('doarAgora');
    
    doarAgora.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Verificar se o usuário está logado e é pessoa física
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userType = localStorage.getItem('userType');
        
        if (isLoggedIn && userType === 'fisica') {
            // Redirecionar para a página doar.html
            window.location.href = 'doar.html';
        } else if (isLoggedIn && userType === 'juridica') {
            alert('Apenas usuários pessoa física podem fazer doações.');
        } else {
            // Redirecionar para a página de login
            window.location.href = '../index.html#loginModal';
        }
    });
});