document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobileOverlay');

    // Highlight current chapter in sidebar
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    const links = document.querySelectorAll('.sidebar nav a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile menu
    window.toggleMobile = function () {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    };

    window.closeMobile = function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    };

    // Close mobile on link click
    links.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) {
                closeMobile();
            }
        });
    });

    // Close mobile on overlay click
    overlay.addEventListener('click', closeMobile);
});
