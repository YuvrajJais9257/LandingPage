const carouselElement=document.getElementById("carouselExampleAutoplaying");
let isPaused=false;
carouselElement.addEventListener('click', ()=>{
    isPaused=true;
});

carouselElement.addEventListener('slid.bs.carousel', ()=>{
    setTimeout(()=>{
        isPaused=false;
        if(!carouselElement.querySelector('.carousel-inner').classList.contains('clicking')){
            $(carouselElement).carousel('next');
        }
    }, 30000);
});

$(".carousel-inner").on("mousedown", () => {
    carouselElement.querySelector(".carousel-inner").classList.add("clicking");
});

$(".carousel-inner").on("mouseup", () => {
    carouselElement.querySelector(".carousel-inner").classList.remove("clicking");
});

const scrollUp=document.querySelector("#scroll-up");

scrollUp.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});