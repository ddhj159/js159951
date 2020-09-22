let controlbox = document.querySelector(".controlbox")
let banbox= document.querySelector(".banbox")
banbox.addEventListener("mouseenter",function(){
    controlbox.style.display="block"
})
banbox.addEventListener("mouseleave",function(){
    controlbox.style.display = "none"
})
