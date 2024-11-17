let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrossel li');
    const totalSlides = slides.length;

    currentIndex += direction;

    // Verifica se o índice está fora dos limites
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Move o carrossel
    const carrossel = document.querySelector('.carrossel ul');
    carrossel.style.transform = `translateX(-${currentIndex * 100}%)`; // Desloca as imagens
}
