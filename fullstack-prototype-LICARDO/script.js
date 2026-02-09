document.addEventListener('DOMContentLoaded', () => {
    const authLinks = document.getElementById('authLinks');
    const userMenu = document.getElementById('userMenu');
    const displayUsername = document.getElementById('displayUsername');
    const adminSection = document.querySelector('.role-admin');
    
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');

    function syncState() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const role = localStorage.getItem('userRole');
        const user = localStorage.getItem('username');

        if (isLoggedIn) {
            authLinks.classList.add('hidden');
            userMenu.classList.remove('hidden');
            displayUsername.textContent = user;
            if (role === 'Admin') adminSection.classList.remove('hidden');
        } else {
            authLinks.classList.remove('hidden');
            userMenu.classList.add('hidden');
            adminSection.classList.add('hidden');
        }
    }

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', 'Admin');
        localStorage.setItem('username', 'Jared');
        syncState();
    });

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.clear();
        syncState();
    });

    getStartedBtn.addEventListener('click', () => {
        alert(localStorage.getItem('isLoggedIn') === 'true' ? "Proceeding..." : "Please log in.");
    });

    syncState();
});