document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => menu.classList.toggle('open'));
