const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
const themeLogo = document.querySelector('.theme-logo');
const themeIcon = document.getElementById('themeIcon');

 menuToggle.addEventListener("click",  () => {
    const isOpen =  navbar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textcontent=isopen ? '✕' : '☰';
});