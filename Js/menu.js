const menu = document.querySelector('.menu');
const nave = document.querySelector('.menu-nav');

console.log(menu)
console.log(nave)

menu.addEventListener('click', ()=>{
    nave.classList.toggle('spread')
})