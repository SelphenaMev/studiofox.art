document.addEventListener('DOMContentLoaded', () => {

    // Patinho Mode 🦆
    const patinhoModeBtn = document.getElementById('patinho-mode-btn');
    let isPatinhoMode = false;

    patinhoModeBtn.addEventListener('click', () => {
        isPatinhoMode = !isPatinhoMode;
        if (isPatinhoMode) {
            document.body.style.cursor = 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/duck.png"), auto';
            patinhoModeBtn.textContent = 'Fox Mode 🦊';
            document.body.classList.add('patinho-mode-active');
            document.getElementById('patinho-message').classList.add('show-patinho-message'); // Adiciona a mensagem quando o patinho mode é ativado
        } else {
            document.body.style.cursor = 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/star.png"), auto';
            patinhoModeBtn.textContent = 'Patinho Mode 🦆';
            document.body.classList.remove('patinho-mode-active');
            document.getElementById('patinho-message').classList.remove('show-patinho-message'); // Remove a mensagem quando o patinho mode é desativado
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('section');
    hiddenElements.forEach((el) => observer.observe(el));

});
