let slider = document.querySelector('.slider');
let textContainer = document.querySelector('.text-container');
let pagination = document.querySelectorAll('.pagination .pagination-list .pagination-item .pagination-button');

function slide(id){
    textContainer.style.left = -100 * id + "%";
    pagination.forEach(pag =>{
        pag.classList.remove('active')
    });

    pagination[id].classList.add('active');
}

let interval = setInterval(autoSlide,4000);
let textID = 1;

function autoSlide(){
    if(textID>pagination.length-1){
        textID = 0;
    }
    slide(textID);
    textID++;
}

for (let i = 0; i < pagination.length; i++){
    pagination[i].addEventListener("click",() => {
        clearInterval(interval);
        slide(i);
        textID = i+1;
        interval = setInterval(autoSlide,4000);
    })
}