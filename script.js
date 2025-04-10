/*const hamburger=document.querySelector(".hamburger");
const navlinks=document.querySelector(".nav-links");
hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
})*/
const hamburger=document.querySelector(".hamburger");
const closeMenu=document.querySelector(".closeMenu");
const openMenu=document.querySelector(".openMenu");

openMenu.addEventListener('click',()=>{
    hamburger.style.display='flex';
    hamburger.style.top='0';
});
closeMenu.addEventListener('click',()=>{
    hamburger.style.top='-100%';
});
/*function show(){
    hamburgerMenu.style.display='flex';
    hamburgerMenu.style.top='0';
}

function close(){
    hamburgerMenu.style.top='-100%';
}*/


