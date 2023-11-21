const navBar = document.querySelector('.links');
const burger = document.querySelector('.burger');

burger.addEventListener("click" , () => {
    navBar.classList.toggle('active');
    burger.classList.toggle('active');
})