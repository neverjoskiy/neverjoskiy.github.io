document.addEventListener('DOMContentLoaded', () => {
    // Выбираем все элементы, которые мы хотим анимировать при прокрутке
    const animatedElements = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Если элемент попадает в область видимости
            if (entry.isIntersecting) {
                // Делаем его видимым (удаляем класс 'opacity: 0' из CSS, если он был)
                // и добавляем класс анимации из Animate.css, указанный в HTML
                entry.target.style.opacity = '1';
                entry.target.classList.add('animate__fadeInUp'); // Пример анимации

                // Останавливаем наблюдение, чтобы анимация сработала только один раз
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px', // Наблюдение от границы вьюпорта
        threshold: 0.1 // Срабатывание, когда 10% элемента видно
    });

    // Наблюдаем за всеми элементами, которые должны анимироваться
    animatedElements.forEach(element => {
        // Мы уже добавили классы в HTML: animate__animated и нужную анимацию
        // Для блоков .feature-card мы в CSS установили opacity: 0
        // Для элементов в шапке и hero-секции классы уже сработают при загрузке (Animate.css)
        if (element.classList.contains('feature-card')) {
             observer.observe(element);
        }
    });

    // Дополнительно: Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
