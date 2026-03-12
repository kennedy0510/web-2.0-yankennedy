document.addEventListener('DOMContentLoaded', () => {
    // Rotação do banner (mantido)
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function nextSlide() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    slides[0].classList.add('active');
    setInterval(nextSlide, 4000);

    // Filtro dos botões Filmes/Séries
    const filterButtons = document.querySelectorAll('.btn-filter');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Troca o botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});