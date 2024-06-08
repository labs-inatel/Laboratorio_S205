document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu');
    const profileIcon = document.getElementById('perfil');
    const searchInput = document.getElementById('txtBusca');
    const eventosInput = document.getElementById('txtBusca'); 
    const infoButtons = document.querySelectorAll('.mais_informacoes');
    const inscricaoButton = document.querySelectorAll('.inscricao');
    const indisponivelButton = document.querySelectorAll('.indisponivel');
    const courseCards = document.querySelectorAll('.cartao_disciplina');
    const eventsCards = document.querySelectorAll('.cartao_eventos');
    const sidebar = document.getElementById('sidebar');
    const profileSidebar = document.getElementById('profile-sidebar');
    const eventosInatel = document.getElementById('eventos-inatel'); 
    const servicosacademicos = document.getElementById('servicos-academicos'); 


    menuIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        sidebar.style.left = (sidebar.style.left === '0px') ? '-250px' : '0px';
    });

    profileIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        profileSidebar.style.right = (profileSidebar.style.right === '0px') ? '-250px' : '0px';
    });

    document.addEventListener('click', (event) => {
        if (sidebar.style.left === '0px' && !sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.style.left = '-250px';
        }
        if (profileSidebar.style.right === '0px' && !profileSidebar.contains(event.target) && !profileIcon.contains(event.target)) {
            profileSidebar.style.right = '-250px';
        }
    });

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        courseCards.forEach(card => {
            const courseTitle = card.querySelector('h4').innerText.toLowerCase();
            if (courseTitle.includes(searchText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    eventosInput.addEventListener('input', () => {   
        const searchText = eventosInput.value.trim().toLowerCase();
        eventsCards.forEach(card => {
            const courseTitle = card.querySelector('h2').innerText.trim().toLowerCase();
            if (courseTitle.includes(searchText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    infoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const courseCard = event.target.closest('.cartao_disciplina');
            const infoCard = courseCard.querySelector('.cartao_informacoes');
            infoCard.style.display = (infoCard.style.display === 'block') ? 'none' : 'block';
        });
    });

    
    inscricaoButton.forEach(button => {
        button.addEventListener('click', (event) => {
            infoCard.style.display = (infoCard.style.display === 'block') ? 'none' : 'block';
        });
    });

    
    indisponivelButton.forEach(button => {
        button.addEventListener('click', (event) => {
            infoCard.style.display = (infoCard.style.display === 'block') ? 'none' : 'block';
        });
    });

    eventosInatel.addEventListener('click', () => {
        window.location.href = 'telaFuncionalidade.html'; 
    });

    servicosacademicos.addEventListener('click', () => {
        window.location.href = 'telaMenu.html';
    });
});
