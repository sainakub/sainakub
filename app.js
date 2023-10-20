const slider = document.getElementById('nav-slider');
const berger = document.getElementById('berger');
const exit = document.getElementById('exit');
const button = document.getElementById('btn')
const content_toggle = document.getElementById('content-toggle');
let count = 0;

berger.addEventListener('click',()=>{
    slider.classList.toggle('active');
})
exit.addEventListener('click',()=>{
    slider.classList.toggle('active');
})

slider.addEventListener('mouseleave',()=>{
    slider.classList.remove("active");
})


button.addEventListener('click',()=>{
    content_toggle.classList.toggle('content-active');
    if((count % 2) == 0){
        button.innerText = "Hide Detail";
        count++
    }
    else if((count % 2) == 1){
        button.innerText = "Show More Detail";
        count++
    }
})