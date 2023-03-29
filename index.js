const button = document.getElementById("btn")
const path1 = document.querySelector(".path1")
const path2 = document.querySelector(".path2")
const path3 = document.querySelector(".path3")
const path4 = document.querySelector(".path4")
const path5 = document.querySelector(".path5")

document.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    if(window.pageYOffset > 1400 && window.pageYOffset < 2400){
    path1.style.display= ("block")
    path2.style.display= ("block")
    path3.style.display= ("block")
    path4.style.display= ("block")
    path5  .style.display= ("block")
    }else{
    path1.style.display= ("none")
    path2.style.display= ("none")
    path3.style.display= ("none")
    path4.style.display= ("none")
    path5  .style.display= ("none")
    }
})