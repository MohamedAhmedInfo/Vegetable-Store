let menuBar = document.getElementById("menu-bar");
let navBar = document.querySelector(".header-2 .navbar");
let headerTwo = document.querySelector(".header-2");

// when click on icon-menu toggle show and hidden navbar
menuBar.addEventListener("click",(eo) => {
    menuBar.classList.toggle("icon-cross")
    navBar.classList.toggle("active");

})


// when scrolY hidden navbar
window.onscroll = ()=>{
    menuBar.classList.remove("icon-cross")
    navBar.classList.remove("active");

    if (window.scrollY > 150) {
        headerTwo.classList.add("active")
    }else{
        headerTwo.classList.remove("active")

    }
}


// when reload show continor-loader
let continorLoader = document.querySelector(".continor-loader");
window.onload = ()=>{

continorLoader.style.display = "block"

setTimeout(() => {
continorLoader.style.display = "none"
    
}, 2000);

}