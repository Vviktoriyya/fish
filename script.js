let dev1 = document.getElementById('div1');

// Додаємо обробник події для руху миші
document.addEventListener('mousemove', (e) => {
    // Переміщаємо блок в точку, де знаходиться мишка
    dev1.style.left = (e.pageX - dev1.offsetWidth / 2) + 'px';
    dev1.style.top = (e.pageY - dev1.offsetHeight / 2) + 'px';

// Віднімаємо половину висоти, щоб центр був вказівником миші
});