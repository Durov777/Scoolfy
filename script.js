// Активация мобильного меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Переключение темы
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.className = 'fas fa-sun';
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Сменить тему';
    } else {
        themeIcon.className = 'fas fa-moon';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Сменить тему';
    }
});

// Галерея с модальным окном
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close-modal');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = item.querySelector('img').src;
        modalCaption.innerHTML = item.querySelector('.gallery-overlay h3').textContent;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none
