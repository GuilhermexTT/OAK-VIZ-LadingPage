document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Simple toggle for now, could be expanded to a full menu
            console.log('Menu clicked');
            menuBtn.classList.toggle('active');
        });
    }

    // Scroll effect for header
    const header = id('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(18, 22, 18, 0.9)';
            header.style.padding = '1rem 0';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'transparent';
            header.style.padding = '2rem 0';
            header.style.backdropFilter = 'none';
        }
    });

    function id(name) {
        return document.getElementById(name);
    }
});
