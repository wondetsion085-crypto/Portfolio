const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
const themeLogo = document.querySelector('.theme-logo');
const themeIcon = document.getElementById('themeIcon');

 menuToggle.addEventListener("click",  () => {
    const isOpen =  navbar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textcontent=isopen ? '✕' : '☰';
});
 
 navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener( 'click',() => {
       navbar.classList.remove('open');
        menuToggle.setAttribute("aria-expanded", 'FALSE');
        menuToggle.textContent = '☰';
  });
  const section = document.querySelectorAll('main section[id]');
  const navlink = document.querySelectorAll('navbar a');
 const observer  = new IntersectionObserver(entries => {


