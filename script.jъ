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

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Светлая тема';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Темная тема';
    }
    
    // Сохраняем выбор темы в localStorage
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Загрузка сохраненной темы при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Светлая тема';
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
        modal.style.display = 'none';
    }
});

// Калькулятор - исправленный код
const display = document.getElementById('display');
const calcButtons = document.querySelectorAll('.calc-btn');
const historyList = document.getElementById('historyList');

let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetScreen = false;

// История вычислений
let history = [];

// Обновление дисплея
function updateDisplay() {
    display.value = currentInput;
}

// Добавление в историю
function addToHistory(expression, result) {
    const historyItem = `${expression} = ${result}`;
    history.unshift(historyItem);
    
    // Ограничиваем историю 10 последними записями
    if (history.length > 10) {
        history.pop();
    }
    
    updateHistoryDisplay();
}

// Обновление отображения истории
function updateHistoryDisplay() {
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Вычисление результата
function calculate() {
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result = 0;
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Ошибка: деление на 0';
            } else {
                result = prev / current;
            }
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    
    // Добавляем в историю
    if (operation && result !== 'Ошибка: деление на 0') {
        addToHistory(`${previousInput} ${operation} ${currentInput}`, result);
    }
    
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    shouldResetScreen = true;
}

// Обработка нажатий кнопок калькулятора
calcButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        // Обработка цифр
        if (!isNaN(value) || value === '.') {
            if (currentInput === '0' || shouldResetScreen) {
                currentInput = value === '.' ? '0.' : value;
                shouldResetScreen = false;
            } else {
                if (value === '.' && currentInput.includes('.')) return;
                currentInput += value;
            }
        }
        
        // Обработка операций
        else if (['+', '-', '*', '/', '%'].includes(value)) {
            if (previousInput !== '' && operation !== null && !shouldResetScreen) {
                calculate();
            }
            operation = value;
            previousInput = currentInput;
            shouldResetScreen = true;
        }
        
        // Обработка равно
        else if (value === '=') {
            if (operation === null || shouldResetScreen) return;
            calculate();
        }
        
        // Обработка очистки
        else if (value === 'C') {
            currentInput = '0';
            previousInput = '';
            operation = null;
        }
        
        // Обработка очистки ввода
        else if (value === 'CE') {
            currentInput = '0';
        }
        
        updateDisplay();
    });
});

// Обработка клавиатуры для калькулятора
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // Цифры и точка
    if (!isNaN(key) || key === '.') {
        const button = document.querySelector(`.calc-btn[data-value="${key}"]`);
        if (button) button.click();
    }
    
    // Операции
    else if (['+', '-', '*', '/', '%'].includes(key)) {
        const button = document.querySelector(`.calc-btn[data-value="${key}"]`);
        if (button) button.click();
    }
    
    // Равно и Enter
    else if (key === '=' || key === 'Enter') {
        const button = document.querySelector('.calc-btn.equals');
        if (button) button.click();
    }
    
    // Очистка (Escape)
    else if (key === 'Escape') {
        const button = document.querySelector(`.calc-btn[data-value="C"]`);
        if (button) button.click();
    }
    
    // Backspace
    else if (key === 'Backspace') {
        currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : '0';
        updateDisplay();
    }
});

// Инициализация калькулятора
updateDisplay();

// Форма обратной связи
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // В реальном приложении здесь был бы код отправки на сервер
        alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим на ${email} в ближайшее время.`);
        contactForm.reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});

// Кнопка "Наверх"
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация элементов при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Наблюдаем за карточками функций
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Наблюдаем за элементами галереи
document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

// Инициализация анимации плавающих фигур
function animateShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Устанавливаем начальную позицию
        let x = 0;
        let y = 0;
        
        // Анимация движения
        setInterval(() => {
            x += Math.sin(Date.now() / 1000 + index) * 0.5;
            y += Math.cos(Date.now() / 1000 + index) * 0.5;
            
            shape.style.transform = `translate(${x}px, ${y}px)`;
        }, 50);
    });
}

// Запуск анимации после загрузки страницы
window.addEventListener('load', () => {
    animateShapes();
    
    // Добавляем CSS класс для анимации появления
    document.body.classList.add('loaded');
});
