let elOpen = document.querySelector(".open");
let elClose = document.querySelector(".close");
let elContainer = document.querySelector(".container");
let elCircle = document.querySelector(".circle");
let elNaa = document.querySelector(".naa")
elOpen.addEventListener("click", function(){
    elContainer.classList.add("container-rot");
    elCircle.classList.add("circle_rot")
    elNaa.classList.add("naa-rot")
    console.log("salom")
})
elClose.addEventListener("click", function(){
    elContainer.classList.remove("container-rot");
    elCircle.classList.remove("circle_rot")
    elNaa.classList.remove("naa-rot")
})

