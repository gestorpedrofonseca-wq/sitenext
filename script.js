document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const phoneNumber = '558894894110';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as soluções tecnológicas da Next Systems para o mercado de bets.');

    whatsappBtn.addEventListener('click', () => {
        // Subtle click effect
        whatsappBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
        }, 150);
    });

    // Basketball Banner Logic
    const banner = document.getElementById('basketball-banner');
    const closeBtn = document.getElementById('close-banner');
    const bannerCta = document.getElementById('banner-cta');

    setTimeout(() => {
        if (banner) {
            banner.classList.remove('hidden');
        }
    }, 5000);

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.style.opacity = '0';
            banner.style.transform = 'translateY(20px)';
            setTimeout(() => banner.remove(), 300);
        });
    }

    if (bannerCta) {
        bannerCta.addEventListener('click', () => {
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o Minigame de Basquete com RA.')}`, '_blank');
        });
    }

    // Dynamic Word Switching Logic
    const changingWord = document.getElementById('changing-word');
    const words = ['AUTOMÁTICOS', 'DISRUPTIVOS', 'DOMINANTES', 'EXCLUSIVOS'];
    let currentIndex = 0;

    function updateWord() {
        changingWord.classList.add('fade');

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            changingWord.textContent = words[currentIndex];
            changingWord.classList.remove('fade');
        }, 300); // Match CSS transition time
    }

    setInterval(updateWord, 1500); // Fast speed
});
