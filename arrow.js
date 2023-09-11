const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');

for(let i=1; 1<btns.length; i++){
  btns[1].addEventListener('click', filterImg);
}

function setActiveBtn(e){
  buttons.forEach(btn =>{
    buttons.classList.remove('btn-clicked');
  });

  e.target.classList.add('btn-clicked');
}

function filtering(e){
  setActiveBtn(e);

  imgs.forEach(img =>{
    img.classList.remove('img-shrink');
    img.classList.add('img-expand');

    const imgType = parseInt(img.dataset.img);

    const btntype = parseInt(e.target.dataset.btn);

    if(imgType !== btntype){
      img.classList.remove('img-expand');
      img.classList.add('img-shrink');
    }
  });
}

btns[0].addEventListener('click', (e)=>{
  setActiveBtn(e);
  imgs.forEach(img =>{
    img.classList.remove('img-shrink');
    img.classList.add('img-expand');
  });
});

let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

