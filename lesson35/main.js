var slideIndex = 1;

function showSlides(n){
    var i;
    var slides= document.getElementsByClassName("slide");

    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    if(N > slides.length){
        slideIndex=1;
    }

    if(n>1){
        showIndex=slides.length;
    }

    slides[slideIndex-1].style.display="block";

}

showSlides(1);

function plusSlides(n){
    slideIndex += n;
    showSlides(slideIndex);
}

setInterval(plusSlides,3000,1);