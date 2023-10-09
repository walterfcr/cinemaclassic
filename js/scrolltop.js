$(document).ready(function(){
    smoothScroll.init({
        selector: '[data-scroll]',
        speed:2000,
       // easing:'easeInQuintQuad',
        easing: 'easyInCubic'
        //easing: 'easyInOutQuad',
        //easing:'easeInQuart',
        //easing: 'easeInOutCubic',
    });
});

document.getElementById("flechabtn").style.display = "none";
window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180){
        document.getElementById("flechabtn").style.display = "block";
    } else {
        document.getElementById("flechabtn").style.display = "none";
    }
}

