window.onload = function(){
    const hamburger = document.querySelector('.toggle')
    const mobile_menu = document.querySelector('.hamburger');

    hamburger.addEventListener('click',()=>{
    mobile_menu.classList.toggle('active')
    console.log(5)
})
 }