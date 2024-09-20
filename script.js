// Toggle dropdown visibility on hover over the Join button
document.getElementById('joinBtn').addEventListener('mouseenter', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'block';
});

document.getElementById('joinBtn').addEventListener('mouseleave', function() {
    const dropdown = document.querySelector('.dropdown');
    setTimeout(() => {
        dropdown.style.display = 'none';
    }, 2000); // Delay hiding dropdown for 2 seconds to allow smooth animation
});

// Toggle side menu visibility on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
    const sideMenu = document.getElementsByClassName('.sideMenu');
    sideMenu.classList.toggle('active');
});
// most popular destion------------------------------------------
let items = document.querySelectorAll('.slider .item');
let active = 3;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(2px)';
        items[i].style.opacity = stt > 2 ? 0 : 1;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(2px)';
        items[i].style.opacity = stt > 2 ? 0 : 1.5;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}



// -------faq------------
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.querySelector('.faq-question').addEventListener('click', function () {
            const answer = item.querySelector('.faq-answer');
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});

